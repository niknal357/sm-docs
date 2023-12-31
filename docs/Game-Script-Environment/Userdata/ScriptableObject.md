---
sidebar_position: 23
title: ScriptableObject
hide_title: true
sidebar-label: 'ScriptableObject'
---

<br></br>

## ScriptableObject

**Associated namespace:** [sm.scriptableObject](/docs/Game-Script-Environment/Static-Functions/sm.scriptableObject)

A userdata object representing a <strong>scriptable object</strong>.

<strong>Values:</strong>

- <code>clientPublicData</code> [<strong> table </strong>] <br></br>

	- <code>Get</code>: (Client-Only) The objects's client public data.
	- <code>Set</code>: (Client-Only) Sets the objects's client public data.


- <code>id</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The object's id.


- <code>publicData</code> [<strong> table </strong>] <br></br>

	- <code>Get</code>: (Server-Only) The object's server public data.
	- <code>Set</code>: (Server-Only) Sets the object's server public data.


- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>] <br></br>

	- <code>Get</code>: The object's world.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>ScriptableObject</code> == <code>ScriptableObject</code> | Checks if two instances of <code>ScriptableObject</code> refer to the same <code>ScriptableObject</code>. |

## Functions

### destroy

```lua
scriptableObject:destroy()
```
<code>Server-Only</code> <br></br>

Destroys the object.

<strong>Arguments:</strong> <br></br>

- <code>scriptableObject</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/ScriptableObject"> ScriptableObject </a> </strong>]: The scriptable object.

---

### getClientPublicData

```lua
scriptableObject:getClientPublicData()
```
<code>Client-Only</code> <br></br>

Returns the object's client public data.

<strong>Arguments:</strong> <br></br>

- <code>scriptableObject</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/ScriptableObject"> ScriptableObject </a> </strong>]: The scriptable object.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The objects's client public data.

---

### getId

```lua
scriptableObject:getId()
```

Returns the object's id.

<strong>Arguments:</strong> <br></br>

- <code>scriptableObject</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/ScriptableObject"> ScriptableObject </a> </strong>]: The scriptable object.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The objects's id.

---

### getPublicData

```lua
scriptableObject:getPublicData()
```
<code>Server-Only</code> <br></br>

Returns the object's server public data.

<strong>Arguments:</strong> <br></br>

- <code>scriptableObject</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/ScriptableObject"> ScriptableObject </a> </strong>]: The scriptable object.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The objects's server public data.

---

### getWorld

```lua
scriptableObject:getWorld()
```

Returns the object's world.

<strong>Arguments:</strong> <br></br>

- <code>scriptableObject</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/ScriptableObject"> ScriptableObject </a> </strong>]: The scriptable object.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The objects's world.

---

### setClientPublicData

```lua
scriptableObject:setClientPublicData( data )
```
<code>Client-Only</code> <br></br>

Sets the object's client public data.

<strong>Arguments:</strong> <br></br>

- <code>scriptableObject</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/ScriptableObject"> ScriptableObject </a> </strong>]: The scriptable object.
- <code>data</code> [<strong> table </strong>]: The data to set.

---

### setPublicData

```lua
scriptableObject:setPublicData( data )
```
<code>Server-Only</code> <br></br>

Sets the object's server public data.

<strong>Arguments:</strong> <br></br>

- <code>scriptableObject</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/ScriptableObject"> ScriptableObject </a> </strong>]: The scriptable object.
- <code>data</code> [<strong> table </strong>]: The data to set.

---


