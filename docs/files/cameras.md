## Introduction

By default Krunker adds a camera object to your scene. Cameras are responsible for rendering the 3D world. The camera behaviour and position determines the type of game youll make; Top Down, First Person, 3rd Person or Static

<br><br/>

## Updating Cameras

By default, the player camera will be attached to your player object.\
In order to move it around or lock it in position, you have to detach it from the player object:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
GAME.CAMERA.detach();

# you can re-attach it using:
GAME.CAMERA.attach();
```

Once the camera is detached, you can also rotate or position it:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# move camera
GAME.CAMERA.move(
    x, # num x position
    y, # num y position
    z  # num z position
);

# rotate camera
GAME.CAMERA.rotate(
    x, # num x rotation
    y, # num y rotation
    z  # num z rotation
);

# camera look at point
GAME.CAMERA.lookAt(
    x, # num x position
    y, # num y position
    z  # num z position
);
```

<br><br/>

## Camera Properties

Certain camera properties that can be changed in KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# change fov
GAME.CAMERA.fov(90); # num 10-170

# position & rotation
# detach the camera before you move it here
GAME.CAMERA.position.x = 10;
num xP = (num) GAME.CAMERA.position.x;
GAME.CAMERA.rotation.y = Math.PI;
num yR = (num) GAME.CAMERA.rotation.y;
```

<br><br/>

