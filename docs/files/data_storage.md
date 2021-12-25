## Use Cases

Data Storage allows you to store data in a database server to be loaded again at any time.\
Some use cases for this include:

 * Storing player progress & data
 * Leaderboards & Highscores
 * Saving map state & data
 * Adding item unlocks & rewards
 * Share data between games and collaborate with other devs

Only use Data Storage when you want to save persistent data. If you want to save data locally, use [Cookies](./files/data_storage?id=cookies-amp-local-storage) instead.

## Storing Data

Save data on Database using KrunkScript:

<p class="hidep"><strong class="server-side">server-side</strong></p>

```krunkscript
# set values on specific player
GAME.STORAGE.XXX( # set, update, transact
    accountName, # str player account name
    data, # obj data to store
    access, # bool private (false) or global (true)
    callback # action callback after data is saved (optional)
);
# the access type determines how the data can be accessed:
# private (default): data can only be accessed on games by the same owner (read/write)
# global: data can be accessed by anyone (read only)

# set values on specific player (1 every 10s rate limit):
GAME.STORAGE.set(player.accountName, {
    apples: 10, # set apples to 10
    title: "knight" # set string value
});

# update values on specific player (plus or minus values):
GAME.STORAGE.update(player.accountName, {
    apples: -4, # decrease apples by 4
    oranges: 2 # add 2 oranges
});

# highscore sample:
# newScore comes from game
if (newScore > player.highscore) {
    public action callback(obj data, bool success) {
        if (success) {
            player.highscore = data.score;
        }
    }
    GAME.STORAGE.set(player.accountName, {
        score: newScore,
    }, false, callback);
}

# transact values on specific player:
# a transaction requires that no values fall below 0
public action callback(obj data, bool success) {
    if (success) {
        # transaction successfully completed
        # update to latest synced values
        player.gold = data.gold;
        player.apples = data.apples;
    } else {
        # transaction failed
    }
};
GAME.STORAGE.transact(player.accountName, {
    gold: -5, # lose 5 gold
    apples: 10 # add 10 oranges
}, false, callback);

# NOTE: each property in the object you store is
# counted as a unique key in the database
```

Note: *You are currently limited to 30 unique keys per game.\
Each key represents a data field that you can populate with a string or number.*

You can only save player data for a player that is in that game currently. Other limitations include:

* **set**, **update**, **transact** calls limited to once every 10 seconds per player
* You can only call **load** up to 5 times for a single connection/player
* Keys are limited to a length of 20
* You can only store up to 30 unique keys per game

## Loading Data

Load data from Database using KrunkScript:

<p class="hidep"><strong class="server-side">server-side</strong></p>

```krunkscript
# load player specific data:
GAME.STORAGE.load(
    accountName, # str player account name
    gameName, # str name of game storage you want
              # to load data from (optional)
    callback # action that is called when the data is ready
);

# get all data for a specific player:
public action dataReady(obj data, bool success) { # prepare callback
    if (notEmpty data && success) {
        GAME.log(data.coins); # access data
    }
};
GAME.STORAGE.load(player.accountName, "", dataReady);

# load data for specific game:
public action dataReady(obj data, bool success) { # prepare callback
    if (notEmpty data && success) {
        GAME.log(data.wins); # access data
    }
};
GAME.STORAGE.load(player.accountName, "lava_run", dataReady);
# NOTE: you can only load data from other games that
# you published or have saved specific data as: global
```

Storing **global** data will allow other game devs to access that data as well.\
You could use this to allow players to unlock unique items if they complete certain challenges in another game and vice versa.

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

## Pricing

Data Storage is currently free.



