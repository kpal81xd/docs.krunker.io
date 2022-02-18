# Custom assets

## 3D models <Badge type="tip" text="client-side" vertical="middle" />
**Tags: asset, custom**

:::tip
Currently only .obj and .gltf are supported for 3d models
:::

You can import and manage 3d models inside of krunker using KrunkScript.

```krunkscript
# Add an asset to the scene.
GAME.SCENE.addAsset(
    "236t",         # str 3d asset id
    5,              # num x position
    0,              # num y position
    5,              # num z position
    1,              # num scale
    "#FFF",         # str color
    {},             # obj additional data
    onObjectLoad    # action callback when asset loads. (function name is function used for callback)
);
```

### Object morphing <Badge type="tip" text="client-side" vertical="middle" />
**Tags: morph target, Shape key**

You can interpolate between morphstates on a 3d model.
```krunkscript
    object.updateMorph(
        "Comedy",       # str morph target/Shape key
        0.2             # num value (0 - 1)
    );
```

## Textures & images <Badge type="tip" text="client-side" vertical="middle" />

:::tip
Currently only .png images are supported
:::

```krunkscript
# Create an object reference and change its texture id.
obj cube = GAME.SCENE.addCube("", "#fff", 0, 0, 0, 10, 10, 10);
cube.texture = "28000";
```

## Animations <Badge type="tip" text="client-side" vertical="middle" />

### Default animations <Badge type="tip" text="client-side" vertical="middle" />
**Tags: clips**

The krunker playermodels has some player animations by default.

- **Idle:** Loops while player is idle
- **Move:** Loops while player is moving
- **Crouch:** Loops while player is crouched
- **Jump:** Plays when player jumps
- **Melee:** Plays when player melees
- **Shoot:** Plays when player shoots

### Custom animations <Badge type="tip" text="client-side" vertical="middle" />
:::tip
Only gltf's support animations
:::

```krunkscript
# Create a 3d asset object
obj object = GAME.SCENE.addAsset("11441g", 0, 0, 0, 1);

# Play animation on object
object.playAnim(
	"Jump",             # str clip name
	1                   # num repetitions (0 = infinite loop)
);

# You can also do this on players and AI
player.playAnim("Jump");
aiBot.playAnim("Jump");

# Stop object animation
object.stopAnim();
```

```krunkscript
# Playing an animation thru GAME method
obj object = GAME.SCENE.addAsset("11441g", 0, 0, 0, 1);

# Play animation
GAME.ANIM.playClip(object, "Jump", 0);

# Stop animation
GAME.ANIM.stopClip(object, "Jump");
```

## Sounds & music <Badge type="tip" text="client-side" vertical="middle" />
**Tags: audio**

:::warning
GAME.SOUND's methods require your id's to be num's, unlike simular methods across KrunkScript
:::

```krunkscript
# Play sound in 2D space
obj sound = GAME.SOUND.play2D(
    0,      # num sound asset id
    1,      # num volume (0 - 1)
    1,      # num rate (0 - 1)
    1       # bool looping
);
```

```krunkscript
# Play sound in 3D space
obj sound = GAME.SOUND.play3D(
    37204,  # num sound asset id
    1,      # num volume (0 - 1) 
    5,      # num x position
    0,      # num y position
    5,      # num z position
    0.9,    # num rate (0 - 1)
    true    # bool looping
);
```

```krunkscript
# Alter rate & volume
sound.rate = 0.5;
sound.volume = 0.2;

# Mute, unmute, play, stop & pause
sound.mute();
sound.unmute();
sound.play();
sound.stop();
sound.pause();

# Fade
sound.fade(
    0.9,    # num volume start (0 - 1)
    0.1,    # num volume end (0 - 1)
    0       # num duration
);
```