# Data storage

## Database <Badge type="tip" text="server-side" vertical="middle" />
**Tags: database**

Databases allow you to store variables permanently, without being able to be modified by others. Its useful for keeping track of currencies, personal best scores and what items a player owns. 

:::warning
- You can only store and access data from players who are active in game.
- set, update, transact 10/second per connection/player.
- load 5/second per connection/player.
- 30 Keys per game, keys length is 20 characters. (Object properties are treated as unique database keys)
:::

### Set storage
```krunkscript
# Set a player value to a specific value.
GAME.STORAGE.set(
    "SwatDoge",                     # str username
    {kills: 300, nick: "Swat"},     # obj data
    true,                           # bool private (false: private, true: public) Public databases can be accessed by others
    callback                        # action(obj data, bool success) callback function
);
```

### Update storage
```krunkscript
# Updating ADDS the value you give it to the existing value. Negative values will thus be subtracted.
# Removing 5 kills from SwatDoge's kills
GAME.STORAGE.update(
    "SwatDoge",    # str username
    {kills: -5},   # obj data
    true,          # bool private (false: private, true: public) Public databases can be accessed by others
    callback       # action(obj data, bool success) callback function
);
```

### Transact storage
```krunkscript
# The same as GAME.STORAGE.update but you can not go below 0. If this does happen, the success parameter on the callback function will be false.
GAME.STORAGE.transact(
    "SwatDoge",   # str username
    {kills: -5},  # obj data
    true,         # bool private (false: private, true: public) Public databases can be accessed by others
    callback      # action(obj data, bool success) callback function
);
```

### Loading Data

```krunkscript
# Load data you stored on your map.
GAME.STORAGE.load(
    "SwatDoge",     # str username
    "",             # str name of game with public database. (leave empty)
    callback        # action(obj data, bool success) callback function
);
```

```krunkscript
# Load data you stored on another map.
GAME.STORAGE.load(
    "SwatDoge",     # str username
    "lava_run",     # str name of game with public database. (leave empty)
    callback        # action(obj data, bool success) callback function
);
```

## Cookies <Badge type="tip" text="client-side" vertical="middle" />
**Tags: localstorage**

Cookies allow you to store variables on a users browser. These variables can be modified by users and should not be relied on for source of truth.
Useful for settings.

:::warning
Cookies can only store strings as values.
:::

```krunkscript
# Save cookie
GAME.COOKIES.save(
    "test",   # str name
    "100"     # str data
);
```

```krunkscript
# Load cookie
str value = GAME.COOKIES.load(
    "test"   # str name
);
```

```krunkscript
# Delete cookie
GAME.COOKIES.remove(
    "test"   # str name
);
```

```krunkscript
# Check if cookie exists
GAME.COOKIES.has(
    "test"    # str name
);
```