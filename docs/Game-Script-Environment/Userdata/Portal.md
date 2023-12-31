---
sidebar_position: 20
title: Portal
hide_title: true
sidebar-label: 'Portal'
---

<br></br>

## Portal

**Associated namespace:** [sm.portal](/docs/Game-Script-Environment/Static-Functions/sm.portal)

A userdata object representing a <strong>portal</strong> in the game.

<strong>Values:</strong>

- <code>id</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: (Server-Only) The portal's id.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>Portal</code> == <code>Portal</code> | Checks if two instances of <code>Portal</code> refer to the same <code>Portal</code>. |


## Functions

### getContentsA

```lua
portal:getContentsA()
```
<code>Server-Only</code> <br></br>

Returns the contents of opening A.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of characters and bodies in opening A.

---

### getContentsB

```lua
portal:getContentsB()
```
<code>Server-Only</code> <br></br>

Returns the contents of opening B.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of characters and bodies in opening B.

---

### getId

```lua
portal:getId()
```
<code>Server-Only</code> <br></br>

Returns the portal's id.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The portal's id.

---

### getPositionA

```lua
portal:getPositionA()
```
<code>Server-Only</code> <br></br>

Returns the position of portal opening A.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The position of opening A.

---

### getPositionB

```lua
portal:getPositionB()
```
<code>Server-Only</code> <br></br>

Returns the position of portal opening B.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The position of opening B.

---

### getRotationA

```lua
portal:getRotationA()
```
<code>Server-Only</code> <br></br>

Returns the rotation of portal opening A.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The rotation of opening A.

---

### getRotationB

```lua
portal:getRotationB()
```
<code>Server-Only</code> <br></br>

Returns the rotation of portal opening B.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The rotation of opening B.

---

### getWorldA

```lua
portal:getWorldA()
```
<code>Server-Only</code> <br></br>

Returns the world of portal opening A.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world of opening A.

---

### getWorldB

```lua
portal:getWorldB()
```
<code>Server-Only</code> <br></br>

Returns the world of portal opening B.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world of opening B.

---

### hasOpeningA

```lua
portal:hasOpeningA()
```
<code>Server-Only</code> <br></br>

Returns whether the portal has an opening A.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the portal has an opening A or not.

---

### hasOpeningB

```lua
portal:hasOpeningB()
```
<code>Server-Only</code> <br></br>

Returns whether the portal has an opening B.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the portal has an opening B or not.

---

### setOpeningA

```lua
portal:setOpeningA( position, rotation )
```
<code>Server-Only</code> <br></br>

Sets the portal's opening A.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The opening position.
- <code>rotation</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The the opening rotation.

---

### setOpeningB

```lua
portal:setOpeningB( position, rotation )
```
<code>Server-Only</code> <br></br>

Sets the portal's opening B.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The opening position.
- <code>rotation</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The the opening rotation.

---

### transferAToB

```lua
portal:transferAToB()
```
<code>Server-Only</code> <br></br>

Transfers objects inside opening A to opening B.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the transfer was successful or not.

---

### transferBToA

```lua
portal:transferBToA()
```
<code>Server-Only</code> <br></br>

Transfers objects inside opening B to opening A.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the transfer was successful or not.

---




