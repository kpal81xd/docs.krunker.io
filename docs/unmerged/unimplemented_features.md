# Unimplemented features
Krunker offers some features we do not yet know more about. These are up and coming or deprecated features.

## Voxel <Badge type="tip" text="???" vertical="middle" />
Krunker offers two methods for a future voxel gamemode, speculated to be a survival minecraft style game.

```krunkscript
# Destroy voxel
GAME.VOXEL.destroy(
    4,      # num voxel id
);
```

```krunkscript
# Place voxel
GAME.VOXEL.place(
    4,          # num x position
    4,          # num y position
    4,          # num z position
    ???,        # ??? type of block
    {}          # obj additional data
);
```

## NFT <Badge type="tip" text="???" vertical="middle" />

:::details Developer statement on NFT methods
‟Added Basic NFT functions: hasWallet, ownedAssets (check docs)„ ~ Krunker development team, patchnotes.
It was never added to the docs.
:::

```krunkscript
obj player = GAME.PLAYERS.getSelf();

# Check if player owns certain assets
GAME.NFT.ownedAssets(
    player.id,      #str player id
    ???             #??? collection
    callback        #action(???) callback
);

# Check if player  has a crypto wallet
GAME.NFT.hasWallet(
    player.id       #str player id
);
```

## Config <Badge type="tip" text="???" vertical="middle" />

```krunkscript
GAME.CONFIG.getClasses();           # Get objects with class information
GAME.CONFIG.getMatch();             # Get objects with match information
GAME.CONFIG.getSettings();          # Get objects with settings information
GAME.CONFIG.getWeapons();           # Get objects with weapon information
```

## Delay <Badge type="tip" text="???" vertical="middle" />

:::warning
This feature was removed from autocorrect
:::

```krunkscript
# Delay a script execution
GAME.UTILS.delay(
    afterDelay        # action(???) callback when delay has passed
    200               # num time in miliseconds
);
```

## Raycast <Badge type="tip" text="???" vertical="middle" />

:::details Developer statement on Raycast methods
‟Added raycast support (WIP - check docs)„ ~ Krunker development team, patchnotes.
It was never added to the docs.
:::

```krunkscript
# Raycast from point in space (returns void)
GAME.RAYCAST.from(
    0,                # num x position
    0,                # num y position
    0,                # num z position
    5,                # num radian x direction
    5,                # num radian y direction
    200               # num distance of ray
);
```

```krunkscript
# Get player object
obj player = GAME.PLAYERS.getSelf();

# Raycast from player (returns void)
GAME.RAYCAST.fromPlayer(
    player,           # obj player reference
    200               # num distance
);
```

## Player LOD <Badge type="tip" text="???" vertical="middle" />
A dead feature to change LOD of players, likely created for 7fi's & Ocotodools spacesim project.

```krunkscript
GAME.PLAYERS.toggleLOD(
    1       #num value
);
```

## Execute trigger <Badge type="tip" text="server-side" vertical="middle" />

```krunkscript
GAME.TRIGGERS.execute(num ID, ??? args){
    #???
}
```

### Object morphing <Badge type="tip" text="client-side" vertical="middle" />
**Tags: Morph targets, Shape keys**

You can interpolate between morphstates on a 3d model. Does not work.
```krunkscript
    object.updateMorph(
        "Comedy",       # str morph target/Shape key
        0.2             # num value (0 - 1)
    );
```

## Fixed delta <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" />
:::tip
You can get fixed delta regularly by deviding the last GAME.TIME.now() by the current one.
:::

Suposed to give delta non dependent on game speed on the client side. Currently gives regular delta. Server side is not affected by game speed.
```krunkscript
GAME.TIME.fixedDelta();
```

## Payment <Badge type="tip" text="server-side" vertical="middle" />
Suposed to allow scripters to give and charge players for KR. Unimplemented.

```krunkscript
    GAME.PAYMENTS.charge(
        # ???
    );

    GAME.PAYMENTS.giveKR(
        player.id,          # str player id
        5                   # num kr value to give
    );
```

## Libraries <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" />
Allows for importing external tooling for krunkscript. Not enough is known about the implementation of this yet.