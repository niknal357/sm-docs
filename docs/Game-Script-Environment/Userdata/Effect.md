---
sidebar_position: 10
title: Effect
hide_title: true
sidebar-label: 'Effect'
---

<br></br>

## Effect

**Associated namespace:** [sm.effect](/docs/Game-Script-Environment/Static-Functions/sm.effect)

A userdata object representing an <strong>effect</strong>.

<strong>Values:</strong>

- <code>id</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The id of the effect.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>Effect</code> == <code>Effect</code> | Checks if two instances of <code>Effect</code> refer to the same <code>Effect</code>. |

## Functions

### bindEventCallback

```lua
effect:bindEventCallback( methodName, params, reference )
```
<code>Client-Only</code> <br></br>

Bind a Lua callback to be triggered by the effect.

The callback receives:

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>eventName</code> [<strong> string </strong>]: The name of the event.
- <code>params</code> [<strong> any </strong>]: Parameter object passed to the callback.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.
- <code>methodName</code> [<strong> string </strong>]: The name of the callback function.
- <code>params</code> [<strong> any </strong>]: Parameter object passed to the callback (Optional).
- <code>reference</code> [<strong> table </strong>]: Table to receive the callback (Optional).

---

### clearEventCallbacks

```lua
effect:clearEventCallbacks()
```
<code>Client-Only</code> <br></br>

Clears all Lua effect callbacks.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.

---

### destroy

```lua
effect:destroy()
```

Stops and destroys the effect.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.

---

### getCameraFov

```lua
effect:getCameraFov()
```
<code>Client-Only</code> <br></br>

Get the desired camera FOV.

Will return nil if the effect is not playing.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The FOV.

---

### getCameraPosition

```lua
effect:getCameraPosition()
```
<code>Client-Only</code> <br></br>

Get the desired camera position.

Will return nil if the effect is not playing.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The position.

---

### getCameraRotation

```lua
effect:getCameraRotation()
```
<code>Client-Only</code> <br></br>

Get the desired camera rotation.

Will return nil if the effect is not playing.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The rotation.

---

### getId

```lua
effect:getId()
```

Returns the id of the effect.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The id.

---

### hasActiveCamera

```lua
effect:hasActiveCamera()
```
<code>Client-Only</code> <br></br>

Returns whether the effect has an active camera effect.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the effect has an active camera effect or not.

---

### isDone

```lua
effect:isDone()
```
<code>Client-Only</code> <br></br>

Returns whether the effect is done, meaning that all effect instances have finished.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the effect is done or not.

---

### isPlaying

```lua
effect:isPlaying()
```
<code>Client-Only</code> <br></br>

Returns whether the effect is currently playing.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the effect is playing or not.

---

### setAutoPlay

```lua
effect:setAutoPlay( enabled )
```
<code>Client-Only</code> <br></br>

Sets the effect to start playing and repeating automatically.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.
- <code>enabled</code> [<strong> bool </strong>]: Whether the effect repeats automatically or not.

---

### setOffsetPosition

```lua
effect:setOffsetPosition( position )
```
<code>Client-Only</code> <br></br>

Offsets the position of the effect relative to the host interactable.

:::info note
This does not work if the effect was created without a host interactable.
:::

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The offset position.

---

### setOffsetRotation

```lua
effect:setOffsetRotation( rotation )
```
<code>Client-Only</code> <br></br>

Offsets the rotation of the effect relative to the host interactable.

:::info note
This does not work if the effect was created without a host interactable.
:::

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.
- <code>rotation</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The offset rotation.

---

### setParameter

```lua
effect:setParameter( name, value )
```
<code>Client-Only</code> <br></br>

Sets a named parameter value on the effect.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.
- <code>name</code> [<strong> string </strong>]: The parameter name.
- <code>value</code> [<strong> any </strong>]: The parameter value.

The list below contains *some* of the possible parameter names. <br></br>
Note that some of these may only work for specific effects.

```
Velocity_max_50
minColor 
maxColor
minColor2
maxColor2
valid
progress
char
Material
velocity_tree
craftbot
size
impact
load
rpm
gas
pitch
health
fire_intensity
visualization
amb_day_night
music
```

---

### setPosition

```lua
effect:setPosition( position )
```
<code>Client-Only</code> <br></br>

Sets the position of the effect.

:::info note
This does not work if the effect was created with a host interactable.
:::

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The position.

---

### setRotation

```lua
effect:setRotation( rotation )
```
<code>Client-Only</code> <br></br>

Sets the rotation of the effect.

:::info note
This does not work if the effect was created with a host interactable.
:::

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.
- <code>rotation</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The rotation.

---

### setScale

```lua
effect:setScale( scale )
```
<code>Client-Only</code> <br></br>

Sets the scale of the effect.

:::info note
Only applies to effect renderables.
:::

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.
- <code>scale</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The scale.

---

### setTimeOfDay

```lua
effect:setTimeOfDay( enabled, startTime, endTime, inversed )
```
<code>Client-Only</code> <br></br>

Sets the effect to be active during specific period of the day / night cycle.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.
- <code>enabled</code> [<strong> bool </strong>]: Whether this feature is enabled or not.
- <code>startTime</code> [<strong> number </strong>]: The normalized start time.
- <code>endTime</code> [<strong> number </strong>]: The normalized end time.
- <code>inversed</code> [<strong> bool </strong>]: If true, period between start/end becomes inactive time.

---

### setVelocity

```lua
effect:setVelocity( velocity )
```
<code>Client-Only</code> <br></br>

Sets the velocity of the effect. <br></br>
The effect will move along at the set velocity until it receives a new position.

:::info note
This does not work if the effect was created with a host interactable.
:::

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.
- <code>velocity</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The velocity.

---

### setWorld

```lua
effect:setWorld( world )
```
<code>Client-Only</code> <br></br>

Sets the effect's world.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.
- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world. Defaults to world from script context.

---

### start

```lua
effect:start()
```
<code>Client-Only</code> <br></br>

Starts playing the effect.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.

---

### stop

```lua
effect:stop()
```
<code>Client-Only</code> <br></br>

Stops playing the effect.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.

---

### stopBreakSustain

```lua
effect:stopBreakSustain()
```
<code>Client-Only</code> <br></br>

Stops playing the effect, letting sound finish before destroying the effect.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.

---

### stopImmediate

```lua
effect:stopImmediate()
```
<code>Client-Only</code> <br></br>

Immediately stops playing the effect. Any playing sound effects will stop immediately.

<strong>Arguments:</strong> <br></br>

- <code>effect</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The effect.

---



