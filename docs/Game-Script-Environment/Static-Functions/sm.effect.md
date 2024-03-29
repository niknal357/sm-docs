---
sidebar_position: 19
title: sm.effect
hide_title: true
sidebar-label: 'sm.effect'
---

<br></br>

## sm.effect

**Associated object type:** [Effect](/docs/Game-Script-Environment/Userdata/Effect)

The <strong>effect</strong> api handles the creation and playing of audio and visual effects.

Effects can consist of multiple components each being of separate types and with unique offsets, rotations and delays.

For more information on how to setup effects please take a look in the Effects/Database/EffectSets folder in the game data.

## Functions

### createEffect

```lua
sm.effect.createEffect( name, host, bone )
```
<code>Client-Only</code> <br></br>

Creates an effect.

If you provide a host object to the effect then it will fetch position, <br></br>
velocity and orientation data from the object instead of relying on this information being fed to it.

This results in far more accurate positioning of effects that are supposed to stay attached to an object.

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The effect name.
- <code>host</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Interactable"> Interactable </a>/<a href="/docs/Game-Script-Environment/Userdata/Harvestable"> Harvestable </a>/<a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a>/ nil </strong>]: The object that the effect is attached to.
- <code>bone</code> [<strong> string </strong>]: The bone name, if attaching to an interactable or character. Defaults to none.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The created effect.

---

### createEffect2D

```lua
sm.effect.createEffect2D( name )
```
<code>Client-Only</code> <br></br>

Creates a 2D effect.

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The effect name.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Effect"> Effect </a> </strong>]: The created effect.

---

### estimateSize

```lua
sm.effect.estimateSize( name, params )
```
<code>Client-Only</code> <br></br>

Estimates the radius of influence for an effect and instance parameters.

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The effect name.
- <code>params</code> [<strong> table </strong>]: The parameters.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The range.

---

### playEffect

```lua
sm.effect.playEffect( name, position, velocity, rotation, scale, parameters )
```

Plays an effect. If this function is called on the server it will play the effect on all clients.

:::info note
If you start a looping effect using this function you will not be able to stop it. <br></br>
Please use [createEffect](#createeffect) for looping effects.
:::

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The effect name.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The position.
- <code>velocity</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The velocity. Defaults to none.
- <code>rotation</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The rotation. Defaults to none.
- <code>scale</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The scale, if using a renderable. Defaults to none.
- <code>parameters</code> [<strong> table </strong>]: The table containing effect parameters. Defaults to none.

---

### playHostedEffect

```lua
sm.effect.playHostedEffect( name, host, boneName, parameters )
```
<code>Client-Only</code> <br></br>

Plays an effect. <br></br>
It will fetch position, velocity and orientation data from the host object.

:::info note
If you start a looping effect using this function you will not be able to stop it. <br></br>
Please use [createEffect](#createeffect) for looping effects.
:::

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The effect name.
- <code>host</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Interactable"> Interactable </a>/<a href="/docs/Game-Script-Environment/Userdata/Harvestable"> Harvestable </a>/<a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>]: The object that the effect is attached to.
- <code>bone</code> [<strong> string </strong>]: The bone name, if attaching to an interactable or character. Defaults to none.
- <code>parameters</code> [<strong> table </strong>]: The table containing effect parameters. Defaults to none.

---































