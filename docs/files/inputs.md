## Introduction

You can check/listen for user inputs. This information is useful when creating custom movement or user interacions.

<br><br/>

## Keyboard Inputs

You can check if a certain keyboard key is pressed by using KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```csharp
// must be inside update loop
action update(num delta) {
    if (GAME.INPUTS.keyDown("W")) {
        // do something
    }
}
```

<br><br/>

## Mouse Position

You can get the Mouse Position at any time on the client by using KrunkScript:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```csharp
// store position in object
obj pos = GAME.INPUTS.mousePos();

// draw red circle at mouse position
GAME.drawCircle(pos.x, pos.y, 10, "#ff0000");
```

<br><br/>

## Input Listeners

The client.krnk script also has a few pre-built actions that listen for inputs events:

<p class="hidep"><strong class="client-side">client-side</strong></p>

```csharp
// mouse click listener
action onMouseClick(num x, num y) {
	// called every mouse click
	// do something with x & y coordinates
}

// key press listener
action onKeyPress(str key) {
    // check for key value:
    if (key == "W") {
        // pressed W
    }
}
```

<br><br/>

