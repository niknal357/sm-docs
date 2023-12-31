---
sidebar_position: 44
title: sm.shape
hide_title: true
sidebar-label: 'sm.shape'
---

<br></br>

## sm.shape

**Associated object type:** [Shape](/docs/Game-Script-Environment/Userdata/Shape)

A <strong>shape</strong> is any block, part or basic material that can be built by a player. <br></br>
Shapes are always connected to a [body](/docs/Game-Script-Environment/Userdata/Body), which is a collection of shapes.

For more information about creating your own scripted shapes, see [ShapeClass](/docs/Game-Script-Environment/Classes/ShapeClass).

## Functions

### createBlock

```lua
sm.shape.createBlock( uuid, size, position, rotation, dynamic, forceSpawn )
```
<code>Server-Only</code> <br></br>

Creates a new block.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The block uuid.
- <code>size</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The block size.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The the world position.
- <code>rotation</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The world rotation (defaults to none).
- <code>dynamic</code> [<strong> bool </strong>]: Whether the shape is dynamic or static. Defaults to true (dynamic).
- <code>forceSpawn</code> [<strong> bool </strong>]: Whether to force spawn the shape or not. Optional.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Shape"> Shape </a> </strong>]: The created shape.

---

### createPart

```lua
sm.shape.createPart( uuid, position, rotation, dynamic, forceSpawn )
```
<code>Server-Only</code> <br></br>

Creates a new part.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The part uuid.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The the world position.
- <code>rotation</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The world rotation (defaults to none).
- <code>dynamic</code> [<strong> bool </strong>]: Whether the shape is dynamic or static. Defaults to true (dynamic).
- <code>forceSpawn</code> [<strong> bool </strong>]: Whether to force spawn the shape or not. Optional.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Shape"> Shape </a> </strong>]: The created shape.

---

### getShapeDescription

```lua
sm.shape.getShapeDescription( uuid )
```

Returns the item description for the given uuid.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The item uuid.

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The description.

---

### getShapeIcon

```lua
sm.shape.getShapeIcon( uuid )
```

[Missing Description]

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The item uuid.

<strong>Returns:</strong> <br></br>

- [<strong> any </strong>]: The shape's icon.

---

### getShapeTitle

```lua
sm.shape.getShapeTitle( uuid )
```

Returns the item's name for the given uuid.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The item uuid.

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The shape's name.

---

### getShapeTypeColor

```lua
sm.shape.getShapeTypeColor( uuid )
```

Returns the color of the uuid's shape type.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The item uuid.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Color"> Color </a> </strong>]: The color of the shape type.

---

### getIsHarvest

```lua
sm.shape.getIsHarvest( uuid )
```

Returns whether the uuid belongs to a harvestable shape.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The item uuid.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the shape is harvestable or not.

---

### uuidExists

```lua
sm.shape.uuidExists( uuid )
```

Returns whether the shape uuid exists.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The shape uuid.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the uuid exists or not.

---
