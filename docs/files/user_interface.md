## Adding an Element/DIV

If you don't want to use Krunker's default UI elements, you can add your own using KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# add new div
str divID = GAME.UI.addDIV(
    id, # str ID of div
    vis, # bool default visiblity
    css, # str default CSS/styling
	parentID # str parent DIV id (optional)
);

# parent ID allows you to add a div to another div.
# specify menu, game or any other DIV id to determine where to add it

# you can also remove a div:
GAME.UI.removeDIV(
    divID # str ID of div
);
```

## Positioning & Styling

You can update the styling and positioning of UI elements with KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# update div CSS property
GAME.UI.updateDIV(
    id, # str ID of div
    prop, # str property name
    val # value to set to
);

# example of updating a div's width
GAME.UI.updateDIV("healthBar", "width", "10px");

# example of properties you can change (can change majority of known CSS properties):
- width, height
- left, right, top, bottom,
- background-color
- visible
- ...
```

## Click Events

You can assign click events to UI elements to call custom actions when a player clicks something:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# built-in click hook/listener
public action onDIVClicked(str id) {
    if (id == "customDIVID") {
        # do something
    };
}
```

## Updating Content

You can update the inner content of a UI element using KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```krunkscript
# update div text by id
GAME.UI.updateDIVText(
    id, # str ID of div
    text, # str text value to update to
);
```

## Custom CSS

You can fully customize your games CSS using a [Resource Pack](./files/mod-resource_packs?id=custom-css)

## Mobile Friendly UI

To make your experience more mobile friendly, you will have to make some adjustments to the control sheme and user interface.

___

Mobile only Elements/CSS: To Hide/Show an Element on Mobile only you can do this in your [Custom CSS](./files/user_interface?id=custom-css) file:

```css
/* HIDE DIV BY ID */
#uiBase .isMobile .DIVID {
    display: none;
}

OR

/* HIDE DIV BASED ON SCREEN SIZE: */
@media only screen and (max-width: 600px) {
    #DIVID {
        display: none;
    }
}
```
Alternatively you can assign the Mobile Only property to the Element in the editor:
```css
```

**Mobile Specific Elements**: Some elements are specific to mobile and can be edited and repositioned with CSS. Here is a list of the Mobile specific elements available by default:

```css
#mobileJoystick {}
#mobileJump {}
#mobileCrouch {
    display: none; // HIDE ELEMENT
	# custom css
}
#mobileEsc {}
```

The usage of these elements is entirely optional. You can create your own elements and assign custom behaviour to them using scripting or the editor UI.
