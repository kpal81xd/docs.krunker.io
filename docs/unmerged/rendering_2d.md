# 2D Rendering

## Overlay canvas <Badge type="tip" text="client-side" vertical="middle" /> 
Krunker has a 2d overlay called *the canvas*. It allows you to render shapes and text on top of a 2d overlay.

```krunkscript
# Get dimensions of overlay obj{x, y} 
GAME.OVERLAY.getSize();
```
```krunkscript
# Move entire overlay 
GAME.OVERLAY.offset(
    10,     # num x offset
    0       # num y offset
);             
```
```krunkscript
# Scale overlay
GAME.OVERLAY.scale(
    0.1     #num scale
);                
```

```krunkscript
# Get text width (num) on overlay based on font size
GAME.OVERLAY.measureText(
    10,     #num font size
    "Test"  #str text
);
```

```krunkscript
# Clear overlay
GAME.OVERLAY.clear();
```

## Render loop <Badge type="tip" text="client-side" vertical="middle" />
You can draw on the overlay using the [render](/unmerged/scripting.html#render) hook.

:::tip
The render hook runs after the update hook, see [order of execution](/unmerged/game_logic.html#order-of-execution)
:::

```krunkscript
action render(num delta) {
    # Create a red triangle
    GAME.OVERLAY.drawRect(0, 0, 20, 15, 0, "#ff0000", 1);
}
```

## 2D shapes <Badge type="tip" text="client-side" vertical="middle" /> 

:::tip
Canvas shapes start at the top left of your screen, setting position will offset it to the bottom right
:::

### Text

```krunkscript
GAME.OVERLAY.drawText(
    "Hello world",  # str text
    0,              # num x position
    0,              # num y position
    0,              # num rotation (0 - 360)
    20,             # num font size
    "center",       # str alignment ("left", "center", "right")
    "#FFF",         # str color
    0.9             # num opacity
);

#### Get canvas width

# get canvas text width
num textWidth = GAME.OVERLAY.measureText(
    24, # num fontsize
    "Testing" # string text
);
```

### Rectangles

```krunkscript
GAME.OVERLAY.drawRect(
    0,            # num x position
    0,            # num y position
    100,          # num width
    100,          # num height
    0,            # num rotation (0 - 360)
    "#FFF",       # str color
    0.9,          # num opacity (0 - 1)
    false         # bool center
);
```

### Circles

```krunkscript
GAME.OVERLAY.drawCircle(
    0,           # num x position
    0,           # num y position
    100,         # num width
    100,         # num height
    0,           # num rotation (0 - 360)
    "#FFF",      # str color
    0.9,         # num opacity (0 - 1)
    false        # bool center
);
```

### Line

```krunkscript
GAME.OVERLAY.drawLine(
    0,           # num x start position
    0,           # num y start position
    100,         # num x end position
    100,         # num y end position
    20,          # num thickness
    "#FFF",      # str color
    0.9          # num opacity (0 - 1)
);
```

### Images

```krunkscript
GAME.OVERLAY.drawImage(
    "28142",    # str texture asset id
    0,          # num x position
    0,          # num y position
    256,        # num width
    256,        # num height
    0,          # num rotation (0 - 360)
    0.9         # num opacity (1 - 0)
);
```