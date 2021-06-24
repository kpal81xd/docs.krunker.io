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

```csharp
// get current unix time
num nowTime = GAME.TIME.now();

// delta value
public action update(delta) {
    object.x = object.x + (object.speed * delta);
    // using delta ensures consistent speed
    // regardless of framerate
}
```

<br><br/>

## Players

KrunkScript allows you to interact with the default player objects:

```csharp
// find a player by their sid
obj player = GAME.findPlayerBySID(
    sid, // num player sid
);
if (player) {
    // do something
}

// access player list
obj[] players = GAME.PLAYERS.list;
for (num i = 0; i < lengthOf players; ++i) {
    // do something
}
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

