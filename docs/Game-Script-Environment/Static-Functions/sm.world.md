---
sidebar_position: 52
title: sm.world
hide_title: true
sidebar-label: 'sm.world'
---

<br></br>

## sm.world

**Associated object type:** [World](/docs/Game-Script-Environment/Userdata/World)

The <strong>world</strong> API handles the creation and destruction of worlds.

A world contains the terrain and simulates the physics environment in which other game objects can exist.

[Constants](/docs/Game-Script-Environment/Constants#smworldids)

## Functions

### createWorld

```lua
sm.world.createWorld( filename, classname, terrainParams, seed )
```
<code>Server-Only</code> <br></br>

Creates a new world object. Can only be called from inside the Game script environment.

<strong>Arguments:</strong> <br></br>

- <code>filename</code> [<strong> string </strong>]: The path to the world script file.
- <code>classname</code> [<strong> string </strong>]: The name of the world script class name.
- <code>terrainParams</code> [<strong> any </strong>]: Any extra terrain parameters. Optional.
- <code>seed</code> [<strong> int </strong>]: The world seed. Defaults to 0.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The created world.

---

### getCurrentWorld

```lua
sm.world.getCurrentWorld()
```

Get the world that the scripted object is in.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The current world.

---

### getDirtySpheres

```lua
sm.world.getDirtySpheres( position, radius )
```

Returns an array of tables representing spheres where something has changed in the world.

The optional position and radius parameters will construct a sphere, and use it as a filter to only show results that intersect that sphere.

<strong>Arguments:</strong> <br></br>

- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The position of the sphere. Optional.
- <code>radius</code> [<strong> number </strong>]: The size of the sphere. Optional.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: A table containing tables of changed spheres. See structure below.

```lua title="Table Structure"
{
	{
		center = vec3,	--The sphere's position
		radius = number	--The sphere's size.
	}
}
```

---

### getLegacyCreativeWorld

```lua
sm.world.getLegacyCreativeWorld()
```
<code>Server-Only</code> <br></br>

Gets a previously saved creative world.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world (id 0) if it exists in the database or nil.

---

### loadWorld

```lua
sm.world.loadWorld( world )
```
<code>Server-Only</code> <br></br>

Loads a previously created world. <br></br>
Can only be called from inside the Game script environment.

<strong>Arguments:</strong> <br></br>

- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the world was loaded successfully or not.

---








