# Scripting

## Hooks <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
Hooks are functions called by javascript on the backend, and we overwrite them to include our own functionality.

### start() <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
```krunkscript
# Runs on every game start, thus after every round
public action start() {
    
}
```

### update() <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
```krunkscript
# Runs every tick, used for updating the world, players and AI
public action update(num delta) {
    # num delta     - time since last update in miliseconds
}
```

### render() <Badge type="tip" text="client-side" vertical="middle" />
:::tip
- Render is called AFTER update
- It's used for the [2d canvas](./rendering_2d.md)
:::

```krunkscript
# Updates every tick, primarily used for updating the 2d canvas.
public action render(num delta) {
    # num delta     - time since last update in miliseconds
}
```

### onPlayerSpawn() <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
```krunkscript
# Runs when player spawns in
public action onPlayerSpawn(str id) {
    # str id        - player id
}
```

### onPlayerUpdate() <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
Use this for overriding Krunker's default movement or for creating your own custom movement. Do not use it for updating game objects or making non-client-predicted movement.

```krunkscript
# Runs when player updates, useful for custom movement
public action onPlayerUpdate(str id, num delta, obj inputs) {
    # str id        - player id
    # num delta     - time since last update in miliseconds
    # obj inputs    - input object
}
```

### onPlayerDeath() <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 

```krunkscript
# Runs when player dies
public action onPlayerDeath(str id, str killerID) {
    #str id         - id of dead player
    #str killerID   - id of killer
}
```

### onPlayerDamage() <Badge type="tip" text="server-side" vertical="middle" /> 

```krunkscript
# Runs when player receives damage
public action onPlayerDamage(str id, str doerID, num amount) {
    #str id         - id of player who got damaged
    #str doerID     - id of player who dealt the damage
    #num amount     - amount of damage dealt
}
```

### onPlayerLeave() <Badge type="tip" text="server-side" vertical="middle" /> 
:::warning
You can not access the player object after the player has left
:::

```krunkscript
# Runs when a player disconnects from the server
public action onPlayerLeave(str playerID) {
    #str playerID       - id of player that left
}
```

### onGameEnd() <Badge type="tip" text="server-side" vertical="middle" /> 
```krunkscript
# Runs when the game ends
public action onGameEnd() {
   
}
```

### onChatMessage() <Badge type="tip" text="server-side" vertical="middle" /> 
```krunkscript
# Runs when a player sends a chat message
public action onChatMessage(str msg, str playerID) {
    #str msg        - message
    #str playerID   - player send id
}
```

### onServerClosed() <Badge type="tip" text="server-side" vertical="middle" />

```krunkscript
# Runs when the server closes
public action onServerClosed() {

}
```

### onAdFinished() <Badge type="tip" text="server-side" vertical="middle" />

```krunkscript
# Runs when a player finished watching an ad
public action onAdFinished(str playerID, bool success) {
    # str playerID      - Player who finished watching
    # bool success      - Whether the ad played succesfully
}
```

Ads can be ran on the clientside using GAME.ADS.playVideo().

:::tip
You can play a video every 5 minutes
:::

```krunkscript
GAME.ADS.playVideo();
```

### Input hooks <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
See: [Input hooks](/unmerged/inputs.html)

### Networking hooks <Badge type="tip" text="server-side" vertical="middle" /> 
See: [Networking hooks](/unmerged/multiplayer_&_networking.html)

### Trigger hooks <Badge type="tip" text="server-side" vertical="middle" /> 
See: [Trigger hooks](/unmerged/trigger_logic.html)

### UI hooks <Badge type="tip" text="client-side" vertical="middle" />
See: [UI hooks](/unmerged/user_interface.html#adding-an-element-div)

## Default behavior <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
Krunkscript allows you to disable default game behaviour.

```krunkscript
GAME.DEFAULT.disablePrediction();       # disable client prediction (client)
GAME.DEFAULT.disablePlayerBehaviour();  # disable player logic (client & server)
GAME.DEFAULT.disable3D();               # disable 3D Scene (client)
GAME.DEFAULT.disableServerSync();       # dont send player data (server)
GAME.INPUTS.disableDefault();           # dont send player inputs (client)
GAME.UI.hideDefault();                  # disables most default UI (client)
GAME.UI.hideCrosshair();                # disables crosshair (client)
GAME.PLAYERS.disableMeshes();           # hide player models (client)

player.defaultMovement = false;         # disables player movement (client & server)
player.defaultVelocity = false;         # disables player velocity (client & server)
player.defaultRotation = false;         # disables player rotations (client & server)
player.disableShooting = true;          # disables shooting & reloading (client & server)
player.disableMelee = true;             # disables melee (client & server)
player.disableDefault("jump");          # disables input behaviours (client & server)
```

## Variables <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
Variables are used to store information.

```krunkscript
# Create variable
num number = 1;             # number (int/float)
str text = "hello world";   # text (string)
bool val = true;            # boolean
```

## Naming rules <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
:::warning
- Variables can't start with a number
- Variables can not use special charactes
- Variable names need to be unique
- Functions are also variables, and take up variable names
- Can't call variable names after existing krunker elements like GAME, lengthOf, notEmpty etc.
:::

```krunkscript
# Naming rules
num 0test = 0;      # invalid

num test = 0;       # valid
str _test = "hi";   # valid
num test0 = 0;      # valid
obj name = {};      # valid
```

## Type conversion <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
Converting from one type to another.

```krunkscript
num number = 1;             # create number
str text = (str) number;    # cast to string
str text = toStr number;    # convert number ("Deprecated" according to developers))
num newNum = toNum text;    # convert to string ("Deprecated" according to developers)

num test = toNum "0";       # valid ("Deprecated" according to developers)
num test2 = toNum "a";      # invalid: returns 0 ("Deprecated" according to developers)
```

## Objects <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
**Tags: dictionaries, hashmaps**

:::warning
- Don't forget the ; after creating an object
- hasProp is undocumented, documentation on it might be flawed.
:::

```krunkscript
# Create a basic object
obj car = {
    name: "Toyota",
    x: 0
};

# Change or set properties
(num) car.x += 1;
car.y = 10;

# Checking an empty object
obj other = {};
if (notEmpty other) {
	# this condition would fail
}

# Check if property exists
(hasProp car "name");   # returns true
(hasProp car "wing");   # returns false
```

## Arrays <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
**Tags: lists, collections, fields, lengthof, size, length, push**

Arrays are used to store several objects/values of the same type.

```krunkscript
# Create array
str[] list = str["a", "b"];
obj[] list = obj[{a: 1}, {a: 5, b: 10}];

# Number array
num[] list = num[1, 2, 3, 4, 5];
num test = list[0] + list[1];

# Nested lists
num[][] nested = num[][num[1], num[1, 2]];

# Remove index from array
remove list[0]; # remove first item from list
remove list[i]; # remove specific index from list

# Get array length
lengthOf list;

# Add entry to array
addTo list 10;
```

## Functions & actions <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
KrunkScript allows you to create custom actions (traditionally called functions). For example you could create an action that moves a car and depletes fuel from said car:

:::warning
Krunkscript has no function hoisting. Meaning you have to call a function after it is created.
:::

```krunkscript
# Create basic car object
obj car = {
    x: 0,           # x position
    speed: 0.1,     # cars speed value
    fuel: 100       # start with full tank
};

# Drive action
action drive(num delta) {
    if ((num) car.fuel > 0) {                               # car only moves while it has fuel
        car.x = (num) car.x + ((num) car.speed * delta);    # move car
        (num) car.fuel -= 0.1 * delta;                      # lose fuel
    };
}

# Game loop
public action update(num delta) {
    drive(delta);    # call custom action
}

# Return values
num action addFuel(num amount) {
    GAME.log("Added " + (str) amount);    # convert num to string
    return amount;
}

car.fuel = (num) car.fuel + addFuel(10);
```

### Passing actions as arguments <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 

:::tip
In update v5.4.1 this was announced: "Action parameters are now option for all GAME sub actions". We are not sure what this means, but maybe you do
:::

```krunkscript
# Create function to pass as argument
str action word(str word){
    return "This is a word: " + word;
}

# Pass function as argument
action say(str action(str) funcArg){
    funcArg("Pizza");   # Outputs "This is a word: Pizza"
}
```

## Debugging <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
**Tags: Log, Println, Say**
Use the following functions to help you when debugging

```krunkscript
GAME.log("Text");                           # logs text to the browser console
GAME.log(object);                           # logs object to console
GAME.log((str) number + "text");            # combine number with text

# You can cleanly chain variables together in a log like this:

GAME.log("test", "test2", 6, [0, 1, 2]);    # returns: test test2 6 [0, 1, 2]
```

## Maths & calculations <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
```krunkscript
num value = 1 + 1;          # addition
num value = 10 - 1;         # deduction
num value = 2 * 1.5;        # multiplication
num value = 2 ** 2;         # power of
num value = 2 / 1;          # division
num value = 10 % 5;         # modulo
value += 10;                # add to value
value++;                    # add 1 to value
value -= 5;                 # subtract from value
value--;                    # deduct 1 from value
num x = 3 << 1;             # bitshift left
num x = 3 >> 2;             # bitshift right
num x = 2 >>> 1;            # unsigned right shift bit operation
num value = 2 * (5 - 3);    # brackets
```

## Basic math functions & utilities <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 

```krunkscript
Math.E                              # Euler's number
Math.PI                             # PI
Math.PI2                            # PIx2

Math.sin(num);                      # Sine
Math.sinh(num);                     # Hyperbolic Sine
Math.cos(num);                      # Cosine
Math.cosh(num);                     # Hyperbolic Cosine
Math.tan(num);                      # Tangent
Math.tanh(num);                     # Hyperbolic Tangent
Math.asin(num);                     # Arcsine 
Math.asinh(num);                    # Hyperbolic arcsine
Math.acos(num);                     # Arccos
Math.acosh(num);                    # Hyperbolic Arccos
Math.atan(num);                     # Arctan
Math.atan2(num);                    # Arctan²
Math.atanh(num);                    # Hyperbolic Arctan

Math.log(num);                      # Logarithm
Math.exp(num);                      # Exponent
Math.pow(num, pow);                 # Power of

Math.round(num);                    # Round number
Math.floor(num);                    # Round down number
Math.ceil(num);                     # Round up number
Math.roundDecimal(num, decimals);   # Number reduced to certain decimals
Math.roundToNearest(num, near);     # Round number to nearest
Math.trunc(num);                    # Removes x amount of decimals

Math.abs(num);                      # Absolute number (non-negative)
Math.hypot(...args);                # Hypotenuse
Math.sqrt(num);                     # Square root
Math.min(num1, num2);               # Lowest of two values
Math.max(num1, num2);               # Highest of two values
Math.lerp(num1, num2, amnt);        # Interpolates between two values
Math.calcPerc(num, perc);           # Percent value of number

Math.toRad(num);                    # Converts degrees to radians
Math.toDeg(num);                    # Converts radians to degrees
```


## Random number generation <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
```krunkscript
UTILS.randInt(x, y);     # random number between x and y
UTILS.randFloat(x, y);   # random float between x and y
```

## Distance calculations <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 

```krunkscript
UTILS.getDist2D(x1, y1, x2, y2);         # distance between 2 points in 2D space
UTILS.getDist3D(x1, y1, z1, x2, y2, z2); # distance between 2 points in 3D space
```

## Angle calculations <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
**Tags: direction, vector**

```krunkscript
# 2D Angles
UTILS.anglDst(x, y);             # difference between 2 angles in radians
UTILS.getDir2D(x1, y1, x2, y2);  # direction between 2 points in radians

# 3D Angle
obj dirs = UTILS.getDir3D(x1, y1, z1, x2, y2, z1);   # directions between 2 points in radians
dirs.x;                                              # x direction
dirs.y;                                              # y direction
dirs.z;                                              # z direction
```

## String manipulation & testing <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 
You can use KrunkScript to manipulate strings in several ways.

:::tip
Regex support has been confirmed by the developers, but it not yet available
:::

:::warning
UTILS.truncateTxt randomly appends dots at the end of a string
:::

:::details Developer statement regarding UTILS.truncateTxt.
‟Docs are wrong„ ~ KPal, discord
:::

```krunkscript
# Create string
str testString = "Test";    

str string2 = testString + "Me";                            # Combine strings
str string3 = UTILS.toUpper(testString);                    # Makes text uppercase (returns "TEST")
str string4 = UTILS.toLower(testString);                    # Makes text lowercase (returns "test")
str string5 = UTILS.truncateTxt("123456", 2, true);         # Reduce text to first 2 characters (returns "12")
str string6 = UTILS.truncateTxt("123456", 2, false);        # results in: "12..."
str string7 = UTILS.replaceText("hello there", "the", "");  # results in: "hello re"
```

```krunkscript
# Create string
str testString = "test"; 
if (UTILS.textContains(testString, "test")) {
	# Check if string contains certain value
}
```

You can also check certain properties of a string:

```krunkscript
# Create string
str testString = "test"; 
if (UTILS.textContains(testString, "test")) {
	# Check if string contains certain value
}
```

### Saving string to keyboard <Badge type="tip" text="client-side" vertical="middle" />

```krunkscript
# Copies text to clipboard
UTILS.copyToClipboard("hello world");
```

## Loops <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 

```krunkscript
# Create for loop
for (num i = 0; i < 10; i++) { # loop 10 times
	# more code here
}
```

```krunkscript
# Create while loop
num test = 10;
while (test > 0) { # loop 10 times
	test--;
}
```

```krunkscript
# Create object property loop
obj test = {x: 1, y: 4, z: 2};
for (obj prop in test) {
        GAME.log(number.key, number.value);  # x 1, y 4, z 2
}
```

```krunkscript
# Iterate over array
str[] list = str["a", "b", "c"];
for (num i = 0; i < lengthOf list; i++) {
    GAME.log(list[i]); # log item in list
}
```

```krunkscript
# You can break out of a loop (end loop entirely):
for (num i = 0; i < 10; i++) {
    if (i == 5) {
		break; # ends loop
	}
}
```

```krunkscript
# You can also continue out of a loop (jump to next iteration):
for (num i = 0; i < 10; i++) {
    if (i == 5) {
        continue; # go to next iteration
    }
    GAME.log("Test " + toStr i);
}
```

## Conditions & if statements <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" /> 

If statements allow you to run certain code only if a certain condition is met.

```krunkscript
num value = 10;
if (value > 20) {
    GAME.log("Bigger than 20");
} 
else {
    GAME.log("Less than or equal to 20");
}
```

```krunkscript
# Condition operators

value > other   # greater than
value >= other  # greater than or the same
value < other   # less than
value <= other  # less than or the same
value == other  # same as
value != other  # not the same as

condition && condition  # multiple conditions must be met
condition || condition  # any condition is met

# You can also check if a value exists/is true
if (!!value) {

}

# Some examples
if ((10 < 5) || (5 == 10)) {
    # wont run
}

str test = "ab";
if (("a"+"b") == test && (1+1) == 2) {
    # will run
}

# Ternary operations
num = (true ? 1 : 0);
```