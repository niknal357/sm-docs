---
sidebar_position: 29
title: sm.localPlayer
hide_title: true
sidebar-label: 'sm.localPlayer'
---

<br></br>

## sm.localPlayer

Local player represents the current character being controlled on the client's computer. <br></br>
This library can only be used on the [client](/docs/#client).

For more information about other players in the world, see [sm.player](/docs/Game-Script-Environment/Static-Functions/sm.player).

## Functions

### addRenderable

```lua
sm.localPlayer.addRenderable( file )
```
<code>Client-Only</code> <br></br>

Adds a renderable (file containing model data) to be used for the local player in first person view.

<strong>Arguments:</strong> <br></br>

- <code>file</code> [<strong> string </strong>]: The path to the renderable file.

---

### getActiveItem

```lua
sm.localPlayer.getActiveItem()
```
<code>Client-Only</code> <br></br>

Returns the item currently held by the local player.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The uuid of the held item.

---

### getAimSensitivity

```lua
sm.localPlayer.getAimSensitivity()
```
<code>Client-Only</code> <br></br>

Returns the local player's aim sensitivity.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The aim sensitivity.

---

### getCarry

```lua
sm.localPlayer.getCarry()
```
<code>Client-Only</code> <br></br>

Returns the local player's carrying container.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The player's carry.

---

### getCarryColor

```lua
sm.localPlayer.getCarryColor()
```
<code>Client-Only</code> <br></br>

Returns the color of the shape that the local player is carrying.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Color"> Color </a> </strong>]: The player's carry color.

---

### getDirection

```lua
sm.localPlayer.getDirection()
```
<code>Client-Only</code> <br></br>

Returns the direction in which the local player is looking.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The player's aim direction.

---

### getFpAnimationInfo

```lua
sm.localPlayer.getFpAnimationInfo( name )
```
<code>Client-Only</code> <br></br>

Returns general information for a first person view animation.

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The animation name.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: A table containing <code>name</code>, <code>duration</code> and <code>looping</code> information of the animation.

---

### getFpBonePos

```lua
sm.localPlayer.getFpBonePos( name )
```
<code>Client-Only</code> <br></br>

Returns the world position for a bone in the first person view animation skeleton.

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The bone name.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The bone position.

---

### getHotbar

```lua
sm.localPlayer.getHotbar()
```
<code>Client-Only</code> <br></br>

Returns the local player's hotbar container.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The hotbar.

---

### getId

```lua
sm.localPlayer.getId()
```
<code>Client-Only</code> <br></br>

Returns the local player's id.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The id.

---

### getInventory

```lua
sm.localPlayer.getInventory()
```
<code>Client-Only</code> <br></br>

Returns the local player's inventory container.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The inventory.

---

### getMouseDelta

```lua
sm.localPlayer.getMouseDelta()
```
<code>Client-Only</code> <br></br>

Returns the delta position of the mouse.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: Mouse Delta X.
- [<strong> number </strong>]: Mouse Delta Y.

---

### getOwnedLift

```lua
sm.localPlayer.getOwnedLift()
```
<code>Client-Only</code> <br></br>

Returns the local player's lift.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Lift"> Lift </a> </strong>]: The lift.

---

### getPlayer

```lua
sm.localPlayer.getPlayer()
```
<code>Client-Only</code> <br></br>

Returns the local player's player object.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.

---

### getPosition

```lua
sm.localPlayer.getPosition()
```

:::caution warning
This function is deprecated.

Use <code>sm.localPlayer.getPlayer().character.worldPosition</code> instead.
:::

---

### getRaycast

```lua
sm.localPlayer.getRaycast( range, origin, direction )
```
<code>Client-Only</code> <br></br>

Performs a [raycast](https://en.wikipedia.org/wiki/Ray_casting) relative to the local player's perspective.

<strong>Arguments:</strong> <br></br>

- <code>range</code> [<strong> number </strong>]: The maximum range.
- <code>origin</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The start position. Defaults to <code>sm.localPlayer.getRaycastStart()</code>
- <code>direction</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The direction. Defaults to <code>sm.localPlayer.getDirection()</code>

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the raycast was successful or not.
- [<strong> <a href="/docs/Game-Script-Environment/Userdata/RaycastResult"> RaycastResult </a> </strong>]: The raycast result data.

---

### getRaycastStart

```lua
sm.localPlayer.getRaycastStart()
```
<code>Client-Only</code> <br></br>

Returns the start position of the local player's raycast. <br></br>
The position depends on the [camera](/docs/Game-Script-Environment/Static-Functions/sm.camera)'s position, and whether it's in first - or third-person.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The start position of the raycast.

---

### getRight

```lua
sm.localPlayer.getRight()
```
<code>Client-Only</code> <br></br>

Returns the right-vector perpendicular to the local player's aim.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The right-vector of the local player's aim.

---

### getSelectedHotbarSlot

```lua
sm.localPlayer.getSelectedHotbarSlot()
```
<code>Client-Only</code> <br></br>

Returns the selected hotbar slot.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The selected slot.

---

### getUp

```lua
sm.localPlayer.getUp()
```
<code>Client-Only</code> <br></br>

Returns the up-vector perpendicular to the local player's aim.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The up-vector of the local player's aim.

---

### isGarmentUnlocked

```lua
sm.localPlayer.isGarmentUnlocked( uuid )
```
<code>Client-Only</code> <br></br>

Checks if the garment has been granted to the local player.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The garment uuid.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the garment is unlocked or not.

---

### isInFirstPersonView

```lua
sm.localPlayer.isInFirstPersonView()
```
<code>Client-Only</code> <br></br>

Returns whether the player is in first person view where the viewpoint is rendered from the player's perspective. <br></br>
Otherwise, the player is in third person view where the camera is behind the player.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the player is in first-person view or not.

---

### removeRenderable

```lua
sm.localPlayer.removeRenderable( renderable )
```
<code>Client-Only</code> <br></br>

Removes a renderable (file containing model data) that was used for the local player in first person view.

<strong>Arguments:</strong> <br></br>

- <code>renderable</code> [<strong> string </strong>]: The path to the renderable file.

---

### setBlockSprinting

```lua
sm.localPlayer.setBlockSprinting( state )
```
<code>Client-Only</code> <br></br>

Stops the local player from sprinting.

<strong>Arguments:</strong> <br></br>

- <code>state</code> [<strong> bool </strong>]: Whether sprinting is blocked or not.

---

### setDirection

```lua
sm.localPlayer.setDirection( dir )
```
<code>Client-Only</code> <br></br>

Sets the direction of where the player is viewing or aiming. <br></br>
Intended to be used when the controls have been locked (See [sm.localPlayer.setLockedControls](#setlockedcontrols)).

<strong>Arguments:</strong> <br></br>

- <code>dir</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The direction.

---

### setLockedControls

```lua
sm.localPlayer.setLockedControls( state )
```
<code>Client-Only</code> <br></br>

Locks the player's controls.

A player with locked controls <strong>can:</strong>

- Open the game menu by pressing ESC
- Open the chat

A player with locked controls <strong>cannot:</strong>

- Interact with parts
- Open their inventory
- Move in any way
- Look around
- Change the selected hotbar item
- Use any tools
- Place or remove any parts

<strong>Arguments:</strong> <br></br>

- <code>state</code> [<strong> bool </strong>]: The lock state.

---

### updateFpAnimation

```lua
sm.localPlayer.updateFpAnimation( name, time, weight, looping )
```
<code>Client-Only</code> <br></br>

Updates a first person view animation.

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The animation name.
- <code>time</code> [<strong> number </strong>]: The time.
- <code>weight</code> [<strong> number </strong>]: The weight. Defaults to <code>-1.0</code>
- <code>looping</code> [<strong> bool </strong>]: Whether the animation is looping or not. Defaults to false.

---