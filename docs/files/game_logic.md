## Introduction

A basic game consists of a few simple components:

 * **Game Loop:** Timed loop to update the world.
 * **Game Elements:** Objects and Components in your game.
 * **Inputs/Controls:** User-actions & inputs.
 * **Feedback:** Response to user-actions & inputs applied to elements.
 * **Rendering:** Visual representation of game elements.

<br><br/>

## Timing

Time plays a very important role in any game/simulation. You can use it to make physics calculations or to simply add custom timers:

```krunkscript
# get current unix time
num nowTime = GAME.TIME.now();

# delta value
public action update(delta) {
    object.x = object.x + (object.speed * delta);
    # using delta ensures consistent speed
    # regardless of framerate
}
```

<br><br/>

## Players

KrunkScript allows you to interact with the default player objects:

```krunkscript
# find a player by their sid
obj player = GAME.PLAYERS.findBySID(
    sid, # num player sid
);
if (player) {
    # do something
};

# access player list
obj[] players = GAME.PLAYERS.list();
for (num i = 0; i < lengthOf players; ++i) {
    # do something
}

# get player object of active player
obj you = GAME.PLAYERS.getSelf(); # client-side only
```

You can change player values like with any other objects:

```krunkscript
player.position.x = 10; # set player x pos
player.position.y = player.position.y + 0.1; # move player y pos
player.rotation.x = 0.3; # set player direction
player.velocity.x = 0.1; # set player velocity
player.health = player.health - 10; # change player health
player.visible = false; # hide player object
```

<br><br/>

## Movement

Nothing Here Yet

<br><br/>

## Collisions

Nothing Here Yet

<br><br/>

## Controls

Nothing Here Yet

<br><br/>

