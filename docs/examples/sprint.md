# Sprint script example

```krunkscript
# Special thanks to Steakfisher for submitting this example

# Add this both on the server and client side
public action onPlayerUpdate(str id, num delta, obj inputs) {
	obj player = GAME.PLAYERS.findByID(id);

	# Runs if player holds courch key and is on ground
	if ((bool) inputs.crouch && (bool) player.onGround) {
		# Apply speed to the velocity
		num speed = 0.0002 * delta;

		# Apply x and z speed by an amount dependant on the angle
		(num) player.velocity.x += speed * -Math.sin((num) player.rotation.x);
		(num) player.velocity.z += speed * -Math.cos((num) player.rotation.x);
    }
}

public action onPlayerSpawn(str id) {
	obj player = GAME.PLAYERS.findByID(id);
	player.disableDefault("crouch");
}
```