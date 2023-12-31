---
sidebar_position: 42
title: sm.render
hide_title: true
sidebar-label: 'sm.render'
---

<br></br>

## sm.render

Render settings.

## Functions

### getDrawDistance

```lua
sm.render.getDrawDistance()
```
<code>Client-Only</code> <br></br>

Gets the draw distance.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The draw distance.

---

### getOutdoorLighting

```lua
sm.render.getOutdoorLighting()
```
<code>Client-Only</code> <br></br>

Gets the lighting cycle fraction.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The fraction of the day cycle lighting.

---

### getScreenCoordinatesFromWorldPosition

```lua
sm.render.getScreenCoordinatesFromWorldPosition( position, width, height )
```
<code>Client-Only</code> <br></br>

Return the screen coordinates that align with the given world position.

<strong>Arguments:</strong> <br></br>

- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The world position.
- <code>width</code> [<strong> int </strong>]: The screen width.
- <code>height</code> [<strong> int </strong>]: The screen height.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The X coordinate on the screen.
- [<strong> number </strong>]: The Y coordinate on the screen.

---

### isOutdoor

```lua
sm.render.isOutdoor()
```
<code>Client-Only</code> <br></br>

Checks if the local client is outdoor.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the local client is outdoors or not.

---

### setOutdoorLighting

```lua
sm.render.setOutdoorLighting( value )
```
<code>Client-Only</code> <br></br>

Sets the lighting cycle fraction.

<strong>Arguments:</strong> <br></br>

- <code>value</code> [<strong> number </strong>]: The day cycle fraction.

---


