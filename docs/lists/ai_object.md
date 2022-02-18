# AI object data

```krunkscript
{
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