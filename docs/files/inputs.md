## Introduction

You can check/listen for user inputs. This information is useful when creating custom movement or user interacions.

## Keyboard Inputs

You can check if a certain keyboard key is pressed by using KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# must be inside update loop
action update(num delta) {

	# uses javascript keycodes
    if (GAME.INPUTS.keyDown(67)) {
        # do something
    };
};
```

If you want to learn which keycodes match which key, go [here](https://keycode.info/).

## Mouse Position

You can get the Mouse Position at any time on the client by using KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# get mouse position on screen
obj posNormal = GAME.INPUTS.mousePos();
# do something with it

# draw red circle at mouse position on overlay
obj pos = GAME.INPUTS.mousePosOverlay();
GAME.OVERLAY.drawCircle((num) pos.x, (num) pos.y, 10, 10, 0, "#ff0000");
```

## Mouse Movement

You can also get the amount the mouse has moved by this frame using KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# get mouse movement vector
obj pos = GAME.INPUTS.mouseMovement();
```

## Unlock Mouse

You unlock the mouse to allow players to interact with custom UI by using KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# unlock mouse
GAME.INPUTS.unlockMouse();
```

To relock the mouse, players can just click off of the custom divs.

---

You can also permanently unlock your mouse if your game requires it:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# unlock mouse at all times
GAME.INPUTS.freeMouse();
```

## Input Listeners

The client.krnk script also has a few pre-built actions that listen for inputs events:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# mouse click listener
public action onMouseClick(num button, num x, num y) {
	# called every mouse click
	# button left, middle click etc
	# do something with x & y coordinates
}
public action onMouseUp(num button, num x, num y) {
	# button left, middle click etc
	# do something with x & y coordinates
}

# key press listener
public action onKeyPress(str key, num code) {
    # check for key value:
    if (key == "w") {
        # pressed W
    };
}

# key up listener
public action onKeyUp(str key, num code) {
    # check for key value:
    if (key == "w") {
        # released W
    };
}

# key held listener
public action onKeyHeld(str key, num code) {
    # check for key value:
    if (key == "w") {
        # holding W
    };
}

# mouse scroll listener
public action onMouseScroll(num dir) {
	# scroll direction
}
```

## VR Controls

VR Support coming soon!