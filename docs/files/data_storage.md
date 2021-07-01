## Use Cases

Data Storage allows you to store data in a database server to be loaded again at any time. Some use cases for this include:

 * Storing player progress & data
 * Leaderboards & Highscores
 * Saving map state & data
 * Adding item unlocks & rewards
Only use Data Storage when you want to save persistent data. If you want to save data locally, use [Cookies](./files/data_storage?id=cookies-amp-local-storage) instead.

<br><br/>

## Storing Data

<div class="disBar">Currently Disabled</div>

Save data on Database using KrunkScript:

<p class="hidep"><strong class="server-side">server-side</strong></p>

```krunkscript
GAME.STORAGE.save(
    key, # str data unique key
    value, # num value to save
    type, # num save type
    playerID, # num player id (optional)
);

# save types:
# 0: Set Value (DEFAULT)
# 1: Set If Higher
# 2: Set If Lower
# 3: Increase Value
# 4: Decrease Value

# example saving player specific value:
GAME.STORAGE.save("coins", 20, 0, player.id);

# increasing global game value:
GAME.STORAGE.save("gamePlays", 1, 3);
```

<br><br/>

## Loading Data

<div class="disBar">Currently Disabled</div>

Load data from Database using KrunkScript:

<p class="hidep"><strong class="server-side">server-side</strong></p>

```krunkscript
# load player data
GAME.STORAGE.loadPlayerData(
    playerID # num player id
);

# get all data for a player:
obj data = GAME.STORAGE.loadPlayerData(player.id);
GAME.log(data.coins); # access data
```

<br><br/>

## Cookies & Local Storage

If you would like to save certain data locally, you can use KrunkScript's built-in COOKIE feature:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# save local data
GAME.COOKIES.save(
    "test", # str key value
    100 # str data value
);

# load local data
str value = GAME.COOKIES.load(
    "test" # str key value
);

# delete local data
GAME.COOKIES.remove(
    "test" # str key value
);

# check if value exists
GAME.COOKIES.has(
    "test" # str key value
);
```

<br><br/>

## Pricing

Data Storage is currently free.

<br><br/>

