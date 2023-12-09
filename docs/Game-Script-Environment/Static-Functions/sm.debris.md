---
sidebar_position: 17
title: sm.debris
hide_title: true
sidebar-label: 'sm.debris'
---

<br></br>

## sm.debris

<strong>Debris</strong> are visual objects that have no impact on any other object.

## Functions

### createDebris

```lua
sm.debris.createDebris( uuid, position, rotation, velocity, angularVelocity, color, time )
```
<code>Client-Only</code> <br></br>

Create visual debris of a [shape](/docs/Game-Script-Environment/Userdata/Shape) from its [uuid](/docs/Game-Script-Environment/Userdata/Uuid), that collides with world objects but does not have an impact on them.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The shape uuid.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The position.
- <code>rotation</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The rotation.
- <code>velocity</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The linear velocity.
- <code>angularVelocity</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The angular velocity in radians per second around the axes (x,y,z). Defaults to zero.
- <code>color</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Color"> Color </a> </strong>]: The color. Defaults to the shape's default color.
- <code>time</code> [<strong> number </strong>]: The time after which the debris disappears. Defaults to 10 seconds.

---





















