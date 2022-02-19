# Player object

```krunkscript
{
    # Methods
    player.playAnim("Jump");        # play animation on player
    player.disableDefault("jump");  # str disables input behaviours (client & server)


    # Attributes
    player.position.x = 10;        # num set x pos
    player.rotation.x = 0.3;       # num set x direction
    player.velocity.x = 0.1;       # num set x velocity

    player.sid;                    # num short id
    player.id;                     # str id
    player.username;               # str username (can be set using krunker premium)
    player.accountName;            # str account name (actual name)
    player.accountID;              # str profile id

    player.health = 10;            # num health
    player.score = 5;              # num score (server-side)
    player.team = 1;               # num team (server-side)
    player.visible = false;        # bool visible

    player.classIndex;             # num returns class ID
    player.loadoutIndex;           # num weapon id of held weapon

    player.defaultMovement              # bool disables player movement
    player.defaultVelocity = false;     # bool disables player velocity (client & server)
    player.defaultRotation = false;     # bool disables player rotations (client & server)
    player.disableShooting = true;      # bool disables shooting & reloading (client & server)
    player.disableMelee = true;         # bool disables melee (client & server)

    player.active;                 # bool spawned in (not when spectator/dead)
    player.onWall;                 # bool touching a wall
    player.onGround;               # bool touching the ground
    player.onTerrain;              # bool touching terrain
    player.isCrouching;            # bool is crouching
    player.isYou;                  # bool player reference is self (client-side)
    player.assetID = "325253";     # update player model
}
```