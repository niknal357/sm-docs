---
sidebar_position: 10
title: sm.challenge
hide_title: true
sidebar-label: 'sm.challenge'
---

<br></br>

## sm.challenge

The <strong>Challenge</strong> api contains functions related to the Challenge game mode.

## Functions

### getCompletionTime

```lua
sm.challenge.getCompletionTime( level )
```
<code>Server-Only</code> <br></br>

Returns the challenge completion time.

<strong>Arguments:</strong> <br></br>

- <code>level</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The level uuid.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The completion time.

---

### getSaveData

```lua
sm.challenge.getSaveData( level )
```
<code>Server-Only</code> <br></br>

Returns the challenge level save data.

<strong>Arguments:</strong> <br></br>

- <code>level</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The level uuid.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The save data.

---

### hasStarted

```lua
sm.challenge.hasStarted()
```
<code>Server-Only</code> <br></br>

Returns whether the challenge has started.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the challenge has started or not.

---

### isMasterMechanicTrial

```lua
sm.challenge.isMasterMechanicTrial()
```
<code>Client-Only</code> <br></br>

Returns whether the challenge is part of the "Master Mechanic Trials" pack.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: The content pack status.

---

### levelCompleted

```lua
sm.challenge.levelCompleted( level, time, save )
```
<code>Server-Only</code> <br></br>

Completes a challenge level and saves progression.

<strong>Arguments:</strong> <br></br>

- <code>level</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The level uuid.
- <code>time</code> [<strong> number </strong>]: The completion time.
- <code>save</code> [<strong> table </strong>]: A table containing save data.

---

### resolveContentPath

```lua
sm.challenge.resolveContentPath( path )
```
<code>Server-Only</code> <br></br>

Resolves a path containing <code>$CONTENT_DATA</code> to path that can be accessed in the main scripting environment.

<strong>Arguments:</strong> <br></br>

- <code>path</code> [<strong> string </strong>]: The unresolved path.

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The resolved path.

---

### start

```lua
sm.challenge.start()
```
<code>Server-Only</code> <br></br>

Starts the challenge.

---

### stop

```lua
sm.challenge.stop()
```
<code>Server-Only</code> <br></br>

Stops the challenge.

---

### takePicture

```lua
sm.challenge.takePicture( width, height, rotation )
```
<code>Server-Only</code> <br></br>

Takes a picture of the challenge level with a custom resolution.

<strong>Arguments:</strong> <br></br>

- <code>width</code> [<strong> int </strong>]: The preview width.
- <code>height</code> [<strong> int </strong>]: The preview height.
- <code>rotation</code> [<strong> int </strong>]: The rotation step.

---

### takePicturesForMenu

```lua
sm.challenge.takePicturesForMenu( rotation )
```
<code>Server-Only</code> <br></br>

Takes pictures of the challenge level to use as icon and preview.

<strong>Arguments:</strong> <br></br>

- <code>rotation</code> [<strong> int </strong>]: The rotation step.

---




