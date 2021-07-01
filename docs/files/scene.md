## Introduction

Unless you are creating a 2D Game on the [Overlay Canvas](./files/rendering_2d?id=overlay-canvas), you will most likely utilize the 3D Scene in some way.

<br><br/>

## Structure

A basic 3D Scene comprises of a Skybox, a [Camera](./files/cameras) and a few Objects. There are a few extra components to help you further customize the look of your scene.
<br><br/>

## Components

Components that make up the overall look of your scene:

**Sky Color:** Scene background color. Can be a solid color or a 3 tier gradient.

___

**Sky Light:** Sky light color and position (casts shadows).

___

**Ambient Light:** Scene ambient light (indirect light).

___

**Fog:** Scene fog color & density. Used to fade objects to a color at a distance

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
GAME.SCENE.setFog(
    "#fff", # str color
    100 # num fog distance
);
```

___

**Terrain:** Limited seed based terrain implementation.
___

**Ocean:** Reflective & customizable ocean component

___

Some of these components may be limited in terms of functionality.

<br><br/>

## Lights

Light Objects can be used to add more ambience to your scene. Use them sparingly however as they can cause performance issues. The different light types you can add to your scene are:

___

**Point Light:** Emits light equally in all directions from a point (Bulb, Candle, Flame etc).

```
```

**Add using KrunkScript:**

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
obj lamp = GAME.SCENE.addPointLight(
    "#fff", # str color
    0, # num x position
    0, # num y position
    0, # num z position
    50, # num range
    0.1 # num falloff
);
```

___

**Directional Light:** Emits light in a specific direction in world space (Sun)

```
```

**Add using KrunkScript:**

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
obj sun = GAME.SCENE.addDirLight(
    "#fff", # str color
    0, # num x direction
    0, # num y direction
    0, # num z direction
);
```

___

**Spot Light:** Emits light in a specfici direction from a point (Flashlight, Projector etc)

```
```

**Add using KrunkScript:**

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
obj flashlight = GAME.SCENE.addSpotLight(
    "#fff", # str color
    0,   # num x position
    20,  # num y position
    0,   # num z position
	0,   # num x target pos
	0,   # num y target pos
	0,   # num z target pos
    50,  # num range
    0.1, # num decay
	1,   # intensity
	0,   # angle
	0,   # penumbra
);
```

___

**Rectarea Light:** Emits light from a rectangular area (Windows, Screens etc)

```
```

**Add using KrunkScript:**

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
obj window = GAME.SCENE.addRectLight(
    "#fff", # str color
    0, # num x position
    0, # num y position
    0, # num z position
    1, # num width
    1, # num height
    1, # num length
);
```

___

You can create a more performant alternative to lights by adding image based light objects:

___

**Light Cone:** Gradient cone object with emissive texture

```
```
___

**Light Bar:** Gradient plane object with emissive texture

```
```

___
Depending on your desired effect and performance requirements, you may choose to bake your lighting in an external software and to import the finished scene as an asset.
___

For updating/moving lights, refer to the [Moving, Rotating & Scaling](./files/scene?id=moving-rotating-amp-scaling) section.

<br><br/>

## Adding 3D Objects

Additionally there are several other object types that you can add to your scene.

Objects can be added via KrunkScript or in the Editor:

```
```

To learn how to add/sync an object on the Client and Server, please refer to the [Multiplayer & Networking](./files/multiplayer_&_networking) section.

___

3D Models: Custom 3D Assets. Currently supported formats: .obj & .gltf. View the [Custom Assets](./files/custom_assets) section for more information on adding them to your scene.

___

**Cubes:** 3D Cubes (Texture, Color, Scale, Rotation, Position)

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# add via KrunkScript
obj cube = GAME.SCENE.addCube(
    src, # str texture asset id
    colr, # str color
    x, # num x position
    y, # num y position
    z, # num z position
    w, # num width
    h, # num height
    l # num length
);
```

___

**Planes:** Flat 3D Plane (Texture, Color, Scale, Rotation, Position)

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# add via KrunkScript
obj plane = GAME.SCENE.addPlane(
    src, # str texture asset id
    colr, # str color
    x, # num x position
    y, # num y position
    z, # num z position
    w, # num width
    l # num length
);
```
**Spheres:** 3D Sphere (Texture, Color, Scale, Position)

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# add via KrunkScript
obj sphere = GAME.SCENE.addSphere(
    src, # str texture asset id
    colr, # str color
    x, # num x position
    y, # num y position
    z, # num z position
    s, # num scale
);
```

___

**Sprites:** 3D Object always facing the camera. Can be used for particles or distant low detail objects.

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# add via KrunkScript
obj sprite = GAME.SCENE.addSprite(
    src, # str texture asset id
    colr, # str color
    x, # num x position
    y, # num y position
    z, # num z position
    s, # num scale
);
```

___

**Triggers:** Allows for creation of logic without scripting. [More info](./files/trigger_logic)

___

**Placeholders:** Placeholders used for Grouping or Importing objects in your scene.
___

You can also import custom assets to your game, if the default objects don't fulfill your needs.


<br><br/>

## Removing 3D Objects

You can remove any 3D object from your scene using KrunkScript:

```krunkscript
# add object
obj cube = GAME.SCENE.addCube("", "#fff", 0, 0, 0, 10, 10, 10);

# remove object when needed
GAME.SCENE.remove(cube.sid); # by unique object sid
```

<br><br/>

## Moving, Rotating & Scaling

Any 3D Object can be moved, rotated or scaled:

```
```

___

**Using KrunkScript:** (This works on all object types)

```krunkscript
# create cube object
obj cube = GAME.SCENE.addCube(
    "", # no texture
    "#fff", # white color
    0, # x
    0, # y
    0, # z
    10, # width
    10, # height
    10 # length
);

# moving objects
cube.x = cube.x + 1; # move cube on x-axis
GAME.SCENE.movObj(cube, 0, 1, 0); # move cube via action

# scale objects
cube.scale.x = 5; # scale cube on x-axis
GAME.SCENE.scaleObj(cube, 5, 1, 1); # scale cube via action

# rotate objects
cube.rot.x = MATH.PI; # rotate cube on x-axis
GAME.SCENE.rotObj(cube, 0, 0, MATH.PI); # rotate cube via action
```

If you want to move an object across the server and all clients, please refer to the [Multiplayer & Networking](./files/multiplayer_&_networking) section.

<br><br/>

## Object Visibility

Any 3D Object can be hidden using KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# hide cube object
obj cube = GAME.SCENE.addCube("", "#fff", 0, 0, 0, 10, 10, 10);
cube.visible = false; # hide cube
```

<br><br/>

## Sounds

For information relating to loading and playing custom sounds, please refer to the [Sounds & Music](./files/custom_assets?id=sounds-amp-music) section.