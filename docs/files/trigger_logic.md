## Triggers Introduction

Triggers offer a non-scripting solution to creating your own game logic. Triggers interact with eachother using interface IDs. Think of it like walkie talkies that communicate on a certain frequency.



<br><br/>

## Trigger Events

Events will allow you to listen for game events and trigger specific actions accordingly:

**onShoot (ID: 0):** REPLACE
___
**onMelee (ID: 1):** REPLACE
___
**onDamage (ID: 2):** REPLACE
___
**onEnterObject (ID: 3):** REPLACE
___
**onDestroy (ID: 4):** REPLACE
___
**onRespawn (ID: 5):** REPLACE
___
**onTimer (ID: 6):** REPLACE
___
**onProjectile (ID: 7):** REPLACE
___
**onThrowingMelee (ID: 8):** REPLACE
___
**onPunch (ID: 9):** REPLACE
___
**onHoldMouse (ID: 10):** REPLACE
___
**onCollision (ID: 11):** REPLACE
___
**onStorageEquals (ID: 12):** REPLACE
___
**onStorageGreater (ID: 13):** REPLACE
___
**onStorageLesser (ID: 14):** REPLACE
___
**onAIDeath (ID: 15):** REPLACE
___
**onInteractKey (ID: 16):** REPLACE
___
**onPlayerSpawn (ID: 17):** REPLACE
___
**onPlayerKill (ID: 18):** REPLACE
___
**onPlayerDie (ID: 19):** REPLACE
___
**onAIDamage (ID: 20):** REPLACE
___
**onNukeStart (ID: 21):** REPLACE
___
**onNukeEnd (ID: 22):** REPLACE
___
**onExitObject (ID: 23):** REPLACE
___
**onCustomValEquals (ID: 24):** REPLACE
___
**onCustomValLesser (ID: 25):** REPLACE
___
**onGameStart (ID: 26):** REPLACE
___
**onObjectiveSwitch (ID: 27):** REPLACE
___
**onPlayerDamage (ID: 28):** REPLACE

<br><br/>

## Trigger Conditions

Conditions will allow you to execute an action only if a certain condition is met, similary to if statements in KrunkScript:

**None (ID: 0):** REPLACE
___
**Player Value (ID: 1):** REPLACE
___
**Current Class (ID: 2):** REPLACE
___
**Trigger Value (ID: 3):** REPLACE
___
**Player Count (ID: 4):** REPLACE
___
**Global Value (ID: 5):** REPLACE
___
**Player has Account (ID: 6):** REPLACE
___
**Player has Premium (ID: 7):** REPLACE
___
**Player is Verified (ID: 8):** REPLACE
___
**Player is Partner (ID: 9):** REPLACE

<br><br/>

## Trigger Actions

Execute certain actions to interact with the game & players:

**Give Player Score (ID: 0):** REPLACE
___
**Kill Player (ID: 1):** REPLACE
___
**Respawn Player (ID: 2):** REPLACE
___
**Change Player Health (ID: 3):** REPLACE
___
**Destroy Interface (ID: 4):** REPLACE
___
**Toggle Interface Gate (ID: 5):** REPLACE
___
**Change Interface Health (ID: 6):** REPLACE
___
**Teleport Player To Interface (ID: 7):** REPLACE
___
**Change Interface Deposit Box Amount (ID: 8):** REPLACE
___
**Kill Opposing Team (ID: 9):** REPLACE
___
**Respawn Opposing Team (ID: 10):** REPLACE
___
**Respawn Destructible Interface (ID: 11):** REPLACE
___
**Toggle Destructible Interface (ID: 12):** REPLACE
___
**Set Player Score (ID: 13):** REPLACE
___
**Broadcast Sound (ID: 14):** REPLACE
___
**Clear Player Loadout (ID: 15):** REPLACE
___
**Broadcast Message (ID: 16):** REPLACE
___
**Send Message (ID: 17):** REPLACE
___
**Swap Player Team (ID: 18):** REPLACE
___
**Set Player Team (ID: 19):** REPLACE
___
**Round Time (ID: 20):** REPLACE
___
**Reset Interface (ID: 21):** REPLACE
___
**End Round (ID: 22):** REPLACE
___
**Refill Player Knife (ID: 23):** REPLACE
___
**Destroy Self (ID: 24):** REPLACE
___
**Increase Interface Storage (ID: 25):** REPLACE
___
**Decrease Interface Storage (ID: 26):** REPLACE
___
**Set Interface Storage (ID: 27):** REPLACE
___
**Reset Interface Storage (ID: 28):** REPLACE
___
**Broadcast Popup (ID: 29):** REPLACE
___
**Send Popup (ID: 30):** REPLACE
___
**Jump Scare (ID: 31):** REPLACE
___
**Reward KR (ID: 32):** REPLACE
___
**Clear Player Checkpoints (ID: 33):** REPLACE
___
**Send Sound (ID: 34):** REPLACE
___
**Explosion (ID: 35):** REPLACE
___
**Spawn AI (ID: 36):** REPLACE
___
**Set Player Value (ID: 37):** REPLACE
___
**Inc/Dec Player Value (ID: 38):** REPLACE
___
**Play Animation (ID: 39):** REPLACE
___
**Teleport Player to Path Node (ID: 40):** REPLACE
___
**Teleport Destructible Interface to Path Node (ID: 41):** REPLACE
___
**Reset Destructible Interface Position (ID: 42):** REPLACE
___
**Set Interface Trigger Value (ID: 43):** REPLACE
___
**Inc/Dec Interface Trigger Value (ID: 44):** REPLACE
___
**Set Trigger Value (Self) (ID: 45):** REPLACE
___
**Inc/Dec Trigger Value (Self) (ID: 46):** REPLACE
___
**Change Class (ID: 47):** REPLACE
___
**Set Interface Deposit Box Amount (ID: 48):** REPLACE
___
**Save Data (ID: 49):** REPLACE
___
**Change Primary Weapon (ID: 50):** REPLACE
___
**Change Secondary Weapon (ID: 51):** REPLACE
___
**Set Global Value (ID: 52):** REPLACE
___
**Change Global Value (ID: 53):** REPLACE
___
**Stop Sound (ID: 54):** REPLACE
___
**Show/Hide GUI Element (All) (ID: 55):** REPLACE
___
**Show/Hide GUI Element (Player) (ID: 56):** REPLACE
___
**Load Data (ID: 57):** REPLACE

<br><br/>

## Triggers & Scripts

Triggers and [Scripts](./files/scripting?id=introduction) can interact with eachother. For example you can call custom actions from a Trigger Event.

___

Using Triggers to execute custom script action:

```js
Execute Action (ID: 58):(
    name, // action name
    player // player passed in automatically
)
```

In order to call a custom action from a Trigger Object, make sure you declare it as a public action:
```js
public action test(player) {
    // do something
}
```

___

**Using KrunkScript** to exectute a Trigger Action:

```js
GAME.TRIGGERS.execute(
    ID, // num action ID,
    args // other arguments depends on action
);
```

<br><br/>

