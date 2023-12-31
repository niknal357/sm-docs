---
sidebar_position: 2
title: Harvestable
hide_title: true
sidebar-label: 'Harvestable'
---

<br></br>

## Harvestable

**Associated namespace:** [sm.harvestable](/docs/Game-Script-Environment/Static-Functions/sm.harvestable)

Represents a harvestable object in the game.

<strong>Values:</strong>

- <code>clientPublicData</code> [<strong> table </strong>] <br></br>

	- <code>Get</code>: (Client-Only) The harvestable's client public data.
	- <code>Set</code>: (Client-Only) Sets the harvestable's client public data.


- <code>id</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The harvestable's id.


- <code>initialPosition</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>] <br></br>

	- <code>Get</code>: The harvestable's initial world position.


- <code>initialRotation</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Quat"> Quat </a> </strong>] <br></br>

	- <code>Get</code>: The harvestable's initial world rotation.


- <code>mass</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The harvestable's mass.


- <code>material</code> [<strong> string </strong>] <br></br>

	- <code>Get</code>: The harvestable's material name.


- <code>materialId</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The harvestable's material id.


- <code>name</code> [<strong> string </strong>] <br></br>

	- <code>Get</code>: The harvestable's name.


- <code>publicData</code> [<strong> table </strong>] <br></br>

	- <code>Get</code>: (Server-Only) The harvestable's server public data.
	- <code>Set</code>: (Server-Only) Sets the harvestable's server public data.


- <code>type</code> [<strong> string </strong>] <br></br>

	- <code>Get</code>: The harvestable's type.


- <code>uuid</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>] <br></br>

	- <code>Get</code>: The harvestable's uuid.


- <code>worldPosition</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>] <br></br>

	- <code>Get</code>: The harvestable's world position.


- <code>worldRotation</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Quat"> Quat </a> </strong>] <br></br>

	- <code>Get</code>: The harvestable's world rotation.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>Harvestable</code> == <code>Harvestable</code> | Checks if two instances of <code>Harvestable</code> refer to the same <code>Harvestable</code>. |

## Functions

### destroy

```lua
harvestable:destroy()
```
<code>Server-Only</code> <br></br>

Destroys the harvestable.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

---

### getAabb

```lua
harvestable:getAabb()
```

Returns the bounds of the harvestable shape.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The max bounds.
- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The min bounds.

---

### getClientPublicData

```lua
harvestable:getClientPublicData()
```
<code>Client-Only</code> <br></br>

Returns the harvestable's client public data.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The public data.

---

### getColor

```lua
harvestable:getColor()
```

Returns the harvestable's color.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Color"> Color </a> </strong>]: The color.

---

### getData

```lua
harvestable:getData()
```

Returns the harvestable's script data.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The script data.

---

### getId

```lua
harvestable:getId()
```

Returns the harvestable's id.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The id.

---

### getMass

```lua
harvestable:getMass()
```

Returns the harvestable's mass.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The mass.

---

### getMaterial

```lua
harvestable:getMaterial()
```

Returns the harvestable's material name.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The material name.

---

### getMaterialId

```lua
harvestable:getMaterialId()
```

Returns the harvestable's material id.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The material id.

---

### getName

```lua
harvestable:getName()
```

Returns the harvestable's name.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The name.

---

### getPoseWeight

```lua
harvestable:getPoseWeight( index )
```
<code>Client-Only</code> <br></br>

Returns the pose weight of the pose in the given index.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.
- <code>index</code> [<strong> int </strong>]: The index.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The pose weight.

---

### getPosition

```lua
harvestable:getPosition()
```

Returns the harvestable's world position.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The world position.

---

### getPublicData

```lua
harvestable:getPublicData()
```
<code>Server-Only</code> <br></br>

Returns the harvestable's server public data.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The public data.

---

### getRotation

```lua
harvestable:getRotation()
```

Returns the harvestable's rotation.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The rotation.

---

### getScale

```lua
harvestable:getScale()
```

Returns the harvestable's scale.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The scale.

---

### getSeatCharacter

```lua
kinematic:getSeatCharacter()
```

Returns the [Character](/docs/Game-Script-Environment/Userdata/Character) that is seated in the kinematic.

<strong>Arguments:</strong> <br></br>

- <code>kinematic</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The kinematic.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>]: The character.

---

### getType

```lua
harvestable:getType()
```

Returns the harvestable's type.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The type.

---

### getUuid

```lua
harvestable:getUuid()
```

Returns the harvestable's uuid.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The uuid.

---

### getUvFrameIndex

```lua
harvestable:getUvFrameIndex()
```
<code>Client-Only</code> <br></br>

Returns the harvestable's current UV animation frame.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The UV frame.

---

### getWorld

```lua
harvestable:getWorld()
```

Returns the harvestable's world.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/World"> World </a> </strong>]: The world.

---

### hasSeat

```lua
kinematic:hasSeat()
```

Returns whether the kinematic has a seat component.

<strong>Arguments:</strong> <br></br>

- <code>kinematic</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The kinematic.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the kinematic has a seat component or not.

---

### isKinematic

```lua
harvestable:isKinematic()
```

Returns whether the harvestable is a kinematic.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the harvestable is a kinematic or not.

---

### setClientPublicData

```lua
harvestable:setClientPublicData( data )
```
<code>Client-Only</code> <br></br>

Sets the harvestable's client public data.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.
- <code>data</code> [<strong> table </strong>]: The data to set.

---

### setColor

```lua
harvestable:setColor( color )
```
<code>Client-Only</code> <br></br>

Sets the harvestable's color.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.
- <code>color</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Color"> Color </a> </strong>]: The color.

---

### setParams

```lua
harvestable:setParams( data )
```
<code>Server-Only</code> <br></br>

Sets the harvestable's param data.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.
- <code>data</code> [<strong> any </strong>]: The data.

---

### setPoseWeight

```lua
harvestable:setPoseWeight( index, value )
```
<code>Client-Only</code> <br></br>

Set the pose weight of the pose in the given index.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.
- <code>index</code> [<strong> int </strong>]: The index.
- <code>value</code> [<strong> number </strong>]: The pose weight.

---

### setPosition

```lua
kinematic:setPosition( position )
```

Set the harvestable's world position. <br></br>
Can only be used on kinematic harvestables.

<strong>Arguments:</strong> <br></br>

- <code>kinematic</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The kinematic.
- <code>position</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The world position.

---

### setPublicData

```lua
harvestable:setPublicData( data )
```
<code>Server-Only</code> <br></br>

Set the harvestable's server public data.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.
- <code>data</code> [<strong> table </strong>]: The data to set.

---

### setRotation

```lua
kinematic:setRotation( rotation )
```

Set the harvestable's rotation. <br></br>
Can only be used on kinematic harvestables.

<strong>Arguments:</strong> <br></br>

- <code>kinematic</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The kinematic.
- <code>rotation</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The rotation.

---

### setSeatCharacter

```lua
kinematic:setSeatCharacter( character )
```

Requests to seat a [Character](/docs/Game-Script-Environment/Userdata/Character) in the kinematic.

<strong>Arguments:</strong> <br></br>

- <code>kinematic</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The kinematic.
- <code>character</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>]: The character.

---

### setUvFrameIndex

```lua
harvestable:setUvFrameIndex( index )
```
<code>Client-Only</code> <br></br>

Sets the UV animation frame with the given index.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.
- <code>index</code> [<strong> int </strong>]: The index.

---






