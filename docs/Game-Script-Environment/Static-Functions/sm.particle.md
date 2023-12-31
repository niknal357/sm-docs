---
sidebar_position: 34
title: sm.particle
hide_title: true
sidebar-label: 'sm.particle'
---

<br></br>

## sm.particle

The <strong>particle</strong> api allows you to create particle effects at a position.

If you require more control or complexity, please see the [effect](/docs/Game-Script-Environment/Userdata/Effect) api.

## Functions

### createParticle

```lua
sm.particle.createParticle( particle, position, rotation, color )
```
<code>Client-Only</code> <br></br>

Creates a particle effect at a given position and rotation.

:::info note
If you start a looping particle effect using this method, the only way to get rid of it is by reloading the save.
:::

<strong>Arguments:</strong> <br></br>

- <code>particle</code> [<strong> string </strong>]: The particle name.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The position.
- <code>rotation</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The rotation (defaults to none).
- <code>color</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Color"> Color </a> </strong>]: The color (defaults to white).

---














