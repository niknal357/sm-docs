---
sidebar_position: 39
title: sm.portal
hide_title: true
sidebar-label: 'sm.portal'
---

<br></br>

## sm.portal

**Associated object type:** [Portal](/docs/Game-Script-Environment/Userdata/Portal)

A <strong>portal</strong> moves objects inside a box to another box in another place.

## Functions

### addWorldPortalHook

```lua
sm.portal.addWorldPortalHook( world, name, portal )
```
<code>Server-Only</code> <br></br>

Adds a hook that a new world can find to hook up the other side of a portal.

<strong>Arguments:</strong> <br></br>

- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The target world.
- <code>name</code> [<strong> string </strong>]: The portal name.
- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.

---

### createPortal

```lua
sm.portal.createPortal( size )
```
<code>Server-Only</code> <br></br>

Creates a new portal.

<strong>Arguments:</strong> <br></br>

- <code>size</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The size.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The created portal.

---

### destroy

```lua
sm.portal.destroy( portal )
```
<code>Server-Only</code> <br></br>

Destroys the portal.

<strong>Arguments:</strong> <br></br>

- <code>portal</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal.

---

### popWorldPortalHook

```lua
sm.portal.popWorldPortalHook( name )
```
<code>Server-Only</code> <br></br>

Finds and pops the world hook for this world if present.

<strong>Arguments:</strong> <br></br>

- <code>name</code> [<strong> string </strong>]: The portal name.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Portal"> Portal </a> </strong>]: The portal. Nil if nothing was found.

---


