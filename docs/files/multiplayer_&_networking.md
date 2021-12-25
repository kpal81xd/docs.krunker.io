## Introduction

This section describes the different components of a networked game.\
Each client is connected to the server.\
The server receives information and then sends it to clients when needed.\
This allows you to see other players moving around for example.

## Sending Data

To send information from the client to the server you can use:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# send network message to server
GAME.NETWORK.send(
    "test", # str message key
    {a: 1} # obj data to send
);
```

The server has multiple ways to send data to clients:

<p class="hidep"><strong class="server-side">server-side</strong></p>

```krunkscript
# send network message to specific client
GAME.NETWORK.send(
    "test", # str message key
    {a: 1}, # obj data to send
    (str) player.id # str player id to send data to
);

# send network message to all clients
GAME.NETWORK.broadcast(
    "test", # str message key
    {a: 1} # obj data to send
);
```

Network messages are rate limited.\
You can only send 20 unique messages per second.\
To detect if you have hit the limit, call the broadcast & send functions like so:

<p class="hidep"><strong class="server-side">server-side</strong></p>

```krunkscript
# check for success:
if (GAME.NETWORK.broadcast("hi there", {a: 1}) {
    # message was sent
} else {
    # message rate limited
}
```

## Receiving Data

The **client.krnk** and **server.krnk** scripts both have built-in actions that receive all network messages.

___

**onNetworkMessage():** Called when the server receives data from the client.\
Use the id to distinguish between different event types.

<p class="hidep"><strong class="server-side">server-side</strong></p>

```krunkscript
action onNetworkMessage(str id, obj data, str playerID) {
    # id is the the unique id of the network message
    # data contains custom data from the client
    # playerID is the unique ID of the player that the message came from
    if (id == "test") {
        # do something with data
        GAME.log((num) data.x); # access property
    };
}
```

___

**onNetworkMessage():** Called when the client receives data from the server.\
Use the id to distinguish between different event types.

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
action onNetworkMessage(str id, obj data) {
    # id is the the unique id of the network message
    # data contains custom data from the server
    if (id == "test") {
        # do something with data:
        GAME.log((num) data.x); # access property
    };
}
```

## Syncing Objects

When synchronizing an objects position/data in a multiplayer environment, it is important that the server has the authority.\
If for example, you would like to have a cube that moves around for all players, you can do the following:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# Global variables:

# Immutable object
obj NetworkIDs = {
    CUBE_MOVEMENT_SYNC: "0",
    CUBE_INSTANCE_DELETE: "1"
};

obj cube = {};

# Start Game:
public action start() {
    cube = GAME.SCENE.addCube('', '#FF0000', 0, 0, 0, 5, 5, 5);
    cube.lastSyncTime = GAME.TIME.now();
    cube.absXPosLimit = 0;
    cube.velocity = {x: 0};
}

# Update:
public action update(num delta) {

    # Elapsed time since the last time the server has sent a message to synchronize the cube
    num timeSinceLastCubeSync = GAME.TIME.now() - toNum cube.lastSyncTime;

    num cubeUpdateDelta = timeSinceLastCubeSync < delta ? timeSinceLastCubeSync : delta;

    # Similar logic to the server

    # Converting the cube's values into their proper type once and for all
    num cubeXPosValue = toNum cube.position.x;
    num cubeAbsXPosLimit = toNum cube.absXPosLimit;
    num cubeXVel = toNum cube.velocity.x;

    # Reminder: Multiplying the velocity by delta makes the movement framerate independent
    num nextCubeXPosValue = cubeXPosValue + cubeUpdateDelta * cubeXVel;
    num absNextCubeXPosValue = Math.abs(nextCubeXPosValue);

    num distanceNextXPosBeyondLimit = absNextCubeXPosValue - cubeAbsXPosLimit;
    bool nextPosXIsBeyondLimit = distanceNextXPosBeyondLimit > 0;

    if(nextPosXIsBeyondLimit) {
        num sign = absNextCubeXPosValue / nextCubeXPosValue;
        nextCubeXPosValue = sign * cubeAbsXPosLimit;
        nextCubeXPosValue -= sign * distanceNextXPosBeyondLimit;
        cube.velocity.x = -cubeXVel;
    }

    cube.position.x = nextCubeXPosValue; 
}

# Receive cube data from server:
public action onNetworkMessage(str id, obj data) {

    # Check the network message id:
    if (id == toStr NetworkIDs.CUBE_MOVEMENT_SYNC) {
        cube.lastSyncTime = GAME.TIME.now();
        cube.velocity.x = toNum data.velocity.x;
        cube.absXPosLimit = toNum data.position.x.ABSOLUTE_LIMIT;
        cube.position.x = toNum data.position.x.value;

    } else if(id == toStr NetworkIDs.CUBE_INSTANCE_DELETE) {
        cube.delete(); # Necessary when the round ends
    }
}
```

<p class="hidep"><strong class="server-side">server-side</strong></p>

```krunkscript
# Global variables

# Immutable object
obj NetworkIDs = {
    CUBE_MOVEMENT_SYNC: "0",
    CUBE_INSTANCE_DELETE: "1"
};

num SERVER_UPDATE_RATE = 1000; # Constant value in ms (equivalent to 1 second)

obj cube = {
    position: {
        x: {
            ABSOLUTE_LIMIT: 50, # Constant value
            value: 0
        }
    },
    velocity: {x: 0.02}
};

# Runs every game tick
public action update(num delta) {

    # Converting the cube's values into their proper type once and for all
    num cubeXPosValue = toNum cube.position.x.value;
    num cubeAbsXPosLimit = toNum cube.position.x.ABSOLUTE_LIMIT;
    num cubeXVel = toNum cube.velocity.x;

    # Reminder: Multiplying the velocity by delta makes the movement framerate independent
    num nextCubeXPosValue = cubeXPosValue + delta * cubeXVel;
    num absNextCubeXPosValue = Math.abs(nextCubeXPosValue);

    num distanceNextXPosBeyondLimit = absNextCubeXPosValue - cubeAbsXPosLimit;
    bool nextPosXIsBeyondLimit = distanceNextXPosBeyondLimit > 0;

    if(nextPosXIsBeyondLimit) {
        num sign = absNextCubeXPosValue / nextCubeXPosValue;
        nextCubeXPosValue = sign * cubeAbsXPosLimit;
        nextCubeXPosValue -= sign * distanceNextXPosBeyondLimit;
        cube.velocity.x = -cubeXVel;
    }

    cube.position.x.value = nextCubeXPosValue;

    if(GAME.TIME.now() % SERVER_UPDATE_RATE < delta) {
        GAME.NETWORK.broadcast(toStr NetworkIDs.CUBE_MOVEMENT_SYNC, cube);
    }
}

# Player spawns in
public action onPlayerSpawn(str id) {
    # (Optional) Makes sure the cube is synchronized when the player joins the game
    GAME.NETWORK.send(toStr NetworkIDs.CUBE_MOVEMENT_SYNC, cube, id);
}

# Runs when the round ends
public action onGameEnd() {
    # Signals all clients that the round is ending
    GAME.NETWORK.broadcast(toStr NetworkIDs.CUBE_INSTANCE_DELETE, {});
}
```

## Performance

It is important to consider networking performance when sending data.\
The more frequently you send data, the higher the impact on performance will be.\
You also need to make sure you send as little data as possible to convey information:

```krunkscript
# TOO MUCH DATA
GAME.NETWORK.send("myNetworkMessage", {
    valueName: "test",
    longNumber: 1020.925827
});

# you can convey very similar information with this
GAME.NETWORK.send("1", {
    t: "test",
    n: Math.round(1020.925827) # round value
});
```

**In short:** less data sent less frequently is better for your performance.

## Limitations

In order to preserve performance, we have introduced a few Networking & Data limitations:

___

**Data Size Limit:**
* **Message ID:** 10 Characters
* **Data:** 2000 bytes

___

**Rate Limit:**
* **Broadcast (server to all):** 10 msg per second
* **Send (server to client):** 20 msg per second per user id
* **Send (client to server):** 40 msg per second

___

If you run into issues with these limitations, try to restructure your data & logic.
