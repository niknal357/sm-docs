---
sidebar_position: 24
title: sm.harvestable
hide_title: true
sidebar-label: 'sm.harvestable'
---

<br></br>

## sm.harvestable

**Associated object type:** [Harvestable](/docs/Game-Script-Environment/Userdata/Harvestable)

## Functions

### create

```lua
sm.harvestable.create( uuid, position, rotation, slopeNormal )
```
<code>Server-Only</code> <br></br>

Creates a new harvestable.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The uuid of the harvestable.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The harvestable's world position.
- <code>rotation</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The harvestable's world rotation. Defaults to <code>sm.quat.identity()</code>.
- <code>slopeNormal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The harvestable's slope normal, for "skew" and "rotate" slope settings. Defaults to Z axis.

<strong>Returns:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The created harvestable.

---

### createHarvestable

```lua
sm.harvestable.createHarvestable( uuid, position, rotation, slopeNormal )
```
<code>Server-Only</code> <br></br>

Creates a new harvestable.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The uuid of the harvestable.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The harvestable's world position.
- <code>rotation</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The harvestable's world rotation. Defaults to <code>sm.quat.identity()</code>.
- <code>slopeNormal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The harvestable's slope normal, for "skew" and "rotate" slope settings. Defaults to Z axis.

<strong>Returns:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The created harvestable.

---