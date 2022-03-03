# Hook list

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
```krunkscript
# Updates every tick, primarily used for updating the 2d canvas
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

### onMouseClick() <Badge type="tip" text="client-side" vertical="middle" />
```krunkscript
# Runs when mouse clicked
public action onMouseClick(num button, num x, num y) {
    # num button    - mouse click button id (1: left mouse, 2: middle mouse, 3: right mouse, 4+: mouse macro's)
    # num x         - x position of mouse
    # num y         - y position of mouse
}
```

### onMouseUp() <Badge type="tip" text="client-side" vertical="middle" />
```krunkscript
# Runs after mouse click
public action onMouseUp(num button, num x, num y) {
    # num button    - mouse click button id (1: left mouse, 2: middle mouse, 3: right mouse, 4+: mouse macro's)
    # num x         - x position of mouse
    # num y         - y position of mouse
}
```

### onMouseScroll() <Badge type="tip" text="client-side" vertical="middle" />
```krunkscript
# Runs when mouse scrolls
public action onMouseScroll(num dir) {
	# num dir       - 1: scroll up, scroll left 2: scroll down, scroll right
}
```

### onKeyPress() <Badge type="tip" text="client-side" vertical="middle" />
```krunkscript
# Runs when mouse scrolls
public action onKeyPress(str key, num code) {
    # str key        - key in text format (space == " ")
    # num code       - code of key (space == 32)
}
```

### onKeyUp() <Badge type="tip" text="client-side" vertical="middle" />
```krunkscript
# Runs after key was pressed
public action onKeyUp(str key, num code) {
    # str key        - key in text format (space == " ")
    # num code       - code of key (space == 32)
}
```

### onMouseScroll() <Badge type="tip" text="client-side" vertical="middle" />
```krunkscript
# Runs when key is held
public action onKeyHeld(str key, num code) {
    # str key        - key in text format (space == " ")
    # num code       - code of key (space == 32)
}
```

### onNetworkMessage() <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" />
```krunkscript
# Receive message from server or client
action onNetworkMessage(str id, obj data, str playerID) {
    #str id             - message name
    #obj data           - data as string
    #str playerID       - player id (server-side only)
```

### onCustomTrigger() <Badge type="tip" text="server-side" vertical="middle" />
```krunkscript
# Runs when trigger triggers "custom action" action
public action onCustomTrigger(str playerID, str customParam, num value) {
    # str playerID           - player id
    # str customParam        - custom trigger parameter
    # num value              - custom trigger value
}
```

### onCustomTrigger() <Badge type="tip" text="server-side" vertical="middle" />
```krunkscript
# Runs when trigger triggers "custom action" action
public action onCustomTrigger(str playerID, str customParam, num value) {
    # str playerID           - player id
    # str customParam        - custom trigger parameter
    # num value              - custom trigger value
}
```

### onDIVClicked() <Badge type="tip" text="client-side" vertical="middle" />
```krunkscript
# Runs when div is clicked
public action onDIVClicked(str id) {
    # str divid             - element id
}
```

### onControllerPress() <Badge type="tip" text="client-side" vertical="middle" />
```krunkscript
# Runs when a controller button gets pressed
public action onControllerPress(str key, num code) {
    #str key                - button in text format (dpad up == "dpad_up") 
    #num code               - code of button (space == 32)
}
```

### onControllerUp() <Badge type="tip" text="client-side" vertical="middle" />
```krunkscript
# Runs when a controller button was pressed
public action onControllerUp(str key, num code) {
    #str key                - button in text format (dpad up == "dpad_up") 
    #num code               - code of button (space == 32) 
}
```

### onControllerHeld() <Badge type="tip" text="client-side" vertical="middle" />
```krunkscript
# Runs when a controller button is being held
public action onControllerHeld(str key, num code) {
    #str key                - button in text format (dpad up == "dpad_up") 
    #num code               - code of button (space == 32) 
}
```