---
sidebar_position: 18
title: PathNode
hide_title: true
sidebar-label: 'PathNode'
---

<br></br>

## PathNode

**Associated namespace:** [sm.pathNode](/docs/Game-Script-Environment/Static-Functions/sm.pathNode)

A userdata object representing a <strong>path node</strong> in the game.

<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>PathNode</code> == <code>PathNode</code> | Checks if two instances of <code>PathNode</code> refer to the same <code>PathNode</code>. |


## Functions

### connect

```lua
pathNode:connect( target )
```
<code>Server-Only</code> <br></br>

Creates a PathNode connection.

<strong>Arguments:</strong> <br></br>

- <code>pathNode</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/PathNode"> PathNode </a> </strong>]: The pathNode.
- <code>target</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/PathNode"> PathNode </a> </strong>]: The pathNode to connect to.

---

### destroy

```lua
pathNode:destroy()
```
<code>Server-Only</code> <br></br>

Destroys the PathNode.

<strong>Arguments:</strong> <br></br>

- <code>pathNode</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/PathNode"> PathNode </a> </strong>]: The pathNode.

---

### getPosition

```lua
pathNode:getPosition()
```
<code>Server-Only</code> <br></br>

Returns the pathNode's world position.

<strong>Arguments:</strong> <br></br>

- <code>pathNode</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/PathNode"> PathNode </a> </strong>]: The pathNode.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The pathNode's world position.

---

