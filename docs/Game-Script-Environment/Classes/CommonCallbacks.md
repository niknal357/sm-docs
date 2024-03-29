---
sidebar_position: 1
title: Common Callbacks
hide_title: true
sidebar-label: 'Common Callbacks'
---

<br></br>

### Common Fields and Callbacks

The callback functions listed below are available in <strong>every</strong> <code>ScriptClass</code>, <strong>in addition</strong> <br></br>
to that ScriptClass's own fields and callbacks.

## Server + Client

### onCreate

```lua
function Class.server_onCreate( self )
end
function Class.client_onCreate( self )
end
```
Called when the scripted object is created. <br></br>
This occurs when a new object is built, spawned, or loaded from the save file.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---

### onDestroy

```lua
function Class.server_onDestroy( self )
end
function Class.client_onDestroy( self )
end
```
Called when the scripted object is destroyed. <br></br>
This occurs when an object is erased, destroyed by an explosion, robot attack, etc.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---

### onRefresh

```lua
function Class.server_onRefresh( self )
end
function Class.client_onRefresh( self )
end
```
Called if the Lua script attached to the object is modified while the game is running. <br></br>

:::info note
This event requires Scrap Mechanic to be running with the <code>-dev</code> launch option. <br></br>
This will allow scripts to automatically refresh upon changes.
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

---

### onFixedUpdate

```lua
function Class.server_onFixedUpdate( self, timeStep )
end
function Class.client_onFixedUpdate( self, timeStep )
end
```
Called every game tick - 40 times per second. <br></br>
If the frame rate is lower than 40 fps, this event may be called twice. <br></br>

During a fixed update, physics and logic between interactables are updated.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>timeStep</code> [<strong> number </strong>]: The time period of a tick. (Always 0.025, a 1/40th of a second.)

---

## Client-only

### onUpdate

```lua
function Class.client_onUpdate( self, deltaTime )
end
```
Called every frame.

During a frame update, graphics, animations and effects are updated.

:::caution warning
Because of how frequent this event is called, the game's frame rate is greatly affected by the amount of code executed here.

For any non-graphics related code, consider using [client_onFixedUpdate](#onfixedupdate) instead.

If the event is not in use, consider removing it from the script (Event callbacks that are not implemented will not be called).
:::

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>deltaTime</code> [<strong> number </strong>]: Delta time since the last frame.

---

### onClientDataUpdate

```lua
function Class.client_onClientDataUpdate( self, data, channel )
end
```
Called when the client receives new client data updates from the server set with [Network:setClientData](/docs/Game-Script-Environment/Userdata/Network#setclientdata).

Data set in this way is persistent and the latest data will automatically be sent to new clients.

The data will arrive after client_onCreate during the same tick.

Channel 1 will be received before channel 2 if both are updated.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>data</code> [<strong> any </strong>]: Any lua object set with <code>Network:setClientData</code>.
- <code>channel</code> [<strong> int </strong>]: Client data channel, 1 or 2. (default: 1)

---







