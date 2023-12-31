---
sidebar_position: 36
title: sm.pathfinder
hide_title: true
sidebar-label: 'sm.pathfinder'
---

<br></br>

## sm.pathfinder

Path finder.

[Constants](/docs/Game-Script-Environment/Constants#smpathfinderconditionproperty)

## Functions

### getPath

```lua
sm.pathfinder.getPath( character, destination, groundPos, linkConditions )
```
<code>Server-Only</code> <br></br>

Finds a path.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>]: The character to find a path for.
- <code>destination</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The path destination.
- <code>groundPos</code> [<strong> bool </strong>]: Whether the destination is ground level or not. Defaults to true.
- <code>linkConditions</code> [<strong> table </strong>]: A table of link conditions. Optional.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The found path, as a table of pathNodes.

---

### getSortedNodes

```lua
sm.pathfinder.getSortedNodes( worldPosition, minDist, maxDist )
```
<code>Server-Only</code> <br></br>

Finds all nearby path nodes.

<strong>Arguments:</strong> <br></br>

- <code>worldPosition</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The position to check.
- <code>minDist</code> [<strong> number </strong>]: The minimum distance around the position.
- <code>maxDist</code> [<strong> number </strong>]: The maximum distance around the position.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: A table of found pathNodes, sorted closest to farthest.

---












