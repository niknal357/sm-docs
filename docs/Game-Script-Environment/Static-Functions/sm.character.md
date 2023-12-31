---
sidebar_position: 11
title: sm.character
hide_title: true
sidebar-label: 'sm.character'
---

<br></br>

## sm.character

**Associated object type:** [Character](/docs/Game-Script-Environment/Userdata/Character)

A <strong>character</strong> is the physical body of a living entity in the world. Both <strong>players</strong> and <strong>units</strong> may control a character.

## Functions

### createCharacter

```lua
sm.character.createCharacter( player, world, position, yaw, pitch )
```
<code>Server-Only</code> <br></br>

Creates a new character in a world.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player controlling the character.
- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world the character is created in.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The world position of the character.
- <code>yaw</code> [<strong> number </strong>]: The initial yaw of the character (Optional).
- <code>pitch</code> [<strong> number </strong>]: The initial pitch of the character (Optional).

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>]: The created character.

---

### preloadRenderables

```lua
sm.character.preloadRenderables( renderables )
```
<code>Client-Only</code> <br></br>

Pre-loads renderable data to be used by the character. <br></br>
This eliminates excessive loading during run time.

<strong>Arguments:</strong> <br></br>

- <code>renderables</code> [<strong> table </strong>]: The table of renderables.

---




















