---
sidebar_position: 19
title: Player
hide_title: true
sidebar-label: 'Player'
---

<br></br>

## Player

**Associated namespace:** [sm.player](/docs/Game-Script-Environment/Static-Functions/sm.player)

A userdata object representing a <strong>player</strong> in the game.

<strong>Values:</strong>

- <code>character</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>] <br></br>

	- <code>Get</code>: The player's character.


- <code>clientPublicData</code> [<strong> table </strong>] <br></br>

	- <code>Get</code>: (Client-Only) The player's client public data.
	- <code>Get</code>: (Client-Only) Sets the player's client public data.


- <code>id</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The player's id.


- <code>name</code> [<strong> string </strong>] <br></br>

	- <code>Get</code>: The player's username.


- <code>publicData</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: (Server-Only) The player's server public data.
	- <code>Get</code>: (Server-Only) Sets the player's server public data.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>Player</code> == <code>Player</code> | Checks if two instances of <code>Player</code> refer to the same <code>Player</code>. |


## Functions

### getCarry

```lua
player:getCarry()
```

Returns the carry container of the player.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The player's carry container.

---

### getCarryColor

```lua
player:getCarryColor()
```
<code>Server-Only</code> <br></br>

Returns the color of the shape the player is carrying.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Color"> Color </a> </strong>]: The color of the carried shape.

---

### getCharacter

```lua
player:getCharacter()
```

Returns the player's character.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>]: The player's character.

---

### getClientPublicData

```lua
player:getClientPublicData()
```
<code>Client-Only</code> <br></br>

Returns the player's client public data.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The player's client public data.

---

### getHotbar

```lua
player:getHotbar()
```

Returns the player's hotbar container.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The player's hotbar.

---

### getId

```lua
player:getId()
```

Returns the player's id.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The player's id.

---

### getInventory

```lua
player:getInventory()
```

Returns the player's inventory container.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The player's inventory.

---

### getName

```lua
player:getName()
```

Returns the player's username.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The player's username.

---

### getPublicData

```lua
player:getPublicData()
```
<code>Server-Only</code> <br></br>

Returns the player's server public data.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The player's server public data.

---

### isFemale

```lua
player:isFemale()
```

Returns whether the player is female.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the player is female or not.

---

### isMale

```lua
player:isMale()
```

Returns whether the player is male.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the player is male or not.

---

### placeLift

```lua
player:placeLift( creation, position, level, rotation )
```
<code>Server-Only</code> <br></br>

Places the player's lift.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.
- <code>creation</code> [<strong> table </strong>]: The bodies to place on the lift.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The lift's world position.
- <code>level</code> [<strong> int </strong>]: The lift's level.
- <code>rotation</code> [<strong> int </strong>]: The rotation of the lifted creation.

---

### removeLift

```lua
player:removeLift()
```
<code>Server-Only</code> <br></br>

Removes the player's lift, if it exists.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.

---

### sendCharacterEvent

```lua
player:sendCharacterEvent( event )
```
<code>Server-Only</code> <br></br>

Sends an event to the player's character script.

The event is received by the [client_onEvent](/docs/Game-Script-Environment/Classes/CharacterClass#onevent) callback in the character script.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.
- <code>event</code> [<strong> string </strong>]: The event.

---

### setCharacter

```lua
player:setCharacter( character )
```
<code>Server-Only</code> <br></br>

Sets the player's character.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.
- <code>character</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>]: The character.

---

### setClientPublicData

```lua
player:setClientPublicData( data )
```
<code>Client-Only</code> <br></br>

Sets the player's client public data.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.
- <code>data</code> [<strong> table </strong>]: The data to set.

---

### setPublicData

```lua
player:setPublicData( data )
```
<code>Server-Only</code> <br></br>

Sets the player's server public data.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.
- <code>data</code> [<strong> table </strong>]: The data to set.

---

