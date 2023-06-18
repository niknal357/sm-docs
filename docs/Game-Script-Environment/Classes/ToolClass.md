---
sidebar_position: 3
title: ToolClass
hide_title: true
sidebar-label: 'ToolClass'
---

<br></br>

### ToolClass
A script class that is instanced for every active [Tool](/docs/Game-Script-Environment/Userdata/Tool) in the game.

A tool is something that a [Player](/docs/Game-Script-Environment/Userdata/Player) can equip by selecting it in the hotbar, for example the Sledgehammer.

The class can receive events sent with [sm.event.sendToTool](/docs/Game-Script-Environment/Static-Functions/sm.event#sendtotool).

The fields below are accessed using <code>self.fieldName</code> in the ToolClass script:

<strong>Fields:</strong>

| Type        | Name           | Description |
| ----------- | -----------    | ----------- |
| [Tool](/docs/Game-Script-Environment/Userdata/Tool) | tool | The [Tool](/docs/Game-Script-Environment/Userdata/Tool) game object belonging to this class instance. |
| [Network](/docs/Game-Script-Environment/Userdata/Network) | network | A [Network](/docs/Game-Script-Environment/Userdata/Network) object that can be used to send data between client and server. |
| [Storage](/docs/Game-Script-Environment/Userdata/Storage) | storage | A server-side [Storage](/docs/Game-Script-Environment/Userdata/Storage) object that can be used to save and load data to/from the world database. |
| any | data | Data from the <code>data</code> entry in the tool's JSON file entry. |

<strong>Callbacks:</strong> <br></br>

## Client-only

### onEquip

```lua
function ToolClass.client_onEquip( self, animate )
end
```
Called when the a [Player](/docs/Game-Script-Environment/Userdata/Player) equips the [Tool](/docs/Game-Script-Environment/Userdata/Tool).

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>animate</code> [<strong> bool </strong>]: A boolean indicating whether the event should be animated or not.

---

### onUnequip

```lua
function ToolClass.client_onUnequip( self, animate )
end
```
Called when the a [Player](/docs/Game-Script-Environment/Userdata/Player) unequips the [Tool](/docs/Game-Script-Environment/Userdata/Tool).

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>animate</code> [<strong> bool </strong>]: A boolean indicating whether the event should be animated or not.

---

### onEquippedUpdate

```lua
function ToolClass.client_onEquippedUpdate( self, primaryState, secondaryState, forceBuild )
	return true, true --first boolean blocks other primary actions, second boolean blocks other secondary actions
end
```
Called every frame for the currently equipped [Tool](/docs/Game-Script-Environment/Userdata/Tool).

:::info note
Swinging the sledgehammer is a typical example where you want to block other primary input.

Force building is an example where the primary input action is not blocked.

Not blocking secondary input allows shape removal while the tool is equipped.
:::

See [sm.tool.interactState](/docs/Game-Script-Environment/Constants#smtoolinteractstate) for details about the primary and secondary state.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.
- <code>primaryState</code> [<strong> int </strong>]: The interact state of the primary (left) mouse button.
- <code>secondaryState</code> [<strong> int </strong>]: The interact state of the secondary (right) mouse button.
- <code>forceBuild</code> [<strong> bool </strong>]: The interact state of the <code>Force Build</code> key (default <code>F</code>).

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: A boolean indicating whether other primary actions should be blocked (defaults to false).
- [<strong> bool </strong>]: A boolean indicating whether other secondary actions should be blocked (defaults to false).

---

### onToggle

```lua
function ToolClass.client_onToggle( self )
	return true --true or false, default false
end
```
Called when the [Player](/docs/Game-Script-Environment/Userdata/Player) presses a toggle key with the [Tool](/docs/Game-Script-Environment/Userdata/Tool) equipped (default <code>Q</code> and <code>Shift + Q</code>).

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: A boolean that indicates if other toggle actions should be blocked (rotating shapes). Defaults to false.

---

### onReload

```lua
function ToolClass.client_onReload( self )
	return true --true or false, default false
end
```
Called when the [Player](/docs/Game-Script-Environment/Userdata/Player) presses the <code>Reload</code> key with the [Tool](/docs/Game-Script-Environment/Userdata/Tool) equipped (default <code>R</code>).

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: A boolean that indicates if other reload actions should be blocked (<code>PlayerClass.client_onReload</code>). Defaults to false.

---

### canEquip

```lua
function ToolClass.client_canEquip( self )
	return true --true or false, default false
end
```
This event is called to check whether the [Tool](/docs/Game-Script-Environment/Userdata/Tool) can be equipped.

<strong>Arguments:</strong> <br></br>

- <code>self</code> [<strong> table </strong>]: The class instance.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: A boolean that indicates if the [Tool](/docs/Game-Script-Environment/Userdata/Tool) can be equipped. Defaults to true.

---




