## Introduction

Scripting allows you to create custom logic for your game. You can also interact with game elements such as: objects, interface, [Overlay Canvas](./files/rendering_2d?id=overlay-canvas), sounds, animations & more.\
If you are not sure how to create your own script, we have created a few Examples & Templates for you to learn from. Alternatively you can search for scripts in the **Community Asset Hub**.

<br><br/>

## Script Types

There are 3 types of scripts in KrunkScript:

___

**client.krnk:** This script is responsible for handling the core of the game logic on the client. Its generated for every game and offers a few [Default Functions](./files/scripting?id=script-structure) to help you out.

___

**server.krnk:** This script is responsible for handling the core of the game logic on the server. Its generated for every game and offers a few [Default Functions](./files/scripting?id=script-structure) to help you out.

___

**Addon Scripts:** These scripts can be imported into the client or server scripts and allow you to modularize your code. Addon scripts can be found on the **Community Asset Hub**
<br><br/>

## Create a Script

To create a new script, navigate to the 'Component' dropdown in the editor:
```
```

From there, select 'Scripts' and then press the 'Add Script' button.
```
```

<br><br/>

## Server/Client

Scripts can be run both on the server and the client. Some actions however are specific to one or the other.\
Anything rendering related for example will run only on the client. It is important to understand the difference between the two.

<br><br/>

## Script Structure

The client and server have a few auto generated actions to make things easier for you.

___

**start():** The start action is called every time the game starts on both the server and the client. Use this to load data, initialize the world, reset things after a round has ended & more.

```krunkscript
action start() {
    # add code here
}
```
___
**update():** The update action is called every frame on both the server and the client. Recommended to be used for things like: Updating the World, Updating AIs & Objects.

```krunkscript
action update(num delta) {
    # delta is the time since the previous update
    # add logic here
}
```

___

**render():** The render action is also called every frame on the client. Recommended to be used for things like: Rendering on [Overlay Canvas](./files/rendering_2d?id=overlay-canvas).

**clinet-side**

```krunkscript
action render(num delta) {
    # render elements here
}
```
___

Both scripts also have built-in network listener actions that are called automatically when a message is sent through the network. [More Information](./files/multiplayer_&_networking?id=receiving-data)
___
Additionally, the client.krnk script has a few [Input Listener](./files/inputs?id=input-listeners) actions built-in.


<br><br/>

## Default Behaviour

Krunker offers a lot of default behaviour out of the box. You can disable certain behaviours to further customize your game:

```krunkscript
GAME.DEFAULT.disablePrediction(); # disable client prediction
GAME.DEFAULT.disablePlayerBehaviour(); # disables default player logic
GAME.DEFAULT.disable3D(); # disable 3D Scene (For 2D Only Games)
GAME.DEFAULT.disableServerSync(); # disables server sending player data every tick
GAME.UI.hideDefault(); # disables most default krunker UI
GAME.UI.hideCrosshair(); # disables crosshair
GAME.PLAYERS.disableMeshes(); # hides default player models (replace with custom)
```

<br><br/>

## Variables

Variables are used to store information

```krunkscript
# create variables
num number = 1; # number (int/float)
str text = "hello world"; # string/text
bool val = true; # boolean
```

<br><br/>

## Naming Rules

KrunkScript has strict property naming rules

```krunkscript
# naming rules (must begin with character or _)
num test = 0; # valid
str _test = 0; # valid
num 0test = 0; # invalid
num test0 = 0; # valid
obj name = {}; # valid

# no special characters allowed
```

<br><br/>

## Type Conversion

Converting from one type to another

```krunkscript
num number = 1; # create number
str text = toStr number; # convert number
num newNum = toNum text; # convert to string

num test = toNum "0"; # valid
num test = toNum "a"; # invalid
```

<br><br/>

## Objects

Objects are used to store a collection of information

```krunkscript
# create basic object
obj car = {
    str name: "Toyota", # text property
    num x: 0, # number property
};
car.x = car.x + 1; # example
num car.y = 10; # invalid: must define structure before

isEmpty car; # check if object has no properties
```

<br><br/>

## Arrays (Lists)

Arrays/Lists are used to store several objects/values of the same type

```krunkscript
# create basic array
str[] list = str["a", "b"]; # list of strings
obj[] list = obj[{ # list of objects (must have same structure)
    num a: 1
}, {
    num a: 5
}];
num[] list = num[1, 2, 3, 4, 5]; # list of numbers
num test = list[0] + list[1]; # access list values

lengthOf list; # returns length of list

remove list[0]; # remove first item from list
remove list[i]; # remove specific index from list

addTo list 10; # add new item to list

# nested lists
num[][] nested = num[][num[1], num[1, 2]];
```

<br><br/>

## Functions & Actions

KrunkScript allows you to create custom actions (traditionally called functions). For example you could create an action that moves a car and depletes fuel from said car:

```krunkscript
# create basic car object
obj car = {
    num x: 0, # x position
    num speed: 0.1, # cars speed value
    num fuel: 100 # start with full tank
};

# drive action
action drive(num delta) {
    if (car.fuel > 0) { # car only moves while it has fuel
        car.x = car.x + (car.speed * delta); # move car
        car.fuel -= 0.1 * delta; # lose fuel
    };
}

# game loop (called automatically)
action update(num delta) {
    drive(delta); # call custom action
    # render car etc
}

# return values
num action addFuel(num amount) {
    GAME.log("Added " + toStr amount); # convert num to string
    return amount;
}
car.fuel = car.fuel + addFuel(10);
```

___

You can also use [Trigger Events](./files/trigger_logic?id=trigger-events) in your scene to call a custom script action by using the "Call Action" [Trigger Action](./files/trigger_logic?id=trigger-actions). The player object will be passed in (if available).

<br><br/>

## Debugging


Use the following functions to help you when debugging

```krunkscript
GAME.log("Text"); # logs text to the browser console
GAME.log(object); # logs object to console
GAME.log(toStr number + "text"); # log number concatenated to string
```

<br><br/>

## Maths & Calculations

We provide a few built-in Functions & Properties to make certain calculations easier for you.

___

**Calculations & Operators**

```krunkscript
num value = 1 + 1; # addition
num value = 10 - 1; # deduction
num value = 2 * 1.5; # multiplication
num value = 2 / 1; # division
num value = 2 * (5 - 3) # brackets
```
___

**Basic Math Functions & Utilities:** built-in functions of the most common math operations & methods.

```krunkscript
MATH.E # returns euler's number
MATH.PI # returns PI
MATH.PI2 # returns PIx2
MATH.sin(num) # returns sin of number
MATH.cos(num) # returns cosin of number
MATH.tan(num) # returns tan of number
MATH.asin(num) # returns asin of number
MATH.acos(num) # returns acos of number
MATH.atan(num) # returns atan of number
MATH.log(num) # returns logarithm of number
MATH.exp(num) # returns exponent of number
MATH.pow(num, pow) # returns power of number
MATH.abs(num) # returns absolute (non-negative) number
MATH.round(num) # returns rounded number (non-decimal)
MATH.roundToNearest(num, near) # returns number rounded to nearest
MATH.floor(num) # returns rounded down number
MATH.ceil(num) # returns rounded up number
MATH.lerp(num1, num2, amnt) # returns rounded down number
MATH.calcPerc(num, perc) # returns percent value of number
```
___

**Random Number Generation:** Easy way to generate random numbers within a range

```krunkscript
GAME.UTILS.randInt(x, y) # random integer between x and y
GAME.UTILS.randFloat(x, y) # random float between x and y
```

___

**Distance Calculations:** Calculate the distance between 2 objects or points

```krunkscript
GAME.UTILS.getDist2D(x1, y1, x2, y2) # distance between 2 points in 2D space
GAME.UTILS.getDist3D(x1, y1, z1, x2, y2, z2) # distance between 2 points in 3D space
```

___

**Angle Calculations:** Angle & direction related calculations

```krunkscript
GAME.UTILS.anglDst(x, y) # difference between 2 angles in radians
GAME.UTILS.getDir2D(x1, y2, x2, y2) # direction between 2 points in radians
MATH.toRad(num) # converts degrees to radians
MATH.toDeg(num) # converts radians to degrees
```



<br><br/>

## Loops

Loops allow you to run certain code multiple times or to iterate over Arrays

```krunkscript
# create basic loop
for (num i = 0; i < 10; i++) { # loop 10 times
	# more code here
}

# iterate over array
str[] list = str["a", "b", "c"];
for (num i = 0; i < lengthOf list; i++) {
    GAME.log(list[i]); # log item in list
}

# while condition loop
num test = 10;
while (test > 0) {
	test--;
}
```

<br><br/>

## Conditions & if Statements

If statements allow you to run certain code only if a certain condition is met. Here is an example:

```krunkscript
num value = 10;
if (value > 20) {
    GAME.log("Bigger than 20");
} else {
    GAME.log("Less than 20");
};
```

In this case, the second log would run. Because value is not greater than 20. Here is a list of operators you can use in your if statements:

```krunkscript
value > other # greater than
value >= other # greater than or the same
value < other # less than
value <= other # less than or the same
value == other # same as
value != other # not the same as

condition && condition # multiple conditions must be met
condition || condition # any condition is met

# some examples
if ((10 < 5) || (5 == 10)) {
    # wont run
};
str test = "ab";
if (("a"+"b") == test && (1+1) == 2) {
    # will run
};

# make sure to always end these statements with a ;
# also make sure to wrap operations in ()
```

<br><br/>

## Importing Scripts

You can add dependencies to your scripts to extend their functionality. To import another script, add it to your dependencies list in the Editor UI

<div class="disBar">Currentyl Disabled</div>

___

Once you can see the selected script in your dependencies list, load it into your main script like so:

```krunkscript
obj lib = import("scriptName"); # name as shown in dependencies list
```

\* Note that importing & publishing of scripts is currently disabled.

<br><br/>

## Script Usage

Once you understand how to create a basic script, it's time to apply some logic to the game itself. Check the following sections for more info:

GAME. Reference\
[Render on 2D Canvas](./files/rendering_2d?id=2d-shapes)\
[Add 3D Objects](./files/custom_assets?id=3d-models)\
[Update 3D Object](./files/scene?id=moving_rotating-amp-scaling)\
[Move Camera](./files/cameras?id=updating-cameras)\
[Play Sounds](./files/custom_assets?id=sounds-amp-music)\
[Play Animation](./files/custom_assets?id=animations)\
[Add/Update Interface](./files/user_interface?id=adding-an-element-div)\
[Send Network Data](./files/multiplayer_&_networking?id=introduction)\
[Execute Triggers](./files/trigger_logic?id=triggers-amp-scripts)\
[Collisions](./files/game_logic?id=collisions)

<br><br/>

