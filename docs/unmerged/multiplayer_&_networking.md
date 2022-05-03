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


:::: tabs 
::: tab Client
```krunkscript
# Sending data on the client
GAME.NETWORK.send(
    "test",     # str message name
    {a: 1}      # obj data
);
```
:::
::: tab Server
```krunkscript
# Sending data on the server
GAME.NETWORK.send(
    "test",     # str message name
    {a: 1},     # obj data
    player.id   # player id
);
```
:::
::::

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

:::: tabs
::: tab Client
```krunkscript
# Receive message from client
public action onNetworkMessage(str id, obj data) {
    #str id             - message name
    #obj data           - data as string
}
```
:::
::: tab Server
```krunkscript
# Receive message from server
public action onNetworkMessage(str id, obj data, str playerID) {
    #str id             - message name
    #obj data           - data as string
    #str playerID       - player id
}
```
:::
::::

:::: tabs
::: tab Client
```krunkscript
# Server
public action onNetworkMessage(str id, obj data, str playerID) {
    if (id == "test") {
        GAME.log(data);
    };
}
```
:::
::: tab Server
```krunkscript
# Client
public action onNetworkMessage(str id, obj data) {
    if (id == "test") {
        GAME.log(data);
    };
}
```
:::
::::


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

## Movement syncing <Badge type="tip" text="client-side" vertical="middle" />
Every second the server sends the players position to the client. Once that information arrives at the client, the client retraces its steps since that point in time to now, using the corrected information that it has received from the server.

If your movement code includes custom playervalues, those have to be registered, to be included in the sync.

:::tip
Check out [this example](/examples/double_jump.html) to add basic double jumping using server syncing
:::

:::warning
- To sync a player property, the property must exist first (currently it gives a wrong error)
- Syncing objects is not yet possible
- Sync values can be up to 16 characters long
- You can have up to 20 sync variables at once per player
:::

```krunkscript
# Create player reference
obj players = GAME.players.getSelf();

# Set property
players.hasDoubleJump = true;

# Start syncing player value
player.registerSyncValues(
    "hasDoubleJump"     #str object key
);
```

```krunkscript
# Stop syncing player value
player.unregisterSyncValues(
    "hasDoubleJump"     #str object key
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

## Getting host <Badge type="tip" text="server-side" vertical="middle" />

:::warning
You can only retrieve host player object if player is spawned in
:::
```krunkscript
# Get player object of host
obj player = GAME.CONFIG.getHost();
```