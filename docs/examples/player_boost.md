# Player sprint script example

```krunkscript
# Client Side

obj player = {};

public action onPlayerSpawn(str id) {
	player = GAME.PLAYERS.getSelf(); # Assigning player to player object 
}

public action onPlayerUpdate(str id, num delta, obj inputs) {
	if(!!inputs.lMouse){ # if holding left mouse button
		num xComp = 0.0002 * delta * (Math.sin((num)player.rotation.x)); # Resolving player rotation vector into x component
		num zComp = 0.0002 * delta * (Math.cos((num)player.rotation.x));
		(num) player.velocity.x -= xComp; # Subtracting it from player x vel to add it, its weird
		(num) player.velocity.z -= zComp;
    } # registerSyncValues isn't used here as there are no custom variables which movement depends on
}
```

```krunkscript
# Server Side

public action onPlayerUpdate(str id, num delta, obj inputs) {
	obj player = GAME.PLAYERS.findByID(id);
	if(!!inputs.lMouse){
		num xComp = 0.0002 * delta * (Math.sin((num)player.rotation.x));
		num zComp = 0.0002 * delta * (Math.cos((num)player.rotation.x));
		(num) player.velocity.x -= xComp;
		(num) player.velocity.z -= zComp;
    }
}
```