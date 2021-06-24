## Introduction

This section describes the different components of a networked game. Each client is connected to the server. The server receives information and then sends it to clients when needed. This allows you to see other players moving around for example.

<br><br/>

## Sending Data

To send information from the client to the server you can use:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```csharp
// send network message to server
GAME.NETWORK.send(
    "test", // str message key
    {num a: 1} // obj data to send
);
```

The server has multiple ways to send data to clients:

<p class="hidep"><strong class="server-side">server-side</strong></p>

```csharp
// send network message to specific client
GAME.NETWORK.send(
    "test", // str message key
    {num a: 1}, // obj data to send
    player.id // num player id to send data to
);

___

// send network message to all clients
GAME.NETWORK.broadcast(
    "test", // str message key
    {num a: 1} // obj data to send
);
```

<br><br/>

## Receiving Data

The client.krnk and server.krnk scripts both have built-in actions that receive all network messages.

___

**onNetworkMessage():** Called when the server receives data from the client. Use the id to distinguish between different event types.

<p class="hidep"><strong class="server-side">server-side</strong></p>

```csharp
action onNetworkMessage(obj player, num id, obj data) {
    // player is the player that the message came from
    // id is the the unique id of the network message
    // data contains custom data from the client
    if (id == "test") {
        // do something with data
    }
}
```

___

**onNetworkMessage():** Called when the client receives data from the server. Use the id to distinguish between different event types.

<p class="hidep"><strong class="client-side">client-side</strong></p>

```csharp
action onNetworkMessage(num id, obj data) {
    // id is the the unique id of the network message
    // data contains custom data from the server
    if (id == "test") {
        // do something with data
    }
}
```

<br><br/>

## Syncing Objects

When synchronizing an objects position/data in a multiplayer environment, it is important that the server has the authority.

If for example, you would like to have a cube that moves around for all players, you can do the following:
```csharp

```

<br><br/>

## Performance

It is important to consider networking performance when sending data. The more frequently you send data, the higher the impact on performance will be. You also need to make sure you send as little data as possible to convery information:

```csharp
// TOO MUCH DATA
GAME.NETWORK.send("myNetworkMessage", {
    valueName: "test",
    longNumber: 1020.925827
});

// you can convey the same information with this
GAME.NETWORK.send("1", {
    t: "test",
    n: MATH.round(1020.925827) // round value
});
```
**In short:** less data sent less frequently is better for your performance.

<br><br/>

## Limitations

In order to preserve performance, we have introduced a few Networking & Data limitations:

___

**Data Size Limit:**
 * **Message ID:** 10 Characters
 * **Data:** 500 bytes

___

**Rate Limit:** Network messages are limited to 15 per second.

___

If you run into issues with these limitations, try to restructure your data & logic.



<br><br/>

