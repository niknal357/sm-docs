---
sidebar_position: 27
title: Unit
hide_title: true
sidebar-label: 'Unit'
---

<br></br>

## Unit

**Associated namespace:** [sm.unit](/docs/Game-Script-Environment/Static-Functions/sm.unit)

A userdata object representing a <strong>unit</strong> in the game.

<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>Unit</code> == <code>Unit</code> | Checks if two instances of <code>Unit</code> refer to the same <code>Unit</code>. |

<strong>Values:</strong>

- <code>character</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>] <br></br>

	- <code>Get</code>: (Server-Only) The unit's character.


- <code>eyeHeight</code> [<strong> number </strong>] <br></br>

	- <code>Set</code>: (Server-Only) Sets the unit's eye height.


- <code>id</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: (Server-Only) The unit's id.


- <code>publicData</code> [<strong> table </strong>] <br></br>

	- <code>Get</code>: (Server-Only) The unit's server public data.
	- <code>Set</code>: (Server-Only) Sets the unit's server public data.


- <code>visionFrustum</code> [<strong> table </strong>] <br></br>

	- <code>Set</code>: (Server-Only) Sets the unit's vision frustum.
	```lua
	self.unit.visionFrustum = {
		{ 3.0, math.rad( 80.0 ),  math.rad( 80.0 ) },
		{ 20.0, math.rad( 40.0 ), math.rad( 35.0 ) },
		{ 40.0, math.rad( 20.0 ), math.rad( 20.0 ) }
	}
	```


## Functions

### createState

```lua
unit:createState( name )
```
<code>Server-Only</code> <br></br>

Creates an AI state from a name (See [AiState](/docs/Game-Script-Environment/Userdata/AiState)).

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.
- <code>name</code> [<strong> string </strong>]: The name of the state.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/AiState"> AiState </a> </strong>]: The created AI state.

---

### destroy

```lua
unit:destroy()
```
<code>Server-Only</code> <br></br>

Destroys the unit.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.

---

### getCharacter

```lua
unit:getCharacter()
```
<code>Server-Only</code> <br></br>

Returns the unit's character.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.

<strong>Return:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>]: The unit's character.

---

### getCurrentFacingDirection

```lua
unit:getCurrentFacingDirection()
```
<code>Server-Only</code> <br></br>

Returns the unit's current facing direction.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.

<strong>Return:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The unit's facing direction.

---

### getCurrentMovementDirection

```lua
unit:getCurrentMovementDirection()
```
<code>Server-Only</code> <br></br>

Returns the unit's current movement direction.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.

<strong>Return:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The unit's movement direction.

---

### getId

```lua
unit:getId()
```
<code>Server-Only</code> <br></br>

Returns the unit's id.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.

<strong>Return:</strong> <br></br>

- [<strong> int </strong>]: The unit's id.

---

### getPublicData

```lua
unit:getPublicData()
```
<code>Server-Only</code> <br></br>

Returns the unit's server public data.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.

<strong>Return:</strong> <br></br>

- [<strong> table </strong>]: The unit's server public data.

---

### sendCharacterEvent

```lua
unit:sendCharacterEvent( event )
```
<code>Server-Only</code> <br></br>

Sends an event to the unit's character script.

The event is received by the [client_onEvent](/docs/Game-Script-Environment/Classes/CharacterClass#onevent) callback in the character script.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.
- <code>event</code> [<strong> string </strong>]: The event.

---

### setFacingDirection

```lua
unit:setFacingDirection( dir )
```
<code>Server-Only</code> <br></br>

Sets the unit's facing direction.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.
- <code>dir</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The direction.

---

### setHearingData

```lua
unit:setHearingData( noiseScale )
```
<code>Server-Only</code> <br></br>

Notifies the unit that it heard a sound.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.
- <code>noiseScale</code> [<strong> number </strong>]: The noise amount.

---

### setMovementDirection

```lua
unit:setMovementDirection( dir )
```
<code>Server-Only</code> <br></br>

Sets the unit's movement direction.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.
- <code>dir</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The direction.

---

### setMovementType

```lua
unit:setMovementType( type )
```
<code>Server-Only</code> <br></br>

Sets the unit's movement type.

Valid types are "stand", "walk", "sprint" and "crouch"

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.
- <code>type</code> [<strong> string </strong>]: The movement type.

---

### setPublicData

```lua
unit:setPublicData( data )
```
<code>Server-Only</code> <br></br>

Sets the unit's server public data.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.
- <code>data</code> [<strong> table </strong>]: The data to set.

---

### setWantsJump

```lua
unit:setWantsJump( state )
```
<code>Server-Only</code> <br></br>

Sets the unit to jump.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.
- <code>state</code> [<strong> bool </strong>]: Whether the unit should jump or not.

---

### setWhiskerData

```lua
unit:setWhiskerData( whiskerCount, maxAngle, startLength, endLength )
```
<code>Server-Only</code> <br></br>

Sets the whisker data for obstacle avoidance.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.
- <code>whiskerCount</code> [<strong> int </strong>]: The whisker count.
- <code>maxAngle</code> [<strong> number </strong>]: The max angle.
- <code>startLength</code> [<strong> number </strong>]: The start length.
- <code>endLength</code> [<strong> number </strong>]: The end length.

---

























