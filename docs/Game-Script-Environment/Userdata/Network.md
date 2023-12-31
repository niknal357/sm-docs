---
sidebar_position: 17
title: Network
hide_title: true
sidebar-label: 'Network'
---

<br></br>

## Network

A userdata object representing a <strong>network</strong> object.

Network is used for sending data between scripts running on [server](/docs/#server) and [client](/docs/#client). <br></br>
This allows the server to call a function on the client with one optional argument, and vice versa.

:::info note
The network object is only accessible via <code>self.network</code> in scripted objects (see [classes](/docs/Game-Script-Environment/Classes/CommonCallbacks)).
:::

:::caution warning
Network allows any Lua data to be sent between the host and other players in real-time. <br></br>
This may result in <strong>high latency</strong> and <strong>lag</strong> in multiplayer.

To avoid lag and minimize bandwidth usage, consider only sending data when necessary, <br></br>
when data has changed, and attempt to send as little amount of data as possible.
:::

## Functions

### sendToClient

```lua
network:sendToClient( client, callback, data )
```
<code>Server-Only</code> <br></br>

Sends a network event from the server to a single client. <br></br>
This will run the callback method on the client with one optional argument.

<strong>Arguments:</strong> <br></br>

- <code>network</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Network"> Network </a> </strong>]: The network.
- <code>client</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The client player (or the host).
- <code>callback</code> [<strong> string </strong>]: The name of the client function.
- <code>data</code> [<strong> any </strong>]: Optional extra data to send.

---

### sendToClients

```lua
network:sendToClients( callback, data )
```
<code>Server-Only</code> <br></br>

Sends a network event from the server to all clients. <br></br>
This will run the callback method on the clients with one optional argument.

<strong>Arguments:</strong> <br></br>

- <code>network</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Network"> Network </a> </strong>]: The network.
- <code>callback</code> [<strong> string </strong>]: The name of the client function.
- <code>data</code> [<strong> any </strong>]: Optional extra data to send.

```lua title="Example Usage"
-- Example of calling client function over network
MyHorn = class()

function MyHorn.server_onMelee( self, position, attacker, damage, power, direction, normal )
	self.network:sendToClients( 'client_hit', position )
end
 
function MyHorn.client_hit( self, position )
	-- Play sound
	sm.audio.play( 'Horn', position )
end
```

---

### sendToServer

```lua
network:sendToServer( callback, data )
```
<code>Client-Only</code> <br></br>

Sends a network event from the client to the server. <br></br>
This will run the callback method on the server with one optional argument.

The callback function receives one additional argument, which is the [player](/docs/Game-Script-Environment/Userdata/Player) of the client <br></br>
that sent the event.

<strong>Arguments:</strong> <br></br>

- <code>network</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Network"> Network </a> </strong>]: The network.
- <code>callback</code> [<strong> string </strong>]: The name of the server function.
- <code>data</code> [<strong> any </strong>]: Optional extra data to send.

```lua title="Example Usage"
-- Example of calling server function over network
MySwitch = class()

function MySwitch.client_onInteract( self, char, lookAt )
	if lookAt then
		self.network:sendToServer( 'server_toggle' )
	end
end

function MySwitch.server_toggle( self )
	-- Toggle on and off
	self.interactable.active = not self.interactable.active
end
```

---

### setClientData

```lua
network:setClientData( data, channel )
```
<code>Server-Only</code> <br></br>

Sets a lua object that will automatically be synchronized to clients.

Scripts which use this feature needs to implement <code>client_onClientDataUpdate</code>.

<code>client_onClientDataUpdate</code> will be called on the client whenever the data has changed, <br></br>
including setting the data for the first time.

Channel 1 will be received before channel 2 if both are updated.

:::info note
The callback function on the client is **only** called if the <br></br>
data that is being set **has changed**. <br></br>
If the data being set is **the same**, the client callback is **not** called.
:::

<strong>Arguments:</strong> <br></br>

- <code>network</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Network"> Network </a> </strong>]: The network.
- <code>data</code> [<strong> any </strong>]: The data to set.
- <code>channel</code> [<strong> int </strong>]: The data channel (1 or 2, defaults to 1).

```lua title="Example Usage"
MyEngine = class()

function MyEngine.server_onCreate( self )
	self.network:setClientData( { "gear" = 1 } )
end

function MyEngine.client_onClientDataUpdate( self, data, channel )
	self.interactable:setPoseWeight( 0, data.gear / self.maxGears )
end
```

---











