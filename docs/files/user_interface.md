## Adding an Element/DIV

If you don't want to use Krunker's default UI elements, you can add your own using KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```csharp
// add new div
obj testDIV = GAME.UI.addDIV(
    id, // str ID of div
    vis, // bool default visiblity
    css, // str default CSS/styling
);
testDIV.id; // hold property

// you can also remove a div:
GAME.UI.removeDIV(
    id // str ID of div
);
```

<br><br/>

## Positioning & Styling

You can update the styling and positioning of UI elements with KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```csharp
// update div CSS property
GAME.UI.updateDIV(
    id, // str ID of div
    prop, // str property name
    val // value to set to
);

// example of updating a div's width
GAME.UI.updateDIV("healthBar", "width", "10px");

// list of properties you can change:
- width, height
- left, right, top, bottom,
- background-color
- visible
- ...
```

<br><br/>

## Click Events

You can assign click events to UI elements to call custom actions when a player clicks something:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```csharp
// built-in click listener
public action onDIVClicked(str id) {
    if (id == "customDIVID") {
        // do something
    }
}
```

<br><br/>

## Updating Content

You can update the inner content of a UI element using KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```csharp
// update div text by id
GAME.UI.updateDIVText(
    id, // str ID of div
    text, // str text value to update to
);
```

<br><br/>

## Custom CSS

TO BE FILLED IN

<br><br/>

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

<br><br/>

