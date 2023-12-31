---
sidebar_position: 47
title: sm.unit
hide_title: true
sidebar-label: 'sm.unit'
---

<br></br>

## sm.unit

**Associated object type:** [Unit](/docs/Game-Script-Environment/Userdata/Unit)

Unit creation and management.

## Functions

### createUnit

```lua
sm.unit.createUnit( uuid, feetPos, yaw, data, pitch )
```
<code>Server-Only</code> <br></br>

Creates a new unit.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The character type uuid.
- <code>feetPos</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The feet position of the unit, at the spawn position.
- <code>yaw</code> [<strong> number </strong>]: The initial yaw. Defaults to 0.
- <code>data</code> [<strong> any </strong>]: Extra parameters for the unit. Optional.
- <code>pitch</code> [<strong> number </strong>]: The initial pitch. Defaults to 0.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The created unit.

---

### getAllUnits

```lua
sm.unit.getAllUnits()
```
<code>Server-Only</code> <br></br>

Returns a table of all units in the world.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of units.

---


