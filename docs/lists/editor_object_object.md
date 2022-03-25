# Editor object data

```krunkscript
{
    # Rotate object relative to itself, not relative to the world.
    object.rotateLocal(
        3,      # x rotation
        0,      # y rotation
        3       # z rotation
    ); 

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