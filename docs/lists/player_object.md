# Player object

:::tip
For player class loadout modifications, you can use the [quick weapon id list](/lists/weapon_ids.html)
:::

:::warning
- player.assetID requires `player type` in  `class config > player asset` to be set to `model`
- The player object gets reset every respawn, attributes will have to be reapplied
- inView always returns false
:::

```krunkscript
{
    # Methods
    player.playAnim("Jump");       # str play animation on player

    player.respawn();              # void force respawn of player

    player.disableDefault("jump"); # str disables input behaviours (client & server)

    player.registerSyncValues("hasDoubleJump")     # str register player attributes to sync with server prediction
    player.deregisterSyncValues("hasDoubleJump")   # str deregister player attributes to sync with server prediction

    player.removeMelee();          # void remove melee item from player
    player.removePrimary();        # void remove primary item from player
    player.removeSecondary();      # void remove secondary item from player

    player.clearLoadout();         # void clear loadout of player
    player.changePrimary(0);       # void change primary item slot of player
    player.changeSecondary(0);     # void change secondary item slot of player
    player.giveWeapon(0);          # void give player weapon (automatically assigns primary/secondary)

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
    player.visible = false;        # bool visible
    player.team;                   # num team (read-only)
    player.ammo;                   # num ammo count (read-only)

    player.classIndex;             # num returns class ID
    player.loadoutIndex;           # num weapon slot ID

    player.defaultMovement = false;     # bool disables player movement
    player.defaultVelocity = false;     # bool disables player velocity (client & server)
    player.defaultRotation = false;     # bool disables player rotations (client & server)
    player.disableShooting = true;      # bool disables shooting & reloading (client & server)
    player.disableMelee = true;         # bool disables melee (client & server)

    player.active;                 # bool spawned in (not when spectator/dead)
    player.inView;                 # bool player is in view of self
    player.onWall;                 # bool touching a wall
    player.onGround;               # bool touching the ground
    player.onTerrain;              # bool touching terrain
    player.isCrouching;            # bool is crouching
    player.isYou;                  # bool player reference is self (client-side)
    player.assetID = "325253";     # update player model
}
```