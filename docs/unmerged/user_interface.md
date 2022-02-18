# User interface

## Adding an element/div <Badge type="tip" text="client-side" vertical="middle" />

You can add your own UI elements to krunker using KrunkScript. If needed, you can [disable the default krunker UI](/unmerged/scripting.html#default-behavior).

```krunkscript
# Create a div (and get its str id)
# Specifying the parent div will make the div a child of that parent
str id = GAME.UI.addDIV(
    "minimap",                       # str id of div
    true,                            # bool is shown (display: none)
    "width: 10px; height: 10px",     # str CSS styling as string
	"gameUI"                         # str parent div id (default: "customGUIHolder")
);
```

### Changing div properties
```krunkscript
# Update div style property
GAME.UI.updateDIV(
    "minimap",              # str id of div
    "background-color",     # str property
    "red"                   # str value
);
```

### Getting div properties
```krunkscript
# Get property of div, returns str css value
    GAME.UI.getProp(
        "minimap"           # str id of div
        "background-color"  # property to get value of
    );
```

### Changing div text
```krunkscript
# Update div text
GAME.UI.updateDIVText(
    "minimap",      # str id of div
    "hello world"   # str text
);
```

### Moving the div
**Tags: clone**
```krunkscript
# Create element
GAME.UI.addDIV("sott_test", true, "");

# Move element to a different parent
GAME.UI.moveDIV(
    "sott_test",            # Current child id
    "gameUI",               # New parent to move to
    "sott_test_2"           # New child id
);
```

### Removing the div
```krunkscript
# Remove the div
GAME.UI.removeDIV(
    "minimap"       #str id of div
);
```

### Onclick  event listener
```krunkscript
# Runs when div is clicked
public action onDIVClicked(str id) {
    if (id == "minimap") {
        # do something
    };
}
```

## Custom CSS & phone compatability <Badge type="tip" text="client-side" vertical="middle" />
Using pure css, you can create phone compatable UI's. For more on mods check out [Mod/Resource packs](/unmerged/mod-resource_packs.html)

You can detect and adjust UI to phones using some of the following code:

```css
/* Hide by div id on mobile*/
#uiBase .isMobile #div_id {
    display: none;
}

/* Hide div based on screensize */
@media only screen and (max-width: 600px) {
    #div_id {
        display: none;
    }
}
```

### Mobile specific elements <Badge type="tip" text="client-side" vertical="middle" />
Some elements are specific to mobile and can be edited and repositioned with CSS. Here is a list of the Mobile specific elements available by default:

```css
#mobileJoystick{}     /*Joystick to move with*/
#mobileJump{}         /*Jump button*/
#mobileCrouch{}       /*Crouch button*/
#mobileEsc{}          /*Return to menu button*/
#mobileShoot{}        /*Shoot button*/
#mobileAimShoot{}     /*Button to aim & shoot at the same time*/
#mobileScope{}        /*Aim down sight button*/
#mobileReload{}       /*Reload button*/
#mobileSwap{}         /*Button to swap between primary and secondary*/
#mobileKSwap{}        /*Button to swap between knife and primary*/
```
