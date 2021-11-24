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

```krunkscript

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
