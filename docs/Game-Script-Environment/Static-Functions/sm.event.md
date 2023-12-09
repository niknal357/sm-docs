---
sidebar_position: 20
title: sm.event
hide_title: true
sidebar-label: 'sm.event'
---

<br></br>

## sm.event

Events for communicating between scripts by running callbacks.

## Functions

### sendToCharacter

```lua
sm.event.sendToCharacter( character, callback, data )
```

Sends an event to the specified [Character](/docs/Game-Script-Environment/Userdata/Character)'s script. <br></br>
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>]: The character.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the character script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToGame

```lua
sm.event.sendToGame( callback, data )
```

Sends an event to the game script. <br></br>
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the game script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToHarvestable

```lua
sm.event.sendToHarvestable( harvestable, callback, data )
```

Sends an event to the specified [harvestable](/docs/Game-Script-Environment/Userdata/Harvestable)'s script. <br></br>
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>harvestable</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The harvestable.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the harvestable script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToInteractable

```lua
sm.event.sendToInteractable( interactable, callback, data )
```

Sends an event to the specified [interactable](/docs/Game-Script-Environment/Userdata/Interactable)'s script. <br></br>
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>interactable</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Interactable"> Interactable </a> </strong>]: The interactable.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the interactable script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToPlayer

```lua
sm.event.sendToPlayer( player, callback, data )
```

Sends an event to the specified [player](/docs/Game-Script-Environment/Userdata/Player)'s script. <br></br>
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the player script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToScriptableObject

```lua
sm.event.sendToScriptableObject( scriptableObject, callback, data )
```

Sends an event to the specified [scriptableObject](/docs/Game-Script-Environment/Userdata/ScriptableObject)'s script. <br></br>
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>scriptableObject</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/ScriptableObject"> ScriptableObject </a> </strong>]: The scriptable object.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the scriptableObject's script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToTool

```lua
sm.event.sendToTool( tool, callback, data )
```

Sends an event to the specified [tool](/docs/Game-Script-Environment/Userdata/Tool)'s script. <br></br>
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>tool</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Tool"> Tool </a> </strong>]: The tool.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the tool script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToUnit

```lua
sm.event.sendToUnit( unit, callback, data )
```

Sends an event to the specified [unit](/docs/Game-Script-Environment/Userdata/Unit)'s script. <br></br>
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the unit script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---

### sendToWorld

```lua
sm.event.sendToWorld( world, callback, data )
```

Sends an event to the specified [world](/docs/Game-Script-Environment/Userdata/World)'s script. <br></br>
The callback function is executed in the next Lua tick.

<strong>Arguments:</strong> <br></br>

- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world.
- <code>callback</code> [<strong> string </strong>]: The name of the callback function in the world script.
- <code>data</code> [<strong> any </strong>]: Extra data to send to the callback function.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the callback function was found or not.

---













