---
sidebar_position: 43
title: sm.scriptableObject
hide_title: true
sidebar-label: 'sm.scriptableObject'
---

<br></br>

## sm.scriptableObject

**Associated object type:** [ScriptableObject](/docs/Game-Script-Environment/Userdata/ScriptableObject)

ScriptableObject creation.

## Functions

### createScriptableObject

```lua
sm.scriptableObject.createScriptableObject( uuid, params, world )
```
<code>Server-Only</code> <br></br>

Creates a new Scriptable Object.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The object's uuid.
- <code>params</code> [<strong> any </strong>]: Extra data. Available as <code>self.params</code> in the object's script. Optional.
- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world this script belongs to, for world dependent api calls. Defaults to <code>sm.world.ids.noWorld</code>.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/ScriptableObject"> ScriptableObject </a> </strong>]: The created object.

---


