# Multiplayer & networking

Networking allows you to send variables to the server, which can then send it back to other players, or store it in a database.

::: warning
**Networking must be optimized at all costs**

- Data: 2000 bytes per message
- Broadcast (server to all): 10 msg per second
- Send (server to client): 20 msg per second per user
- Send (client to server): 40 msg per second
- Message id string: 10 Characters
:::

## Sending data <Badge type="tip" text="server-side" vertical="middle" /> <Badge type="tip" text="client-side" vertical="middle" />

First off you have to send your variable to either the server or the client, they will be able to listen for the variable so they can use it.

Sending is used for sending data to one specific user.

```krunkscript
# Sending data on the server
GAME.NETWORK.send(
    player.id   # player id
    "test",     # str message name
    {a: 1}      # obj data
);
```

```krunkscript
# Sending data on the client
GAME.NETWORK.send(
    "test",     # str message name
    {a: 1}      # obj data
);
```

## Broadcasting data <Badge type="tip" text="server-side" vertical="middle" />

Broadcasting allows you to send data to all connected clients.

```krunkscript
# Send data to all clients
GAME.NETWORK.broadcast(
    "test",     # str message name
    {a: 1}      # obj data
);
```

## Receiving data <Badge type="tip" text="server-side" vertical="middle" /> <Badge type="tip" text="client-side" vertical="middle" />

Once the message has been sent, we can listen for it and use its given object.

```krunkscript
# Receive message from server or client
action onNetworkMessage(str id, obj data, str playerID) {
    #str id             - message name
    #obj data           - data as string
    #str playerID       - player id (server-side only)
```

```krunkscript
# Server
action onNetworkMessage(str id, obj data, str playerID) {
    if (id == "test") {
        GAME.log(data);
    };
}
```

```krunkscript
# Client
action onNetworkMessage(str id, obj data) {
    if (id == "test") {
        GAME.log(data);
    };
}
```


## Detect rate limiting <Badge type="tip" text="server-side" vertical="middle" /> <Badge type="tip" text="client-side" vertical="middle" />

KrunkScript rate limits you to prevent spam over the network.

```krunkscript
# Will return a "success" boolean, if false you are being rate limited
if (GAME.NETWORK.broadcast("hi there", {a: 1}) {
    # message was sent
} 
else {
    # message rate limited
}
```

## Sending & broadcasting chat messages <Badge type="tip" text="server-side" vertical="middle" />
You can send chat messages from the server.

```krunkscript
# Send message to specific player
GAME.CHAT.send(
    player.id,      # str player id
    "hello world",  # str message
    "#FFF"          # str color
);
```

```krunkscript
# Broadcast message to all players
GAME.CHAT.broadcast(
    "hello world",  # str message
    "#FFF"          # str color
);
```

## Open a window to a different game or platform  <Badge type="tip" text="client-side" vertical="middle" />

```krunkscript
GAME.URLS.openDiscord(
    "YBnq2um"                            # str discord invite url
);
```

```krunkscript
GAME.URLS.openOpensea(
    "https://opensea.io/SwatDoge"        # str openSea wallet url
);
```

```krunkscript
GAME.URLS.openTwitter(
    "https://twitter.com/swatdoge"       # str twitter url
);
```

```krunkscript
GAME.URLS.openYoutube(
    "https://www.youtube.com/channel/UCkQM8ePPA8me73585aLJvmw"       # str youtube url
);
```

```krunkscript
GAME.changeGame(
    "DQ_Battleboats"                    # str game name
);
```
