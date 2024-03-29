---
sidebar_position: 14
title: Joint
hide_title: true
sidebar-label: 'Joint'
---

<br></br>

## Joint

**Associated namespace:** [sm.joint](/docs/Game-Script-Environment/Static-Functions/sm.joint)

A userdata object representing a <strong>joint</strong> (bearing, piston, etc.) in the game.

<strong>Values:</strong>

- <code>angle</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The bearing's angle.


- <code>angularVelocity</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The bearing's angular velocity.


- <code>appliedImpulse</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The bearing's applied impulse.


- <code>color</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Color"> Color </a> </strong>] <br></br>

	- <code>Get</code>: The joint's color.


- <code>id</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The joint's id.


- <code>length</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The piston's current length in blocks.


- <code>localPosition</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>] <br></br>

	- <code>Get</code>: The joint's local position.


- <code>localRotation</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>] <br></br>

	- <code>Get</code>: The joint's local rotation.


- <code>reversed</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: Whether the bearing is reversed (counterclockwise) or not.


- <code>shapeA</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Shape"> Shape </a> </strong>] <br></br>

	- <code>Get</code>: The joint's parent shape. This shape always exists.


- <code>shapeB</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Shape"> Shape </a> </strong>] <br></br>

	- <code>Get</code>: The joint's child shape or nil if no shape is attached.


- <code>type</code> [<strong> string </strong>] <br></br>

	- <code>Get</code>: The joint's type.


- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>] <br></br>

	- <code>Get</code>: The joint's uuid.


- <code>worldPosition</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>] <br></br>

	- <code>Get</code>: The joint's world position.


- <code>xAxis</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>] <br></br>

	- <code>Get</code>: The joint's local x-axis vector.


- <code>yAxis</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>] <br></br>

	- <code>Get</code>: The joint's local y-axis vector.


- <code>zAxis</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>] <br></br>

	- <code>Get</code>: The joint's local z-axis vector.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>Joint</code> == <code>Joint</code> | Checks if two instances of <code>Joint</code> refer to the same <code>Joint</code>. |

## Functions

### createBlock

```lua
joint:createBlock( uuid, size, position, forceCreate )
```
<code>Server-Only</code> <br></br>

Creates a block on the joint.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.
- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The shape uuid.
- <code>size</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The shape size.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The shape's local position.
- <code>forceCreate</code> [<strong> bool </strong>]: Whether to force creating the shape or not. Defaults to true.

---

### createPart

```lua
joint:createPart( uuid, position, zAxis, xAxis, forceCreate )
```
<code>Server-Only</code> <br></br>

Creates a part on the joint.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.
- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The shape uuid.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The shape's local position.
- <code>zAxis</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The shape's local z direction.
- <code>xAxis</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The shape's local x direction.
- <code>forceCreate</code> [<strong> bool </strong>]: Whether to force creating the shape or not. Defaults to true.

---

### getAngle

```lua
bearing:getAngle()
```

Returns the bearing's angle.

<strong>Arguments:</strong> <br></br>

- <code>bearing</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The bearing.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The bearing's angle (-math.pi - +math.pi).

---

### getAngularVelocity

```lua
bearing:getAngularVelocity()
```

Returns the bearing's angular velocity.

This velocity can be set using [setMotorVelocity](#setmotorvelocity) or [setTargetAngle](#settargetangle).

<strong>Arguments:</strong> <br></br>

- <code>bearing</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The bearing.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The bearing's angular velocity.

---

### getAppliedImpulse

```lua
bearing:getAppliedImpulse()
```

Returns the bearing's applied impulse.

The applied impulse can be set using [setMotorVelocity](#setmotorvelocity) or [setTargetAngle](#settargetangle).

<strong>Arguments:</strong> <br></br>

- <code>bearing</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The bearing.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The bearing's applied impulse.

---

### getBoundingBox

```lua
joint:getBoundingBox()
```

Returns the joint's bounding box - the dimensions that it occupies when building.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The joint's bounding box.

---

### getColor

```lua
joint:getColor()
```

Returns the joint's color.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Color"> Color </a> </strong>]: The joint's color.

---

### setColor

```lua
joint:setColor( color )
```
<code>Server-Only</code> <br></br>

Sets the joint's color.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.
- <code>color</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Color"> Color </a> </strong>]: The color.

---

### getId

```lua
joint:getId()
```

Returns the joint's id.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The joint's id.

---

### getLength

```lua
piston:getLength()
```

Returns the piston's current length in blocks.

<strong>Arguments:</strong> <br></br>

- <code>piston</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The piston.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The joint's id.

---

### getLocalPosition

```lua
joint:getLocalPosition()
```

Returns the joint's local position.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The joint's local position.

---

### getLocalRotation

```lua
joint:getLocalRotation()
```

Returns the joint's local rotation.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The joint's local rotation.

---

### getShapeA

```lua
joint:getShapeA()
```

Returns the joint's parent shape. <br></br>
This is the shape that the joint is attached to. <br></br>
This shape always exists.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Shape"> Shape </a> </strong>]: The joint's parent shape.

---


### getShapeB

```lua
joint:getShapeB()
```

Returns the joint's child shape. <br></br>
This is the shape that is attached to the joint.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Shape"> Shape </a> </strong>]: The joint's child shape.

---

### getShapeUuid

```lua
joint:getShapeUuid()
```

Returns the joint's uuid.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The joint's uuid.

---

### getSticky

```lua
joint:getSticky()
```

Returns the sticky directions of the joint for positive xyz and negative xyz.

A value of 1 means that the direction is sticky and a value of 0 means that the direction is not sticky.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The negative sticky directions.
- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The positive sticky directions.

---

### getType

```lua
joint:getType()
```

Returns the joint's type.

For details, see [sm.joint.types](/docs/Game-Script-Environment/Constants#smjointtypes).

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The joint's type.

---

### getWorldPosition

```lua
joint:getWorldPosition()
```

Returns the joint's world position.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The joint's world position.

---

### getWorldRotation

```lua
joint:getWorldRotation()
```

Returns the joint's world rotation.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The joint's world rotation.

---

### getXAxis

```lua
joint:getXAxis()
```

Returns the joint's local x-axis vector.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The joint's x-axis vector.

---

### getYAxis

```lua
joint:getYAxis()
```

Returns the joint's local y-axis vector.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The joint's y-axis vector.

---

### getZAxis

```lua
joint:getZAxis()
```

Returns the joint's local z-axis vector.

<strong>Arguments:</strong> <br></br>

- <code>joint</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The joint.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The joint's z-axis vector.

---

### isReversed

```lua
bearing:isReversed()
```

Returns whether the bearing has been reversed using the Connect Tool. <br></br>
A reversed bearing rotates counterclockwise.

<strong>Arguments:</strong> <br></br>

- <code>bearing</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The bearing.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the bearing was reversed or not.

---

### setMotorVelocity

```lua
bearing:setMotorVelocity( targetVelocity, maxImpulse )
```

Sets the motor velocity for a bearing. The bearing will try to maintain the target velocity with the given amount of impulse/strength.

In Scrap Mechanic, the Gas Engine increases both velocity and impulse with every gear. <br></br>
The Electric Engine increases velocity, but maintains the same impulse for every gear, making it sturdier.

This method cancels the effects of [setTargetAngle](#settargetangle).

<strong>Arguments:</strong> <br></br>

- <code>bearing</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The bearing.
- <code>targetVelocity</code> [<strong> number </strong>]: The target velocity.
- <code>maxImpulse</code> [<strong> number </strong>]: The max impulse.

---

### setTargetAngle

```lua
bearing:setTargetAngle( targetAngle, targetVelocity, maxImpulse )
```

Sets the target angle for a bearing. The bearing will try to reach the target angle with the target velocity and the given amount of impulse/strength.

The target angle is set to range between <code>-math.pi</code> and <code>+math.pi</code>. <br></br>
The bearing will always try to rotate in the direction closest to the target angle.

This method cancels the effects of [setMotorVelocity](#setmotorvelocity).

<strong>Arguments:</strong> <br></br>

- <code>bearing</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The bearing.
- <code>targetAngle</code> [<strong> number </strong>]: The target angle.
- <code>targetVelocity</code> [<strong> number </strong>]: The target velocity.
- <code>maxImpulse</code> [<strong> number </strong>]: The max impulse.

---

### setTargetLength

```lua
piston:setTargetLength( targetLength, targetVelocity, maxImpulse )
```

Sets the target length for a piston. The piston will try to reach the target length with the target velocity and the given amount of impulse/strength.

The target length is measured in blocks.

This method cancels the effects of setMotorVelocity.

<strong>Arguments:</strong> <br></br>

- <code>piston</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Joint"> Joint </a> </strong>]: The piston.
- <code>targetLength</code> [<strong> number </strong>]: The target length.
- <code>targetVelocity</code> [<strong> number </strong>]: The target velocity.
- <code>maxImpulse</code> [<strong> number </strong>]: The max impulse.

---