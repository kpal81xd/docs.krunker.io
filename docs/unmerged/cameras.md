# Cameras
## Attaching/Detaching cameras <Badge type="tip" text="client-side" vertical="middle" />

You can detach the player camera to move and rotate it.

```krunkscript
GAME.CAMERA.detach();
GAME.CAMERA.attach();
```

## Moving/Rotating cameras <Badge type="tip" text="client-side" vertical="middle" />

:::warning
Only once the camera is detached, you can also rotate or position it
:::

```krunkscript
# Move camera
GAME.CAMERA.move(
    0,   # num x position
    0,   # num y position
    0    # num z position
);

# Rotate camera
GAME.CAMERA.rotate(
    0,   # num x rotation
    0,   # num y rotation
    0    # num z rotation
);

# Make camera look at coordinates
GAME.CAMERA.lookAt(
    0,   # num x position
    0,   # num y position
    0    # num z position
);
```

## Camera methods <Badge type="tip" text="client-side" vertical="middle" />

```krunkscript
# Field of view
GAME.CAMERA.fov(90); # num (10-170)

# Shake the camera
GAME.CAMERA.shake(0.9); # num (0 - 1)
```
