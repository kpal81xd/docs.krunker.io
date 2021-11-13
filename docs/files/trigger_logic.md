## Triggers Introduction

Triggers offer a non-scripting solution to creating your own game logic. Triggers interact with eachother using interface IDs. Think of it like walkie talkies that communicate on a certain frequency.

## Trigger Events

Events will allow you to listen for game events and trigger specific actions accordingly:

| ID | Event | Description |
| - | - | - |
| **00** | **onShoot** | When you shoot your trigger object, the trigger will execute. |
| **01** | **onMelee** | When you knife/melee your trigger object, the trigger action will execute. |
| **02** | **onDamage** | If you do damage to the trigger object in any way(shooting, knifing etc), the trigger action will execute. |
| **03** | **onEnterObject** | As soon as you enter the trigger object, the trigger action for it will execute. |
| **04** | **onDestroy** | As soon as the object gets destroyed, the trigger action will execute. You can set a health to your object so you know how much damage people will need to do to your object to destroy it. |
| **05** | **onRespawn** | Once the object respawns, the trigger action will execute. You can set a respawn timer for each object to control how fast it respawns and more. |
| **06** | **onTimer** | You can set a timer for your trigger object, once the timer runs out the trigger action will execute. |
| **07** | **onProjectile** | On the projectile you set, the trigger action will execute. |
| **08** | **onThrowingMelee** | On the event the melee is thrown, the trigger action will execute. |
| **09** | **onPunch** | If you punch the trigger object (with the fists of the character), the trigger action will execute. |
| **10** | **onHoldMouse** | If you punch the trigger object (with the fists of the character), the trigger action will execute. |
| **11** | **onCollision** | On the collision, the trigger action will execute. |
| **12** | **onStorageEquals** | When the storage equals a specific value, the trigger action will execute. |
| **13** | **onStorageGreater** | When the storage is greater than a specific value, the trigger action will execute. |
| **14** | **onStorageLesser** | When the storage is lesser than a specific value, the trigger action will execute. |
| **15** | **onAIDeath** | On the death of the AI, the trigger will execute. |
| **16** | **onInteractKey** | When the player presses the interact key, the trigger will execute. You can use this for many things, when you press the interact key you can give your players a reward etc. |
| **17** | **onPlayerSpawn** | When the player spawns in the game, the trigger action will execute. |
| **18** | **onPlayerKill** | When the player gets a kill, the trigger action will execute. |
| **19** | **onPlayerDie** | When the player dies, the trigger action will execute. |
| **20** | **onAIDamage** | When the AI damage occurs, the trigger action will execute. |
| **21** | **onNukeStart** | As soon as the nuke starts, the trigger action will execute. |
| **22** | **onNukeEnd** | As soon as the nuke ends, the trigger action will execute. |
| **23** | **onExitObject** | When you exit the object, the trigger action executes. |
| **24** | **onCustomValEquals** | When the specific custom value equals a specific value, the trigger action will execute. |
| **25** | **onCustomValLesser** | When the specific custom value is less than a specific value, the trigger action will execute. |
| **26** | **onGameStart** | As soon as the game starts, the trigger action will execute. |
| **27** | **onObjectiveSwitch** | When the objective switches (Objectives like Hardpoint), the trigger action will execute. |
| **28** | **onPlayerDamage** | The trigger action will execute you on the player damage. |
## Trigger Conditions

Conditions will allow you to execute an action only if a certain condition is met, similary to if statements in KrunkScript:

| ID | Event | Description |
| - | - | - |
| **00** | **None** | No conditions are needed to be met for the action to be executed. |
| **01** | **Player Value** | Requires a specific player value (you can set the player value using triggers) for the action to be executed. |
| **02** | **Current Class** | Requires the person to be on a certain class you decide for the action to properly execute. |
| **03** | **Trigger Value** | Requires the trigger value to be a certain amount for the trigger to be executed. |
| **04** | **Player Count** | Requires players to have a cerian player count number (You can set player count with triggers). |
| **05** | **Global Value** | Requires players to have a cerian global count number (You can set global count with triggers). |
| **06** | **Player has Account** | Requires player to have a registered Krunker account. |
| **07** | **Player has Premium** | Requires player to be subscribed to Krunker Premium. |
| **08** | **Player is Verified** | Requires player to have verification status in-game. |
| **09** | **Player is Partner** | Requires player to have partner status in-game. |
## Trigger Actions

Execute certain actions to interact with the game & players:

| ID | Event | Description |
| - | - | - |
| **0** | **Give Player Score** | Gives player an amount of score that you choose. For example, when someone hits a block, they can get rewarded 25 points. |
| **1** | **Kill Player** | Kills the player as soon as the trigger action is executed. |
| **2** | **Respawn Player** | Respawns the player once the trigger action is executed. |
| **3** | **Change Player Health** | Adjusts the players health. |
| **4** | **Destroy Interface** | As soon as this trigger is executed, the interface you set will be destroyed. |
| **5** | **Toggle Interface Gate** | The interface gate is toggled as soon as the trigger is executed.  |
| **6** | **Change Interface Health** | The interfaces health changes when the trigger is executed. |
| **7** | **Teleport Player To Interface** | Once the trigger is executed, the player is teleported to the interface you set with an ID. |
| **8** | **Change Interface Deposit Box Amount** | Changes the value of the interface deposit box amount. |
| **9** | **Kill Opposing Team** | Kills all of the players on the opposing team. Example of this would be a buyable tactic in a TDM game, where you can wipe out the entirety of the other team. |
| **10** | **Respawn Opposing Team** | Respawns all of the people on the opposing team. |
| **11** | **Respawn Destructible Interface** | Respawns the destructible interface. |
| **12** | **Toggle Destructible Interface** | Toggles the destructible interface. |
| **13** | **Set Player Score** | Once the trigger is executed, the score you set will be applied to the player. For example, if you fall of the map and hit a trigger box, your score can be set to 0. |
| **14** | **Broadcast Sound** | Sends a sound to the entire map, so everyone playing can hear. |
| **15** | **Clear Player Loadout** | Once the trigger is executed, the player's loadout is cleared. This can be used in something like a battle royale map for clearing someone's loadout if they make a fatal mistake. |
| **16** | **Broadcast Message** | once the trigger action is executed a message will broadcast a message to the entire lobby so everyone can see. This could be used in a game where players work together to accomplish something, and messages are broadcast when the entire lobby accomplishes something. |
| **17** | **Send Message** | Once this trigger action is executed, a message will be broadcasted only to the player to see. |
| **18** | **Swap Player Team** | Once this trigger is executed, the players team is swapped to the opposing team. |
| **19** | **Set Player Team** | This trigger is used to set the players team. This would be good in a zombies map where you can set someone to be either a zombie or human at the start. |
| **20** | **Round Time** | This trigger action allows you to set the round time. |
| **21** | **Reset Interface** | This trigger action completely resets the interface you set. |
| **22** | **End Round** | This trigger action ends the round of your lobby. This can be used for many things, such as a race mode where you can end the round of the lobby once a player crosses a certain point. |
| **23** | **Refill Player Knife** | This will refill the player's knife. For example if you throw your knife and you have no more knives to throw, you can hit the trigger and the player's knife will be refilled back to what it originally was. |
| **24** | **Destroy Self** | Once this trigger action is executed, the trigger will destruct itself. |
| **25** | **Increase Interface Storage** | This trigger action increases the interface storage by the amount you set. |
| **26** | **Decrease Interface Storage** | This trigger action decreases the interface storage by the amount you set. |
| **27** | **Set Interface Storage** | This trigger action sets the interface storage by the amount you set. |
| **28** | **Reset Interface Storage** | This trigger action completely resets the interface storage. |
| **29** | **Broadcast Popup** | Once this trigger is executed, a popup is sent to the entire lobby for everyone playing the game to see. |
| **30** | **Send Popup** | Once this trigger is executed, a popup is just sent to the specific player only. |
| **31** | **Jump Scare** | If you would like to scare the people that play your map at a certain point, use this trigger. |
| **32** | **Reward KR** | If you ever wanted to reward users KR from your map, use this trigger. You will need KR in your maps bank first, then use this trigger and depending on the action you set for this to be triggered, it will give the user the amount of KR you decide. |
| **33** | **Clear Player Checkpoints** | This trigger action clears all of the players checkpoints. This would be useful in Parkour maps if you want to add a place for someone to restart the entire map without checkpoints. |
| **34** | **Send Sound** | This trigger sends a sound throughout the entire map, you can change the sound that is sent in the editor panel. |
| **35** | **Explosion** | When this trigger is put in, an explosion will occur. This would be good if you wanted something like an oil tank and when the player shoots it, it explodes. |
| **36** | **Spawn AI** | This trigger will spawn AI/Bots in your map, you would first need to create AI objects in the AI panel for this to work. |
| **37** | **Set Player Value** | This trigger action sets the value number for the player to the specific number you enter. |
| **38** | **Inc/Dec Player Value** | This trigger action will specifically increase or decrease the player value by the amount you set when the action is executed. |
| **39** | **Play Animation** | Plays a specific animation when the trigger is executed. For example, you can make a nuke animation that only animates once the player Nukes. |
| **40** | **Teleport Player to Path Node** | This trigger action teleports the player to the path node that you have set. |
| **41** | **Teleport Destructible Interface to Path Node** | This trigger action teleports the descructible interface to the path node that you have set. |
| **42** | **Reset Destructible Interface Position** | Resets the position of the destructible interface position. |
| **43** | **Set Interface Trigger Value** | Once the trigger is executed, the interface trigger value will be set to the value you put in. |
| **44** | **Inc/Dec Interface Trigger Value** | Once the trigger is executed, the interface trigger value will be either increased or decreased depending on what you put in. |
| **45** | **Set Trigger Value (Self)** | Once the trigger is executed, the interface trigger value will be set to the value you put in for yourself. |
| **46** | **Inc/Dec Trigger Value (Self)** | Once the trigger is executed, the interface trigger value will be either increased or decreased depending on what you put in for yourself. |
| **47** | **Change Class** | Changes the persons class once the trigger action is executed. |
| **48** | **Set Interface Deposit Box Amount** | Sets the value of the interface deposit box amount once the trigger action is executed. |
| **49** | **Save Data** | Saves the data once the trigger action is executed.
| **50** | **Change Primary Weapon** | Changes the primary weapon of the player (This is the primary weapon, not the secondary or melee). |
| **51** | **Change Secondary Weapon** | Changes the Secondary weapon of the player (This is the secondary weapon, not the primary or melee). |
| **52** | **Set Global Value** | You can set the global value to a specific number. Global value is displayed to the entire lobby. |
| **53** | **Change Global Value** | This trigger action changes the Global value. Global values are displayed to the entire lobby. |
| **54** | **Stop Sound** | Stops the specific sound by the ID you set in Action value. |
| **55** | **Show/Hide GUI Element (All)** | This will show or hide a specific GUI element once the trigger action is executed for the entire lobby (so the UI changes for everyone). You have to set the GUI element a ID, then put that same ID for the trigger to specifically target the GUI element you want. |
| **56** | **Show/Hide GUI Element (Player)** | Once this trigger action is executed, the GUI element is either shown or hidden just for the specific player that the trigger applied too. |
| **57** | **Load Data** | Loads the data when the trigger action is executed. |
| **58** | **Custom Action** | Executes a custom action once the trigger action is executed. |
| **59** | **Change Ambient Sound** | Changes the game's ambient sound when action is executed. |
| **60** | **Play Animation (Self)** | Plays a custom animation for itself on execution (styling must use a .gltf custom asset). |
| **61** | **Give Effect** | Gives the player a selected Effect upon execution. |
| **62** | **Give Random Effect** | Gives the player a randomized Effect upon execution. |
| **63** | **Play Video Ad** | Plays a full-screen video ad on execution (can only be called every 5 mins). |

## Triggers & Scripts

Triggers and [Scripts](./files/scripting?id=introduction) can interact with eachother. 
For example you can call a KrunkScript action from a Trigger Event.
___

Using Triggers to execute custom script action:

```krunkscript
Custom Action 58):(
    playerID, # player id passed in automatically
    customParam # str custom string you can pass in
)
```

When this action executes, it will automatically call the onCustomTrigger hook action in the server script:

In order to call a custom action from a Trigger Object, make sure you declare it as a public action:

<p class="hidep"><strong class="server-side">server-side</strong></p>

```krunkscript
public action onCustomTrigger(str playerID, str customParam) {
    # do something
}
```

___

<div class="disBar">Currently Disabled</div>

**Using KrunkScript** to exectute a Trigger Action:

```krunkscript
GAME.TRIGGERS.execute(
    ID, # num action ID,
    args # other arguments depends on action
);
```
