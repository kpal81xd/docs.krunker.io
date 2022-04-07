# Game logic

## Order of execution <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" />
1. **Game Loop:** Timed loop to update the world.
2. **Game Elements:** Objects and Components in your game.
3. **Inputs/Controls:** User-actions & inputs.
4. **Feedback:** Response to user-actions & inputs applied to elements.
5. **Rendering:** Visual representation of game elements.

## Timing <Badge type="tip" text="server-side" vertical="middle" /> <Badge type="tip" text="client-side" vertical="middle" />

:::warning
- You can only freeze time on the server side
- GAME.TIME.fixedDelta() does not work
- GAME.TIME.now() is based on system time. Its recommended to sync with server time
:::

```krunkscript
# Get current time in unix
num time = GAME.TIME.now();

# Delta gives you the miliseconds between updates
public action update(delta) {

    # Moving a cube at a consistent speed, regardless of framerate
	(num) object.x += ((num) object.speed * delta);
}

# Freeze or unfreeze game timer
GAME.TIME.freeze();
GAME.TIME.unfreeze();

# Get delta unaffected by game speed
GAME.TIME.fixedDelta();
```

## Players <Badge type="tip" text="server-side" vertical="middle" /> <Badge type="tip" text="client-side" vertical="middle" />

:::tip
GAME.PLAYERS.findByID() and GAME.PLAYERS.list() do not return references but instances
:::

```krunkscript
# Get own player object (client-side)
obj self = GAME.PLAYERS.getSelf();

# Get a player by their id
obj player = GAME.PLAYERS.findByID(
    id      # str player id
);

# Access player list
obj[] players = GAME.PLAYERS.list();

# If player does not exist.
if (notEmpty player && !player) {
    GAME.log("Player does not exist.");
}
```

You can change/access player values like with any other objects:

:::tip
You can find a full player object at [here](/lists/player_object.html)
:::
:::warning
player.accountID and player.accountName suddenly became server side only. It is unclear if it will ever come back to client side
:::

```krunkscript
player.position.x = 10;        # num set x pos
player.rotation.x;             # num XZ plane rotation in radians (read-only)
player.velocity.x = 0.1;       # num set x velocity

player.sid;                    # num short id
player.id;                     # str id
player.username;               # str username (can be set using krunker premium)
player.accountName;            # str account name (actual name)
player.accountID;              # str profile id

player.health = 10;            # num health
player.score = 5;              # num score (server-side)
player.visible = false;        # bool visible
player.team;                   # num team (read-only)
player.ammo                    # num ammo count (read-only)

player.classIndex;             # num returns class ID
player.loadoutIndex;           # num weapon slot ID

player.active;                 # bool spawned in (not when spectator/dead)
player.onWall;                 # bool touching a wall
player.onGround;               # bool touching the ground
player.onTerrain;              # bool touching terrain
player.isCrouching;            # bool is crouching
player.isYou;                  # bool player reference is self (client-side)
player.assetID = "325253";     # update player model
```

### Modifying loadout slots
:::warning
- Clearing the melee slot seems to not work at the moment
- You can only give/change weapons to their designated slot (pistol = secondary only, ak = primary only)
:::

```krunkscript
player.clearLoadout();          # void clear loadout of player
player.changePrimary(           # void change primary item from player
    0       # - Weapon id
);        
player.changeSecondary(         # void change secondary item from player
    0       # - Weapon id
);      
player.giveWeapon(              # void give player weapon
    0       # - Weapon id
);           
```

```krunkscript
player.removeMelee();          # void remove melee item from player
player.removePrimary();        # void remove primary item from player
player.removeSecondary();      # void remove secondary item from player
```

## AIs & NPCs <Badge type="tip" text="server-side" vertical="middle" />

:::warning
You are currently limited to 40 active AIs per game
:::

```krunkscript
# Create AI reference
obj AI = GAME.AI.spawn(
    "11441g",   # str asset id
    "AI 1",     # str name
    0,          # num x position
    0,          # num y position
    0,          # num z position
    {}          # obj additional data
);
```

```krunkscript
# Additional data for the AI
obj data = {
    animStart: "Idle", # str active animation name
    animSpeed: 0.5,    # num animation speed (0 - 1)

    health: 100,       # num ai health value

    speed: 1.0,        # num speed
    turnSpeed: 1.0,    # num turn speed
    gravity: 1.0,      # num gravity

    respawnT: 1000,    # num respawn time (miliseconds)
    respawnR: false,   # bool respawn random time

    targAI: false,     # bool target other AI
    targPlr: false,    # bool target players
    visionDis: 120,    # num vision distance
    chaseDis: 20,      # num chase distance

    canMelee: false,   # bool can melee
    meleeRate: 500,    # num melee rate (miliseconds)
    meleeRange: 500,   # num melee range
    meleeDmg: 500,     # num melee dmg
    canShoot: false,   # bool can shoot
    fireRate: 500,     # num firerate (miliseconds)

    roamRadius: 0,     # num roam radius
    roamTime: 0,       # num roam time
    shotSpread: 0,     # num shot spread
    shotBreak: 0,      # num shot break
    behaviorType: 0,   # num behavior type
    score: 0,          # num score

    modelScale: 10,    # num model scale
    modelOffsetY: 0,   # num model y-offset
    modelRotation: 0   # num model rotation offset
    hitBotW: 1,        # num hitbox width
    hitBoxH: 1,        # num hitbox height
};
```


```krunkscript
# Delete AI
GAME.AI.remove(testBot.sid);

# List AI
obj[] AIs = GAME.AI.list();

testBot.displayName;            # str name
testBot.health = 10;            # num health
testBot.position.x = 10;        # num position x
testBot.rotation.x = Math.PI;   # num rotation x
testBot.behaviour = 1;          # num (0: disabled 1: default)
testBot.pathIndex = 5;          # num pathnodes
```

## Movement <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" />

:::warning
Movement restrictions get reset on respawn
:::

```krunkscript
# Disable default movement behaviour
player.defaultMovement = false;

# Disable specific input
player.disableDefault("jump");

# Inputs get disabled within the "onPlayerUpdate" hook, which has the following controlls:
inputs.mouseY;          #num mouse y direction
inputs.mouseX;          #num mouse x direction
inputs.movDir;          #num W, A, S, D inputs converted to direction in radians

inputs.lMouse;          #bool left mouse
inputs.rMouse;          #bool right mouse
inputs.jump;            #bool jump key
inputs.reload;          #bool reload key
inputs.crouch;          #bool crouch key
inputs.scroll;          #bool scroll wheel delta
inputs.swap;            #bool swap keys
inputs.restK;           #bool parkour reset key
inputs.inter;           #bool interact key
```
