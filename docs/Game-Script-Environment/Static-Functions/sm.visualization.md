---
sidebar_position: 51
title: sm.visualization
hide_title: true
sidebar-label: 'sm.visualization'
---

<br></br>

## sm.visualization

**Associated object type:** [BlueprintVisualization](/docs/Game-Script-Environment/Userdata/BlueprintVisualization)

A <strong>visualization</strong> is used for visualizing game objects.

## Functions

### createBlueprint

```lua
sm.visualization.createBlueprint( blueprint )
```
<code>Client-Only</code> <br></br>

Creates a [Blueprint Visualization](/docs/Game-Script-Environment/Userdata/BlueprintVisualization) from blueprint data.

<strong>Arguments:</strong> <br></br>

- <code>blueprint</code> [<strong> string/table </strong>]: The path to the blueprint file OR the table containing blueprint data.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/BlueprintVisualization"> BlueprintVisualization </a> </strong>]: The blueprint visualization.

---

### createBuilderGuide

```lua
sm.visualization.createBuilderGuide( path, shape, ignoreBlockUuid, completeEffectName )
```
<code>Client-Only</code> <br></br>

Creates a builder guide [Blueprint Visualization](/docs/Game-Script-Environment/Userdata/BlueprintVisualization), comparing the creation from the root [Shape](/docs/Game-Script-Environment/Userdata/Shape) to the given blueprint.

The builder guide blueprint contains stage indices based on shape color, stage color order is the same as the color order in the PaintTool color picker.

<strong>Arguments:</strong> <br></br>

- <code>path</code> [<strong> string </strong>]: The file path to the builder guide blueprint.
- <code>shape</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Shape"> Shape </a> </strong>]: The root Shape for comparing the creation from.
- <code>ignoreBlockUuid</code> [<strong> bool </strong>]: Whether the block UUID should be evaluated for stage completion. Defaults to false.
- <code>completeEffectName</code> [<strong> string </strong>]: The name of the effect to play when the guide is completed. Defaults to none.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/BlueprintVisualization"> BlueprintVisualization </a> </strong>]: The builder guide blueprint visualization.

---

### setBlockVisualization

```lua
sm.visualization.setBlockVisualization( position, illegal, target )
```
<code>Client-Only</code> <br></br>

Visualizes a block.

<strong>Arguments:</strong> <br></br>

- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The world position of the block. Local position if using a target.
- <code>illegal</code> [<strong> bool </strong>]: Whether the visualization should render as illegal.
- <code>target</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Shape"> Shape </a>/<a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a>/ nil </strong>]: The target shape or joint. Defaults to none (visualizes in world space).

---

### getShapePlacementVisualization

```lua
sm.visualization.getShapePlacementVisualization()
```
<code>Client-Only</code> <br></br>

Returns a table containing the current state of the shape placement visualization.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The state of the visualization.

---

### setCreationBodies

```lua
sm.visualization.setCreationBodies( bodies )
```
<code>Client-Only</code> <br></br>

Sets an array of bodies to visualize.

<strong>Arguments:</strong> <br></br>

- <code>bodies</code> [<strong> table </strong>]: The array of bodies to visualize.

---

### setCreationFreePlacement

```lua
sm.visualization.setCreationFreePlacement( valid )
```
<code>Client-Only</code> <br></br>

Controls the transform of the creation visualization. <br></br>
If true the visualization will render using <code>setFreePlacementPosition</code>/<code>setFreePlacementRotation</code> functions.

If false the visualization will render on top of the creation.

<strong>Arguments:</strong> <br></br>

- <code>valid</code> [<strong> bool </strong>]: The transform state.

---

### setCreationFreePlacementPosition

```lua
sm.visualization.setCreationFreePlacementPosition( pos )
```
<code>Client-Only</code> <br></br>

Set the world position of the creation visualization. Only works <code>setFreePlacement</code> is true.

<strong>Arguments:</strong> <br></br>

- <code>pos</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The visualization position.

---

### setCreationFreePlacementRotation

```lua
sm.visualization.setCreationFreePlacementRotation( index )
```
<code>Client-Only</code> <br></br>

Set the rotation index of the creation visualization. Only works <code>setFreePlacement</code> is true.

<strong>Arguments:</strong> <br></br>

- <code>index</code> [<strong> int </strong>]: The rotation index.

---

### setCreationValid

```lua
sm.visualization.setCreationValid( valid, lift )
```
<code>Client-Only</code> <br></br>

Controls the rendering of the creation visualization.

<strong>Arguments:</strong> <br></br>

- <code>valid</code> [<strong> bool </strong>]: Whether the visualization should be rendered as valid or invalid.
- <code>lift</code> [<strong> bool </strong>]: Whether the visualization should render a lift (?).

---

### setCreationVisible

```lua
sm.visualization.setCreationVisible( visible )
```
<code>Client-Only</code> <br></br>

Controls the visibility of the creation visualization.

<strong>Arguments:</strong> <br></br>

- <code>visible</code> [<strong> bool </strong>]: Whether the visualization should be visible or not.

---

### setLiftLevel

```lua
sm.visualization.setLiftLevel( level )
```
<code>Client-Only</code> <br></br>

Sets the lift level of the lift visualization.

<strong>Arguments:</strong> <br></br>

- <code>level</code> [<strong> int </strong>]: The level of the lift.

---

### setLiftPosition

```lua
sm.visualization.setLiftPosition( pos )
```
<code>Client-Only</code> <br></br>

Sets the lift position of the lift visualization.

<strong>Arguments:</strong> <br></br>

- <code>pos</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The position of the lift.

---

### setLiftValid

```lua
sm.visualization.setLiftValid( valid )
```
<code>Client-Only</code> <br></br>

Controls the rendering of the lift visualization.

<strong>Arguments:</strong> <br></br>

- <code>valid</code> [<strong> bool </strong>]: Whether the lift renders as valid or invalid.

---

### setLiftVisible

```lua
sm.visualization.setLiftVisible( visible )
```
<code>Client-Only</code> <br></br>

Controls the visibility of the lift visualization.

<strong>Arguments:</strong> <br></br>

- <code>visible</code> [<strong> bool </strong>]: Whether the lift is visible or not.

---



