---
sidebar_position: 9
title: CullSphereGroup
hide_title: true
sidebar-label: 'CullSphereGroup'
---

<br></br>

## CullSphereGroup

**Associated namespace:** [sm.cullSphereGroup](/docs/Game-Script-Environment/Static-Functions/sm.cullSphereGroup)

A userdata object representing a <strong>cull sphere group</strong>.

<strong>Values:</strong>

- <code>id</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The id of the sphere group.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>CullSphereGroup</code> == <code>CullSphereGroup</code> | Checks if two instances of <code>CullSphereGroup</code> refer to the same <code>CullSphereGroup</code>. |

## Functions

### addSphere

```lua
cullSphereGroup:addSphere( id, position, radius )
```

Adds a sphere to the sphere group, duplicate ids are ignored.

<strong>Arguments:</strong> <br></br>

- <code>cullSphereGroup</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/CullSphereGroup"> CullSphereGroup </a> </strong>]: The sphere group.
- <code>id</code> [<strong> int </strong>]: The sphere id.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The sphere position.
- <code>radius</code> [<strong> number </strong>]: The sphere radius.

---

### getDelta

```lua
cullSphereGroup:getDelta( position, innerRadius, outerRadius )
```

Queries the change in overlapping spheres since the last call to getDelta.

<strong>Arguments:</strong> <br></br>

- <code>cullSphereGroup</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/CullSphereGroup"> CullSphereGroup </a> </strong>]: The sphere group.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: Position to query sphere.
- <code>innerRadius</code> [<strong> number </strong>]: Radius for the inner sphere.
- <code>outerRadius</code> [<strong> number </strong>]: Radius for the outer sphere.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: A table of removed ids.
- [<strong> table </strong>]: A table of added ids.

---

### getOverlaps

```lua
cullSphereGroup:getOverlaps( position, radius )
```

Query for overlapping spheres.

<strong>Arguments:</strong> <br></br>

- <code>cullSphereGroup</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/CullSphereGroup"> CullSphereGroup </a> </strong>]: The sphere group.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: Position to query sphere.
- <code>radius</code> [<strong> number </strong>]: Radius for the query sphere.

---

### leave

```lua
cullSphereGroup:leave()
```

Query all currently active spheres and leave them.

<strong>Arguments:</strong> <br></br>

- <code>cullSphereGroup</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/CullSphereGroup"> CullSphereGroup </a> </strong>]: The sphere group.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: A table of previously active ids.

---

### removeSphere

```lua
cullSphereGroup:removeSphere( id )
```

Removes a sphere from the sphere group.

<strong>Arguments:</strong> <br></br>

- <code>cullSphereGroup</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/CullSphereGroup"> CullSphereGroup </a> </strong>]: The sphere group.
- <code>id</code> [<strong> int </strong>]: The sphere id.

---

