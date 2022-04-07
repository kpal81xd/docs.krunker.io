# Scene

## Skydome <Badge type="tip" text="client-side" vertical="middle" />
**Tags: skybox**

Skydomes are a group of settings that allow you to change the atmosphere of your level in certain areas.

```krunkscript
# Set sky color (single color)
GAME.SCENE.setSkyColor(
    "#fff"      # str color
);
```

```krunkscript
# Set skydome settings (gradient colors)
GAME.SCENE.setSkyDome(
    "#fff",     # str hex color 1
    "#fff",     # str hex color 2
    "#fff",     # str hex color 3
    {}          # obj additional data
);
```

```krunkscript
# Additional data to change the skydome
obj additional = {
    texture: "27997",            # str asset id
    emissive: "#ff0000",         # str hex color
    emissiveTexture: "27998",    # str asset id 
    textureMoveAxis: 0,          # str/num axis (0 - 1 OR "x" - "y")
    textureMoveSpeed: 0          # num speed (-20 - 20)
};
```

```krunkscript
# Change fog settings
GAME.SCENE.setFog(
    "#fff",     # str color
    100         # num distance
);
```

```krunkscript
# Get active zone
num activeZone = (num) GAME.CAMERA.envZone; # index or -1 if default
```

```krunkscript
# Remove skydome
GAME.SCENE.removeSkyDome();
```

## Scene lighting <Badge type="tip" text="client-side" vertical="middle" /> 

Lighting allows you to light up your scenes, adding atmosphere and detail to your map.

:::tip
For better performance it is recommended to use ["fake" lighting](https://docs.krunker.io/#/./files/scene?id=lights)
:::

```krunkscript
# Adjust the ingame sun
GAME.SCENE.setSkyLight(
    "#fff",     # str color
    2,          # num light intensity (0 - 3)
    20,         # num sun angle x (0 - 360)
    20,         # num sun angle y (0 - 360)
    100         # num light distance (10 - 15000)
);
```

```krunkscript
# Adjust the ingame ambient light
GAME.SCENE.setAmbientLight(
    "#fff",     # str color
    2           # num light intensity (0 - 3)
);
```

### Point light: (bulb, candle, flame etc.)

A pointlight is a light source that shines in every direction.

![Preview](/images/krunker/scene/lights_0.png)

```krunkscript
# Add a pointlight
obj lamp = GAME.SCENE.addPointLight(
    "#fff", # str color
    0,      # num x position
    0,      # num y position
    0,      # num z position
    50,     # num range
    0.1,    # num falloff (0 - 1)
    false   # bool shadowcasting
);
```

### Directional light (sun)

Directional light is an infinitely far away light, which lights up the entire map.

![Preview](/images/krunker/scene/lights_1.png)

```krunkscript
# Add a directional light
obj sun = GAME.SCENE.addDirLight(
    "#fff", # str color
    0,      # num x direction
    0,      # num y direction
    0,      # num z direction
    false   # bool shadowcasting
);
```

### Spot Light (Flashlight, Projector etc.)

A spot light is a direct source of light, which shines on a precise point.

![Preview](/images/krunker/scene/lights_2.png)

```krunkscript
# Add a spotlight
obj flashlight = GAME.SCENE.addSpotLight(
    "#fff", # str color
    0,      # num x position
    20,     # num y position
    0,      # num z position
    0,      # num x target pos
    0,      # num y target pos
    0,      # num z target pos
    50,     # num range
    0.1,    # num decay (0 - 1)
    0.9,    # num intensity (0 - 1)
    0,      # num angle (0 - 360)
    0,      # num penumbra
    false   # bool shadowcasting
);
```

### Rectangular area light (windows, screens etc.)

Simular to a spotlight, but square.

![Preview](/images/krunker/scene/lights_3.png)

```krunkscript
# Add a rectangular light
obj window = GAME.SCENE.addRectLight(
    "#fff",  # str color
    0,       # num x position
    0,       # num y position
    0,       # num z position
    1,       # num width
    1,       # num height
    1        # num length
);
```

## Geometry <Badge type="tip" text="client-side" vertical="middle" /> 
**Tags: objects, primitives, shapes**
Krunker has a few default objects, like cubes, spheres and planes. These objects allow you to create maps or decorations, and can be managed with KrunkScript.

:::tip
Geometry is client side, which means it will not have any player collisions
:::

### Krunker object data
:::warning
- You can not change opacity of 3d models in krunker after you have spawned them
- Texture changing does not work on 3d models
- In update 5.4.2 most encodings were removed from krunker. Keep this in mind when using `textureEncoding`
- alwaysRender does not work
:::

```krunkscript
# All fields are optional
obj additional = {

    # Works on all object types:
    opacity: 0.5,                    # num opacity (0 - 1)
    emissive: "#ff0000",             # str color
    forceTransparency: false,        # bool transparency
    
    # Invert or double the faces of an object.
    side: 0,                         # num side (0: front-sided, 1 back-sided, 2: double-sided)
    doubleSided: false,              # bool double-sided
    frontSided: true,                # bool front-sided
    backSided: false,                # bool back-sided

    # Modify texture of an object.
    textureStretching: true,         # bool stretching
    textureScale: 0,                 # num scale (0 - 10)
    textureMoveAxis: 0,              # num axis (0, 1) (0: x, 1: y)
    textureMoveSpeed: -20,           # num move speed (-20 - 20)
    textureOffsetX: 0.1,             # num offset x (0 - 1)
    textureOffsetY: 0.1,             # num offset y (0 - 1)
    textureRotation: 180,            # num rotation (0 - 360)
    textureEncoding: 9,              # num (1) Linear, (2) sRGB, (3) Gamma, (4) RGBE, (5) LogLuv RGBM7, (6) RGBM16, (7) RGBD, (8) BasicDepthPacking, (9) RGBADepthPacking
    textureFrameCount: 0,            # num frame count (0 - 10)
    textureFrameDuration: 0,         # num frame duration (0 - 10)

    # Plane Only:
    mimicSprite: true,               # bool make plane act like a sprite.

    # Asset Only:
    textureSmoothing: true,          # bool smooth textures
    spinSpeed: -20,                  # num spinning speed (-20 - 20)
    spinAxis: 0,                     # num axis (0, 1) (0: x, 1: y)
    animSpeed: 1,                    # num animatino speed (0 - 10)
    animStart: "Idle",               # str starting animation name
    alwaysRender: true,              # bool always render
    alphaTest: 0                     # num alpha test (0 - 1)
};
```

### Cube

```krunkscript
# Add a cube to the scene.
obj cube = GAME.SCENE.addCube(
    "28000",    # str texture asset id
    "#fff",     # str color
    5,          # num x position
    0,          # num y position
    5,          # num z position
    10,         # num width
    10,         # num height
    10,         # num length
    {}          # obj additional data
);
```

```krunkscript
GAME.SCENE.addSign(
    5,          # num x position
    0,          # num y position
    5,          # num z position
    10,         # num width
    10,         # num length
    "Wow!",     # str text
    {}          # obj additional data
);
```

### Plane

```krunkscript
# Add a plane to the scene.
obj plane = GAME.SCENE.addPlane(
    "28000",   # str texture asset id
    "#fff",    # str color
    5,         # num x position
    0,         # num y position
    5,         # num z position
    1,         # num width
    10,        # num length
    {}         # obj additional data
);
```

### Sphere
**Tags: ball**
```krunkscript
# Add a sphere to the scene.
obj sphere = GAME.SCENE.addSphere(
    "28000",   # str texture asset id
    "#fff",    # str color
    5,         # num x position
    0,         # num y position
    5,         # num z position
    8,         # num width
    4,         # num height
    10,        # num length
    {}         # obj additional data
);
```


### Sprite

```krunkscript
# Add a sprite to the scene.
obj sprite = GAME.SCENE.addSprite(
    "28000",    # str texture asset id
    "#fff",     # str color
    5,          # num x position
    0,          # num y position
    5,          # num z position
    1,          # num scale
    {}          # obj additional data
);
```

### 3D model
**Tags: asset, custom**
:::tip
Currently only .obj and .gltf are supported for 3d models
:::

```krunkscript
# Add an asset to the scene.
GAME.SCENE.addAsset(
    "236t",         # str 3d asset id
    5,              # num x position
    0,              # num y position
    5,              # num z position
    1,              # num scale
    "#fff",         # str color
    {},             # obj additional data
    onObjectLoad    # action() callback when asset loads. (function name is function used for callback)
);
```

### Custom object
Custom objects allow you to create any shape you want using verticies:
:::warning
Textures do not work on addCustom verts
:::

```krunkscript
# Add a 3d model to the scene.
obj custom = GAME.SCENE.addCustom(
    "236t",         # str asset texture id
    "#fff",         # str color
    num[0, 0, 3],   # Float32Array of Vertices
    5,              # num x position
    0,              # num y position
    5,              # num z position
    6,              # num width
    2,              # num height
    10,             # num length
    {}              # obj additional data
);
```

## Listing 3D objects <Badge type="tip" text="client-side" vertical="middle" /> 
:::tip
GAME.OBJECTS.list() only returns rotation, position, scaling and an id right now
:::

```krunkscript
# Get an obj[] of objects in a scene
GAME.SCENE.list();
```

## Removing 3D objects <Badge type="tip" text="client-side" vertical="middle" /> 
```krunkscript
# Create a cube reference
obj cube = GAME.SCENE.addCube("", "#fff", 0, 0, 0, 10, 10, 10, {
    opacity: 0.5
});

# Remove cube from the sence by reference
cube.delete();

# Remove all objects from scene
GAME.SCENE.clear();
```

## Attaching/detaching 3D objects <Badge type="tip" text="client-side" vertical="middle" /> 
You can attach objects to entities or other objects.

```krunkscript
# Create a cube reference
obj cube = GAME.SCENE.addCube("", "#fff", 0, 0, 0, 10, 10, 10, {
    opacity: 0.5
});

# Attach the cube to a camera
cube.attachTo(GAME.CAMERA.getObj(), 0, 0, 0);

# Attach the cube to another object
cube.attachTo(otherObj, 0, 0, 10);

# Attach the cube to a player
cube.attachTo(player, 0, 0, 0);

# Attach the cube to player but from current origin
cube.attachTo(player, 0, 0, 0, true);

# Detach cube
cube.detach();
```

### Attach bones

```krunkscript
# Get "HandL" bone from 3D model
leftHand = (obj) dat.getBone("HandL");

# Attach cube to left hand bone
cube.attachTo(leftHand, 0, 0, 0);
```

## Coordinate system
Coordinates in 2D and 3D space are represented as x, y and x, y, z:

```krunkscript
# X: left-right
# Y: up-down
# Z: backward-forward
```

You can convert 3D coordinates into 2D ones:

```krunkscript
# Get screen-space coords
obj coords2D = GAME.SCENE.posToScreen(0, 10, 0);
# Use coords to render to screen
(num) coords2D.x;
(num) coords2D.y;
# You can check if those coordinates or on the screen:
(bool) coords2D.onScreen;
```

## Path nodes <Badge type="tip" text="client-side" vertical="middle" /> 
Path/Coordinate 3D objects that can be added by hand and interacted with using KrunkScript:

```krunkscript
# Fetch list of nodes
obj[] nodes = GAME.OBJECTS.getPathNodes();

for (num i = 0; i < lengthOf nodes; i++) {
    (num) nodes[i].id;
    (num) nodes[i].x;
    (num) nodes[i].y;
    (num) nodes[i].z;
}
```

## Moving, rotating & scaling <Badge type="tip" text="client-side" vertical="middle" />
**Tags: translation, translating**
```krunkscript
# Create an object reference
obj cube = GAME.SCENE.addCube(
    "",     # str texture id
    "#fff", # str color
    0,      # num x position
    0,      # num y position
    0,      # num z position
    10,     # num width
    10,     # num height
    10      # num length
);

# Set object position
cube.move(0, 0, 0);

# Move object on x-axis
(num) cube.position.x += 1;
cube.position.x = 10;
GAME.SCENE.movObj(cube, 0, 1, 0);

# Scale object
cube.scale.x = 5;
GAME.SCENE.scaleObj(cube, 5, 1, 1);

# Rotate object
cube.rotate(0, 0, Math.PI);
cube.rotation.x = Math.PI;
GAME.SCENE.rotObj(cube, 0, 0, Math.PI);

# Face object towards coordinates.
cube.lookAt(0, 0, 0);
```

## Object visibility <Badge type="tip" text="client-side" vertical="middle" /> 
**Tags: invisible**

You can hide or show krunker objects.

```krunkscript
# Create an object reference
obj cube = GAME.SCENE.addCube("", "#fff", 0, 0, 0, 10, 10, 10);

# Make object invisible
cube.visible = false;
```