---
sidebar_position: 3
title: BlueprintVisualization
hide_title: true
sidebar-label: 'BlueprintVisualization'
---

<br></br>

## BlueprintVisualization

**Associated namespace:** [sm.visualization](/docs/Game-Script-Environment/Static-Functions/sm.visualization)

A userdata object representing a <strong>blueprint visualization</strong>.

<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>BlueprintVisualization</code> == <code>BlueprintVisualization</code> | Checks if two instances of <code>BlueprintVisualization</code> refer to the same <code>BlueprintVisualization</code>. |

## Functions

### destroy

```lua
blueprintVisualization:destroy()
```
<code>Client-Only</code> <br></br>

Destroys a blueprint visualization.

<strong>Arguments:</strong> <br></br>

- <code>blueprintVisualization</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/BlueprintVisualization"> BlueprintVisualization </a> </strong>]: The blueprint visualization.

---

### setPosition

```lua
blueprintVisualization:setPosition( position )
```
<code>Client-Only</code> <br></br>

Sets the world position of a blueprint visualization.

<strong>Arguments:</strong> <br></br>

- <code>blueprintVisualization</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/BlueprintVisualization"> BlueprintVisualization </a> </strong>]: The blueprint visualization.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The world position.

---

### setRotation

```lua
blueprintVisualization:setRotation( rotation )
```
<code>Client-Only</code> <br></br>

Sets the rotation of a blueprint visualization.

<strong>Arguments:</strong> <br></br>

- <code>blueprintVisualization</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/BlueprintVisualization"> BlueprintVisualization </a> </strong>]: The blueprint visualization.
- <code>rotation</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The rotation.

---

### setScale

```lua
blueprintVisualization:setScale( scale )
```
<code>Client-Only</code> <br></br>

Sets the scale of a blueprint visualization.

<strong>Arguments:</strong> <br></br>

- <code>blueprintVisualization</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/BlueprintVisualization"> BlueprintVisualization </a> </strong>]: The blueprint visualization.
- <code>scale</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The scale.

---

### updateBuilderGuide

```lua
blueprintVisualization:updateBuilderGuide()
```
<code>Client-Only</code> <br></br>

Updates the state of a builder guide <code>BlueprintVisualization</code>. <br></br>
Should be called whenever the root [Shape](/docs/Game-Script-Environment/Userdata/Shape) of the builder guide has changed.

For performance reasons, this should not be called every tick.

<strong>Arguments:</strong> <br></br>

- <code>blueprintVisualization</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/BlueprintVisualization"> BlueprintVisualization </a> </strong>]: The blueprint visualization.

---









