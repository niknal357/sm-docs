---
sidebar_position: 9
title: sm.cell
hide_title: true
sidebar-label: 'sm.cell'
---

<br></br>

## sm.cell

The <strong>cell</strong> api exposes and expands on parts of the world loading process.

These methods are commonly called from cell loading callbacks in World type scripts.

## Functions

### getHarvestables

```lua
sm.cell.getHarvestables( x, y, size )
```
<code>Server-Only</code> <br></br>

Returns a table of harvestables of a given size for a cell coordinate.

Sizes are:

0: Tiny - plants and crops.

1: Small - small trees and rocks.

2: Medium - medium trees, visible at a long distance.

3: Large - large trees, visible at a very long distance.

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> int </strong>]: The X coordinate.
- <code>y</code> [<strong> int </strong>]: The Y coordinate.
- <code>size</code> [<strong> int </strong>]: The harvestable size (defaults to all).

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of harvestables.

---

### getInteractablesByAnyUuid

```lua
sm.cell.getInteractablesByAnyUuid( x, y, uuids )
```
<code>Server-Only</code> <br></br>

Returns a table of [interactables](/docs/Game-Script-Environment/Userdata/Interactable) that match any of the given [uuids](/docs/Game-Script-Environment/Userdata/Uuid) for a cell coordinate.

:::info note
Can only be used in a <code>server_onCellLoaded</code> callback.
:::

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> int </strong>]: The X coordinate.
- <code>y</code> [<strong> int </strong>]: The Y coordinate.
- <code>uuids</code> [<strong> table </strong>]: The table of uuids to match interactables against.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table interactables with matching uuid.

---

### getInteractablesByTag

```lua
sm.cell.getInteractablesByTag( x, y, tag )
```
<code>Server-Only</code> <br></br>

Returns a table of [interactables](/docs/Game-Script-Environment/Userdata/Interactable) that contain the given tag for a cell coordinate.

:::info note
Can only be used in a <code>server_onCellLoaded</code> callback.
:::

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> int </strong>]: The X coordinate.
- <code>y</code> [<strong> int </strong>]: The Y coordinate.
- <code>tag</code> [<strong> string </strong>]: The tag to match with.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table interactables with matching tag.

---

### getInteractablesByTags

```lua
sm.cell.getInteractablesByTags( x, y, tags )
```
<code>Server-Only</code> <br></br>

Returns a table of [interactables](/docs/Game-Script-Environment/Userdata/Interactable) that contain all of the given tags for a cell coordinate.

:::info note
Can only be used in a <code>server_onCellLoaded</code> callback.
:::

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> int </strong>]: The X coordinate.
- <code>y</code> [<strong> int </strong>]: The Y coordinate.
- <code>tags</code> [<strong> table </strong>]: The table of tags to match with.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of interactables with matching tag.

---

### getInteractablesByUuid

```lua
sm.cell.getInteractablesByUuid( x, y, uuid )
```
<code>Server-Only</code> <br></br>

Returns a table of [interactables](/docs/Game-Script-Environment/Userdata/Interactable) that have the given [uuid](/docs/Game-Script-Environment/Userdata/Uuid) for a cell coordinate.

:::info note
Can only be used in a <code>server_onCellLoaded</code> callback.
:::

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> int </strong>]: The X coordinate.
- <code>y</code> [<strong> int </strong>]: The Y coordinate.
- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The uuid of the interactable(s).

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of interactables with matching uuid.

---

### getNodesByTag

```lua
sm.cell.getNodesByTag( x, y, tag )
```
<code>Server-Only</code> <br></br>

Returns a table of nodes that contain the given tag for a cell coordinate.

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> int </strong>]: The X coordinate.
- <code>y</code> [<strong> int </strong>]: The Y coordinate.
- <code>tag</code> [<strong> string </strong>]: The tag to match with.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table containing node data for each node (see structure below).

```lua title="Table Structure"
{
	{
		position = vec3,
		rotation = quat,
		scale = vec3,
		tags = { string, ... },
		params = { ... }
	}
}
```

---

### getNodesByTags

```lua
sm.cell.getNodesByTags( x, y, tags )
```
<code>Server-Only</code> <br></br>

Returns a table of nodes that contain all of the given tags for a cell coordinate.

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> int </strong>]: The X coordinate.
- <code>y</code> [<strong> int </strong>]: The Y coordinate.
- <code>tags</code> [<strong> table </strong>]: The table of tags to match with.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table containing node data for each node (see structure below).

```lua title="Table Structure"
{
	{
		position = vec3,
		rotation = quat,
		scale = vec3,
		tags = { string, ... },
		params = { ... }
	}
}
```

---

### getTags

```lua
sm.cell.getTags( x, y )
```
<code>Server-Only</code> <br></br>

Returns a table of tags for a cell coordinate.

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> int </strong>]: The X coordinate.
- <code>y</code> [<strong> int </strong>]: The Y coordinate.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of tags.

---
















