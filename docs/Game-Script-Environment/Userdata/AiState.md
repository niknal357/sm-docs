---
sidebar_position: 1
title: AiState
hide_title: true
sidebar-label: 'AiState'
---

<br></br>

## AiState
A userdata object representing an <strong>AI state</strong> belonging to a [Unit](/docs/Game-Script-Environment/Userdata/Unit).

This library can only be used on the <strong>server</strong>.

<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>AiState</code> == <code>AiState</code> | Checks if two instances of <code>AiState</code> refer to the same <code>AiState</code>. |


## Functions

### getFacingDirection

```lua
AiState:getFacingDirection()
```
<code>Server-Only</code> <br></br>

Returns the state's facing direction.

<strong>Arguments:</strong> <br></br>

- <code>AiState</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/AiState"> AiState </a> </strong>]: The state.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The direction.

---

### getMovementDirection

```lua
AiState:getMovementDirection()
```
<code>Server-Only</code> <br></br>

Returns the state's movement direction.

<strong>Arguments:</strong> <br></br>

- <code>AiState</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/AiState"> AiState </a> </strong>]: The state.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The direction.

---

### getMovementType

```lua
AiState:getMovementType()
```
<code>Server-Only</code> <br></br>

Returns a string describing the state's movement type.

Movement type can be "stand", "walk", "sprint" or "crouch".

<strong>Arguments:</strong> <br></br>

- <code>AiState</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/AiState"> AiState </a> </strong>]: The state.

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The movement type.

---

### getWantsJump

```lua
AiState:getWantsJump()
```
<code>Server-Only</code> <br></br>

Check if the state wants to jump.

<strong>Arguments:</strong> <br></br>

- <code>AiState</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/AiState"> AiState </a> </strong>]: The state.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: True when the state wants to jump.

---

### isDone

```lua
AiState:isDone()
```
<code>Server-Only</code> <br></br>

Checks if the AI state is done.

Returns true when the state is done, and a string describing the state's current situation.

Can be used to determine if another state is allowed to be started.

<strong>Arguments:</strong> <br></br>

- <code>AiState</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/AiState"> AiState </a> </strong>]: The state.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: True if the state is done.
- [<strong> string </strong>]: The state's current situation.

---

### onFixedUpdate

```lua
AiState:onFixedUpdate( dt )
```
<code>Server-Only</code> <br></br>

Updates the state by adding delta time progression.

Should be called once every game tick while the state is active.

<strong>Arguments:</strong> <br></br>

- <code>AiState</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/AiState"> AiState </a> </strong>]: The state.
- <code>dt</code> [<strong> number </strong>]: The delta time.

---

### onUnitUpdate

```lua
AiState:onUnitUpdate( dt )
```
<code>Server-Only</code> <br></br>

Updates the state by adding delta time progression.

Should be called once every unit update, by the unit that owns the state, while the state is active.

<strong>Arguments:</strong> <br></br>

- <code>AiState</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/AiState"> AiState </a> </strong>]: The state.
- <code>dt</code> [<strong> number </strong>]: The delta time.

---

### start

```lua
AiState:start()
```
<code>Server-Only</code> <br></br>

Starts the state.

<strong>Arguments:</strong> <br></br>

- <code>AiState</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/AiState"> AiState </a> </strong>]: The state.

---

### stop

```lua
AiState:stop()
```
<code>Server-Only</code> <br></br>

Stops the state.

<strong>Arguments:</strong> <br></br>

- <code>AiState</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/AiState"> AiState </a> </strong>]: The state.

---