---
sidebar_position: 15
title: Lift
hide_title: true
sidebar-label: 'Lift'
---

<br></br>

## Lift

A userdata object representing a <strong>lift</strong> in the game.

<strong>Values:</strong>

- <code>id</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The lift's id.


- <code>level</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The lift's level.


- <code>worldPosition</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>] <br></br>

	- <code>Get</code>: The lift's world position.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>Lift</code> == <code>Lift</code> | Checks if two instances of <code>Lift</code> refer to the same <code>Lift</code>. |

## Functions

### destroy

```lua
lift:destroy()
```
<code>Server-Only</code> <br></br>

Destroys the lift.

<strong>Arguments:</strong> <br></br>

- <code>lift</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Lift"> Lift </a> </strong>]: The lift.

---

### getId

```lua
lift:getId()
```

Returns the lift's id.

<strong>Arguments:</strong> <br></br>

- <code>lift</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Lift"> Lift </a> </strong>]: The lift.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The lift's id.

---

### getLevel

```lua
lift:getLevel()
```

Returns the lift's level.

<strong>Arguments:</strong> <br></br>

- <code>lift</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Lift"> Lift </a> </strong>]: The lift.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The lift's level.

---

### getWorldPosition

```lua
lift:getWorldPosition()
```

Returns the lift's world position.

<strong>Arguments:</strong> <br></br>

- <code>lift</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Lift"> Lift </a> </strong>]: The lift.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The lift's world position.

---

### hasBodies

```lua
lift:hasBodies()
```

Returns whether there is a body on the lift.

<strong>Arguments:</strong> <br></br>

- <code>lift</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Lift"> Lift </a> </strong>]: The lift.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the lift has bodies or not.

---















