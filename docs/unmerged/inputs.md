# Inputs
## Keyboard Inputs <Badge type="tip" text="client-side" vertical="middle" />

:::tip
- must be used inside update loop
- uses javascript keycodes: https://keycode.info/
:::

```krunkscript
# Do something when "c", key code 67 is held down
public action update(num delta) {
    if (GAME.INPUTS.keyDown(67)) {
        # do something
    };
}
```

## Mouse Position  <Badge type="tip" text="client-side" vertical="middle" />

:::warning
- GAME.INPUTS.mousePos() does not work currently
:::
```krunkscript
# Get mouse position
obj mousePosition = GAME.INPUTS.mousePos();

# Draw a red circle at the position of the mouse
GAME.OVERLAY.drawCircle((num) mousePosition.x, (num) mousePosition.y, 10, 10, 0, "#ff0000");
```

## Mouse Movement <Badge type="tip" text="client-side" vertical="middle" />

```krunkscript
# Get mouse movement vector
obj pos = GAME.INPUTS.mouseMovement();
```

## Unlock Mouse <Badge type="tip" text="client-side" vertical="middle" />

```krunkscript
# Unlock mouse
GAME.INPUTS.unlockMouse();

# Unlock mouse entirely, unfocussing the window
GAME.INPUTS.freeMouse();
```

## Input Listeners <Badge type="tip" text="client-side" vertical="middle" />

```krunkscript
# Mouse click
public action onMouseClick(num button, num x, num y) {
    # num button    - mouse click button id (1: left mouse, 2: middle mouse, 3: right mouse, 4+: mouse macro's)
    # num x         - x position of mouse
    # num y         - y position of mouse
}
```

```krunkscript
# After mouse click
public action onMouseUp(num button, num x, num y) {
    # num button    - mouse click button id (1: left mouse, 2: middle mouse, 3: right mouse, 4+: mouse macro's)
    # num x         - x position of mouse
    # num y         - y position of mouse
}
```

```krunkscript
# When mouse scrolls
public action onMouseScroll(num dir) {
	# num dir       - 1: scroll up, scroll left 2: scroll down, scroll right
}
```

```krunkscript
# When key is being pressed
public action onKeyPress(str key, num code) {
    # str key        - key in text format. (space == " ")
    # num code       - code of key. (space == 32)
}
```

```krunkscript
# After key was pressed
public action onKeyUp(str key, num code) {
    # str key        - key in text format. (space == " ")
    # num code       - code of key. (space == 32)
}
```

```krunkscript
# When key is held
public action onKeyHeld(str key, num code) {
    # str key        - key in text format. (space == " ")
    # num code       - code of key. (space == 32)
}
```

### Controller input listeners <Badge type="tip" text="client-side" vertical="middle" />

:::warning
Input hooks have a very inconsistent `code` parameter, its recommended to use the `key` parameter instead
:::

```krunkscript
# Runs when a controller button gets pressed
public action onControllerPress(str key, num code) {
    #str key                - button in text format (dpad up == "dpad_up") 
    #num code               - code of button (shoulder_bottom_left == 10003)
}
```

```krunkscript
# Runs when a controller button was pressed
public action onControllerUp(str key, num code) {
    #str key                - button in text format (dpad up == "dpad_up") 
    #num code               - code of button (shoulder_bottom_left == 10003) 
}
```

```krunkscript
# Runs when a controller button is being held
public action onControllerHeld(str key, num code) {
    #str key                - button in text format (dpad up == "dpad_up") 
    #num code               - code of button (shoulder_bottom_left == 10003) 
}
```