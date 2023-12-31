---
sidebar_position: 6
title: sm.body
hide_title: true
sidebar-label: 'sm.body'
---

<br></br>

## sm.body

**Associated object type:** [Body](/docs/Game-Script-Environment/Userdata/Body)

A <strong>body</strong> is a collection of [shapes](/docs/Game-Script-Environment/Userdata/Shape) that are built together. <br></br>
Bodies can be connected to other bodies using [joints](/docs/Game-Script-Environment/Userdata/Joint) such as the bearing.

## Functions

### createBody

```lua
sm.body.createBody( position, rotation, isDynamic )
```
<code>Server-Only</code> <br></br>

Creates a new body.

<strong>Arguments:</strong> <br></br>

- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The body's world position.
- <code>rotation</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The body's world rotation (optional).
- <code>isDynamic</code> [<strong> bool </strong>]: Whether the body is dynamic or static. Defaults to dynamic.

---

### getAllBodies

```lua
sm.body.getAllBodies()
```
<code>Server-Only</code> <br></br>

Returns a table of all bodies in the world.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of bodies.

---

### getCreationsFromBodies

```lua
sm.body.getCreationsFromBodies( bodies )
```

Returns an array of tables containing bodies grouped by creation.

A creation includes all bodies connected by [joints](/docs/Game-Script-Environment/Userdata/Joint), etc.

<strong>Arguments:</strong> <br></br>

- <code>bodies</code> [<strong> table </strong>]: The bodies to get the creations of.

<strong>Return:</strong> <br></br>

- [<strong> table </strong>]: The table array containing tables of all the bodies, grouped by creation. 

---






