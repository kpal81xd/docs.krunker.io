# Double jump script example

```krunkscript
public action onPlayerSpawn(str id) {
	obj player = GAME.PLAYERS.findByID(id);
	player.doubleJump = false;
	player.singleJump = false;
	player.hasSingleJumped = false;

	player.registerSyncValues("singleJump");
	player.registerSyncValues("hasSingleJumped");
	player.registerSyncValues("doubleJump");
}

public action onPlayerUpdate(str id, num delta, obj inputs) {
	obj player = GAME.PLAYERS.findByID(id);
	
	if ((bool) inputs.jump){
		#Single jump
		if (!(bool) player.singleJump) {
			player.singleJump = true;
		}
		
		#Double jump
		if ((bool) player.hasSingleJumped && !(bool) player.doubleJump) {
			player.velocity.y = 0.082;
			player.doubleJump = true;
		}
	}
	else {
		if ((bool) player.onGround) {
			player.doubleJump = false;
			player.singleJump = false;
			player.hasSingleJumped = false;
		}
		
		if ((bool) player.singleJump) {
			player.hasSingleJumped = true;
		}
	}
}
```