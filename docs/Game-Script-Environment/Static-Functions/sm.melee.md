---
sidebar_position: 31
title: sm.melee
hide_title: true
sidebar-label: 'sm.melee'
---

<br></br>

## sm.melee

Information about melee attacks is located in <code>/Data/Melee/attacks.json</code>.

## Functions

### meleeAttack

```lua
sm.melee.meleeAttack( name, damage, origin, directionRange, source, delay, power )
```

Launches a melee attack.

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string/uuid </strong>]: The name or UUID of the attack. (<code>name</code> is deprecated, use uuid instead)
- <code>damage</code> [<strong> int </strong>]: The damage the attack will inflict.
- <code>origin</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The position of the attack.
- <code>directionRange</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The direction and range of the attack.
- <code>source</code> [<strong> player/unit </strong>]: The source of the attack.
- <code>delay</code> [<strong> int </strong>]: The number of ticks before launching the attack.
- <code>power</code> [<strong> number </strong>]: The knockback power.

---


