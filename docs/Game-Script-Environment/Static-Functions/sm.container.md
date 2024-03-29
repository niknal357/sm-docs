---
sidebar_position: 14
title: sm.container
hide_title: true
sidebar-label: 'sm.container'
---

<br></br>

## sm.container

**Associated object type:** [Container](/docs/Game-Script-Environment/Userdata/Container).

A <strong>container</strong> keeps track of items and stores them in slots. <br></br>
Each slot holds one item type and a quantity, if the item is stackable.

## Functions

### abortTransaction

```lua
sm.container.abortTransaction()
```
<code>Server-Only</code> <br></br>

Aborts a transaction.

---

### beginTransaction

```lua
sm.container.beginTransaction()
```
<code>Server-Only</code> <br></br>

Starts a new transaction shared across all containers. <br></br>
A transaction is a collection of all changes of container items that will be collected and processed.

A transaction must be ended with [sm.container.endTransaction](#endtransaction).

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the transaction was successfully started or not.

---

### collect

```lua
sm.container.collect( container, itemUuid, quantity, mustCollectAll )
```
<code>Server-Only</code> <br></br>

Adds a quantity of a given item to a container.

:::info note
A transaction must be [started](#begintransaction) before using this.
:::

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.
- <code>itemUuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The item uuid.
- <code>quantity</code> [<strong> int </strong>]: The item amount.
- <code>mustCollectAll</code> [<strong> bool </strong>]: Whether all items must be collected to make the transaction valid. Defaults to true.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The amount of collected items.

---

### collectToSlot

```lua
sm.container.collectToSlot( container, slot, itemUuid, quantity, mustCollectAll )
```
<code>Server-Only</code> <br></br>

Performs an [sm.container.collect](#collect) operation on a specific slot.

:::info note
A transaction must be [started](#begintransaction) before using this.
:::

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.
- <code>slot</code> [<strong> int </strong>]: The slot.
- <code>itemUuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The item uuid.
- <code>quantity</code> [<strong> int </strong>]: The item amount.
- <code>mustCollectAll</code> [<strong> bool </strong>]: Whether all items must be collected to make the transaction valid. Defaults to true.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The amount of collected items.

---

### endTransaction

```lua
sm.container.endTransaction()
```
<code>Server-Only</code> <br></br>

Ends a transaction.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the transaction was ended successfully or not.

---

### getFirstItem

```lua
sm.container.getFirstItem( container )
```

Returns a table containing item uuid, quantity (and instance id for tools) at the first available slot.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table containing the item data.

---

### itemUuid

```lua
sm.container.itemUuid( container )
```

Returns a table containing all item uuids in a container.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table containing the item uuids.

---

### moveAll

```lua
sm.container.moveAll( container, container, moveAll )
```
<code>Server-Only</code> <br></br>

Moves the content from one container to another.

:::info note
A transaction must be [started](#begintransaction) before using this.
:::

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The source container.
- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The target container.
- <code>moveAll</code> [<strong> bool </strong>]: Whether all items are required to be movable.

---

### moveAllToCarryContainer

```lua
sm.container.moveAllToCarryContainer( container, player, color )
```
<code>Server-Only</code> <br></br>

Moves the content of input container to the player carry container and assigns the carry color.

:::info note
A transaction must be [started](#begintransaction) before using this.
:::

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container to assign.
- <code>player</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Player"> Player </a> </strong>]: The player to receive the carry content and color.
- <code>color</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Color"> Color </a> </strong>]: The color to assign.

---

### quantity

```lua
sm.container.quantity( container )
```

Returns a table containing all item quantities in a container.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of item quantities.

---

### spend

```lua
sm.container.spend( container, itemUuid, quantity, mustSpendAll )
```
<code>Server-Only</code> <br></br>

Removes a quantity of a given item from a container.

:::info note
A transaction must be [started](#begintransaction) before using this.
:::

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.
- <code>itemUuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The item uuid.
- <code>quantity</code> [<strong> int </strong>]: The item amount.
- <code>mustSpendAll</code> [<strong> bool </strong>]: True = Only remove items if there are enough. False = Remove as many as possible. Defaults to true.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The amount of successfully removed items.

---

### spendFromSlot

```lua
sm.container.spendFromSlot( container, slot, itemUuid, quantity, mustSpendAll )
```
<code>Server-Only</code> <br></br>

Performs an [sm.container.spend](#spend) operation on a specific slot.

:::info note
A transaction must be [started](#begintransaction) before using this.
:::

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.
- <code>slot</code> [<strong> int </strong>]: The slot.
- <code>itemUuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The item uuid.
- <code>quantity</code> [<strong> int </strong>]: The item amount.
- <code>mustSpendAll</code> [<strong> bool </strong>]: True = Only remove items if there are enough. False = Remove as many as possible. Defaults to true.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The amount of successfully removed items.

---

### swap

```lua
sm.container.swap( container, container, sourceSlot, targetSlot )
```
<code>Server-Only</code> <br></br>

Swaps two item slots.

:::info note
A transaction must be [started](#begintransaction) before using this.
:::

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The first container.
- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The second container.
- <code>sourceSlot</code> [<strong> int </strong>]: The first slot.
- <code>targetSlot</code> [<strong> int </strong>]: The second slot.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the action was successful or not.

---

### totalQuantity

```lua
sm.container.totalQuantity( container, uuid )
```

Returns the total number of a given item uuid in a container.

<strong>Arguments:</strong> <br></br>

- <code>container</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Container"> Container </a> </strong>]: The container.
- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The item uuid.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The quantity of the given item uuid.

---







