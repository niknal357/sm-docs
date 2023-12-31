---
sidebar_position: 15
title: sm.vec3
hide_title: true
sidebar-label: 'sm.vec3'
---

<br></br>

## sm.vec3

**Associated object type:** [Vec3](/docs/Terrain-Script-Environment/Userdata/Vec3)

A <strong>vector</strong> is used to represent position and direction in 3D space, using X, Y and Z coordinates.

To create one, use [sm.vec3.new](#new).

## Functions

### bezier2

```lua
sm.vec3.bezier2( c0, c1, c2, t )
```

Quadratic Bezier interpolation. Three dimensional bezier curve.

<strong>Arguments:</strong> <br></br>

- <code>c0</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The start point.
- <code>c1</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The control point.
- <code>c2</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The end point.
- <code>t</code> [<strong> number </strong>]: The interpolation step.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The interpolated vector.

---

### bezier3

```lua
sm.vec3.bezier3( c0, c1, c2, c3, t )
```

Cubic Bezier interpolation. Three dimensional bezier curve.

<strong>Arguments:</strong> <br></br>

- <code>c0</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The start point.
- <code>c1</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The first control point.
- <code>c2</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The second control point.
- <code>c3</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The end point.
- <code>t</code> [<strong> number </strong>]: The interpolation step.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The interpolated vector.

---

### closestAxis

```lua
sm.vec3.closestAxis( vec )
```

Finds the closest axis-aligned vector from the given vector.

<strong>Arguments:</strong> <br></br>

- <code>vec</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The vector.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The axis-aligned vector.

---

### getRotation

```lua
sm.vec3.getRotation( vec1, vec2 )
```

Returns a [quaternion](/docs/Game-Script-Environment/Userdata/Quat) representing the rotation from one vector to another.

The quaternion can then be multiplied with any vector to rotate it in the same fashion.

<strong>Arguments:</strong> <br></br>

- <code>vec1</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The first vector.
- <code>vec2</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The second vector.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Quat"> Quat </a> </strong>]: The transformation.

```lua title="Example"
v1 = sm.vec3.new(1,0,0)
v2 = sm.vec3.new(0,1,0)

trans = sm.vec3.getRotation(v1, v2)
-- `trans` now rotates a vector 90 degrees

print(trans * v2)
-- { x = -1, y = 0, z = 0 }
```

---

### lerp

```lua
sm.vec3.lerp( vec1, vec2, t )
```

Performs a [linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation) between two vectors.

<strong>Arguments:</strong> <br></br>

- <code>vec1</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The first vector.
- <code>vec2</code> [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The second vector.
- <code>t</code> [<strong> number </strong>]: The interpolation amount between the two inputs.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The interpolated vector.

---

### new

```lua
sm.vec3.new( x, y, z )
```

Creates a new vector.

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> number </strong>]: The X value.
- <code>y</code> [<strong> number </strong>]: The Y value.
- <code>z</code> [<strong> number </strong>]: The Z value.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The created vector.

---

### one

```lua
sm.vec3.one()
```

Creates a new vector with 1 in X, Y and Z.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The created vector.

---

### zero

```lua
sm.vec3.zero()
```

Creates a new vector with 0 in X, Y and Z.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Terrain-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The created vector.

---