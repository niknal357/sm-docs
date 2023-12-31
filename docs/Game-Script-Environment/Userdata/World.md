---
sidebar_position: 31
title: World
hide_title: true
sidebar-label: 'World'
---

<br></br>

## World

**Associated namespace:** [sm.world](/docs/Game-Script-Environment/Static-Functions/sm.world)

A userdata object representing a <strong>world</strong> in the game.

<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>World</code> == <code>World</code> | Checks if two instances of <code>World</code> refer to the same <code>World</code>. |

<strong>Values:</strong>

- <code>id</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The world's id.


## Functions

### destroy

```lua
world:destroy()
```
<code>Server-Only</code> <br></br>

Destroys the world.
Only available in the game script environment.

<strong>Arguments:</strong> <br></br>

- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world.

---

### getId

```lua
world:getId()
```

Returns the world's id.

<strong>Arguments:</strong> <br></br>

- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The id.

---

### isIndoor

```lua
world:isIndoor()
```

Returns whether the world is an indoor world.

<strong>Arguments:</strong> <br></br>

- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the world is an indoor world or not.

---

### loadCell

```lua
world:loadCell( x, y, player, callback, params, ref )
```
<code>Server-Only</code> <br></br>

Load a cell for player. <br></br>
The cell will stay loaded until the player steps into the cell, <br></br>
or the cell is released with <code>releaseCell</code> (and no player is close enough to load the cell).

The callback parameters are ( world, x, y, player, params, handle )

<strong>The callback receives:</strong> <br></br>

- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world.
- <code>x</code> [<strong> int </strong>]: The cell's X position.
- <code>y</code> [<strong> int </strong>]: The cell's Y position.
- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player that was loaded for.
- <code>params</code> [<strong> any </strong>]: Params passed to <code>loadCell</code>.
- <code>handle</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/LoadCellHandle"> LoadCellHandle </a> </strong>]: The cell's <code>LoadCellHandle</code>, for releasing the cell.

<strong>Arguments:</strong> <br></br>

- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world.
- <code>x</code> [<strong> int </strong>]: The cell's X position.
- <code>y</code> [<strong> int </strong>]: The cell's Y position.
- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player to load for. Optional.
- <code>callback</code> [<strong> string </strong>]: The Lua function to call when the cell is loaded. Optional.
- <code>params</code> [<strong> any </strong>]: A parameter object passed to the callback function. Optional.
- <code>ref</code> [<strong> ref </strong>]: The ScriptRef for the callback object. Optional.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The handle to use when explicitly releasing the cell.

---

### reloadCell

```lua
world:reloadCell( x, y, callback, ref )
```

Reloads a cell.

<strong>The callback receives:</strong> <br></br>

- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world.
- <code>x</code> [<strong> int </strong>]: The cell's X position.
- <code>y</code> [<strong> int </strong>]: The cell's Y position.
- <code>result</code> [<strong> int </strong>]: The result. 0 = Not reloaded due to cell being inactive. 1 = Successfully reloaded.

<strong>Arguments:</strong> <br></br>

- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world.
- <code>x</code> [<strong> int </strong>]: The cell's X position.
- <code>y</code> [<strong> int </strong>]: The cell's Y position.
- <code>callback</code> [<strong> string </strong>]: The Lua function to call when the cell is reloaded. Optional.
- <code>ref</code> [<strong> ref </strong>]: The ScriptRef for the callback object. Optional.

---

### setTerrainScriptData

```lua
world:setTerrainScriptData( data )
```

Set data to pass on to the terrain generation script. <br></br>
If no data is set, the terrain generation script receives the same data as the world script.

<strong>Arguments:</strong> <br></br>

- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world.
- <code>data</code> [<strong> any </strong>]: Any data, available in the terrain script as parameter 6 in the create callback.

---

### terrainSphereModification

```lua
world:terrainSphereModification( position, radius, strength )
```

Modifies destructable terrain with a sphere shape.

<strong>Arguments:</strong> <br></br>

- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The world position of the sphere.
- <code>radius</code> [<strong> number </strong>]: The radius of the sphere.
- <code>strength</code> [<strong> number </strong>]: The strength of the modification (Optional).

---








