---
sidebar_position: 22
title: RaycastResult
hide_title: true
sidebar-label: 'RaycastResult'
---

<br></br>

## RaycastResult

A userdata object representing a <strong>raycast result</strong>.

A raycast result is a collection of data received from a raycast. <br></br>
The result contains information about where the raycast travelled and what objects it eventually hit.

Raycast results are the result of functions such as [sm.physics.raycast](/docs/Game-Script-Environment/Static-Functions/sm.physics#raycast), [sm.physics.distanceRaycast](/docs/Game-Script-Environment/Static-Functions/sm.physics#distanceraycast) and [sm.localPlayer.getRaycast](/docs/Game-Script-Environment/Static-Functions/sm.localPlayer#getraycast).

<strong>Values:</strong>

- <code>directionWorld</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>] <br></br>

	- <code>Get</code>: The raycast's direction vector.


- <code>fraction</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The fraction (0 - 1) of the distance reached until collision, divided by the ray's length.


- <code>normalLocal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>] <br></br>

	- <code>Get</code>: The normal vector of the hit surface, relative to the target's rotation.


- <code>normalWorld</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>] <br></br>

	- <code>Get</code>: The normal vector of the hit surface.


- <code>originWorld</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>] <br></br>

	- <code>Get</code>: The raycast's start position.


- <code>pointLocal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>] <br></br>

	- <code>Get</code>: The world position of the hit point, relative to the target's position.


- <code>pointWorld</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>] <br></br>

	- <code>Get</code>: The world position of the hit point.


- <code>type</code> [<strong> string </strong>] <br></br>

	- <code>Get</code>: The physics type of the shape that was hit.


- <code>valid</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the raycast hit a target or not.




## Functions

### getAreaTrigger

```lua
raycastResult:getAreaTrigger()
```

Returns the [AreaTrigger](/docs/Game-Script-Environment/Userdata/AreaTrigger) hit by the raycast, if the result type is <code>areaTrigger</code>.

<strong>Arguments:</strong> <br></br>

- <code>raycastResult</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/RaycastResult"> RaycastResult </a> </strong>]: The raycastResult.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/AreaTrigger"> AreaTrigger </a> </strong>]: The areaTrigger.

---

### getBody

```lua
raycastResult:getBody()
```

Returns the [Body](/docs/Game-Script-Environment/Userdata/Body) hit by the raycast, if the result type is <code>body</code>.

<strong>Arguments:</strong> <br></br>

- <code>raycastResult</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/RaycastResult"> RaycastResult </a> </strong>]: The raycastResult.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Body"> Body </a> </strong>]: The body.

---

### getCharacter

```lua
raycastResult:getCharacter()
```

Returns the [Character](/docs/Game-Script-Environment/Userdata/Character) hit by the raycast, if the result type is <code>character</code>.

<strong>Arguments:</strong> <br></br>

- <code>raycastResult</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/RaycastResult"> RaycastResult </a> </strong>]: The raycastResult.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>]: The character.

---

### getHarvestable

```lua
raycastResult:getHarvestable()
```

Returns the [Harvestable](/docs/Game-Script-Environment/Userdata/Harvestable) hit by the raycast, if the result type is <code>harvestable</code>.

<strong>Arguments:</strong> <br></br>

- <code>raycastResult</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/RaycastResult"> RaycastResult </a> </strong>]: The raycastResult.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.

---

### getJoint

```lua
raycastResult:getJoint()
```

Returns the [Joint](/docs/Game-Script-Environment/Userdata/Joint) hit by the raycast, if the result type is <code>joint</code>.

<strong>Arguments:</strong> <br></br>

- <code>raycastResult</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/RaycastResult"> RaycastResult </a> </strong>]: The raycastResult.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

---

### getLiftData

```lua
raycastResult:getLiftData()
```

Returns the [Lift](/docs/Game-Script-Environment/Userdata/Lift) hit by the raycast, if the result type is <code>lift</code>.

<strong>Arguments:</strong> <br></br>

- <code>raycastResult</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/RaycastResult"> RaycastResult </a> </strong>]: The raycastResult.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Lift"> Lift </a> </strong>]: The lift.
- [<strong> bool </strong>]: Whether you are looking at the lift's top face or not. (true if you are looking at the top face)

---


### getShape

```lua
raycastResult:getShape()
```

Returns the [Shape](/docs/Game-Script-Environment/Userdata/Shape) hit by the raycast, if the result type is <code>shape</code>.

<strong>Arguments:</strong> <br></br>

- <code>raycastResult</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/RaycastResult"> RaycastResult </a> </strong>]: The raycastResult.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Shape"> Shape </a> </strong>]: The shape.

---