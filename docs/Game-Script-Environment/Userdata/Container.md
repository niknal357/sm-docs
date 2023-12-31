---
sidebar_position: 8
title: Container
hide_title: true
sidebar-label: 'Container'
---

<br></br>

## Container

**Associated namespace:** [sm.container](/docs/Game-Script-Environment/Static-Functions/sm.container)

A userdata object representing a <strong>container</strong> in the game.

<strong>Values:</strong>

- <code>allowCollect</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: (Server-Only) Whether the container can collect items.
	- <code>Set</code>: (Server-Only) Sets whether the container can collect items or not.


- <code>allowSpend</code> [<strong> bool </strong>] <br></br>

	- <code>Get</code>: (Server-Only) Whether the container can spend items.
	- <code>Set</code>: (Server-Only) Sets whether the container can spend items or not.


- <code>id</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The id of the container.


- <code>size</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The number of slots in the container.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>Container</code> == <code>Container</code> | Checks if two instances of <code>Container</code> refer to the same <code>Container</code>. |

## Functions

### canCollect

```lua
container:canCollect( itemUuid, quantity )
```

Checks if [sm.container.collect](/docs/Game-Script-Environment/Static-Functions/sm.container#collect) is allowed using the same parameters.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.
- <code>itemUuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The uuid of the item.
- <code>quantity</code> [<strong> int </strong>]: The number of items.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the container can collect the item(s) or not.

---

### canSpend

```lua
container:canSpend( itemUuid, quantity )
```

Checks if [sm.container.spend](/docs/Game-Script-Environment/Static-Functions/sm.container#spend) is allowed using the same parameters.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.
- <code>itemUuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The uuid of the item.
- <code>quantity</code> [<strong> int </strong>]: The number of items.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the container can spend the item(s) or not.

---

### getAllowCollect

```lua
container:getAllowCollect()
```
<code>Server-Only</code> <br></br>

Returns whether the container can collect items.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the container can collect items or not.

---

### getAllowSpend

```lua
container:getAllowSpend()
```
<code>Server-Only</code> <br></br>

Returns whether the container can spend items.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the container can spend items or not.

---

### getItem

```lua
container:getItem( slot )
```

Returns a table containing item uuid, quantity (and instance id for tools) at the given slot.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.
- <code>slot</code> [<strong> int </strong>]: The slot.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table containing item information (see table content below).

<strong>Table Content:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The item UUID.
- <code>instance</code> [<strong> int </strong>]: The instance ID, if the item is a tool.
- <code>quantity</code> [<strong> int </strong>]: The item amount.

---

### getMaxStackSize

```lua
container:getMaxStackSize()
```

Returns the max stack size in the container.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The container's max stack size.

---

### getSize

```lua
container:getSize()
```

Returns the number of slots in a container.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The size.

---

### hasChanged

```lua
container:hasChanged( tick )
```

Returns true if the given tick is lower than the tick the container was last changed.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.
- <code>tick</code> [<strong> int </strong>]: The tick.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the container has changed or not.

---

### isEmpty

```lua
container:isEmpty()
```

Returns true if the container is empty.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the container is empty or not.

---

### setAllowCollect

```lua
container:setAllowCollect( state )
```
<code>Server-Only</code> <br></br>

Sets whether the container can collect items.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.
- <code>state</code> [<strong> bool </strong>]: Whether the container can collect items or not.

---

### setAllowSpend

```lua
container:setAllowSpend( state )
```
<code>Server-Only</code> <br></br>

Sets whether the container can spend items.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.
- <code>state</code> [<strong> bool </strong>]: Whether the container can spend items or not.

---

### setFilters

```lua
container:setFilters( filter )
```
<code>Server-Only</code> <br></br>

Sets item filters.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.
- <code>filter</code> [<strong> table </strong>]: The table of allowed item uuids.

---

### setItem

```lua
container:setItem( slot, itemUuid, quantity, instance )
```
<code>Server-Only</code> <br></br>

Sets the number of items stacked in a given container slot.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.
- <code>slot</code> [<strong> table </strong>]: The slot.
- <code>itemUuid</code> [<strong> table </strong>]: The uuid of the item.
- <code>quantity</code> [<strong> table </strong>]: The number of items.
- <code>instance</code> [<strong> table </strong>]: The instance id, if the item is a tool. (Optional)

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the action was successful or not.

---



