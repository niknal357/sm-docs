---
sidebar_position: 45
title: sm.storage
hide_title: true
sidebar-label: 'sm.storage'
---

<br></br>

## sm.storage

**Associated object type:** [Storage](/docs/Game-Script-Environment/Userdata/Storage)

<strong>Storage</strong> is used for saving and loading any Lua data into the world's database. <br></br>
This allows for data to be retrieved after closing and reloading the world.

Storage can only be used on the [server](/docs/#server).

:::caution warning
Storage allows for data to be saved immediately into the world's database. <br></br>
This is a <strong>very slow</strong> process and should be done as sparsely as possible.

If you have data that is shared globally and updated often, consider using global variables instead. <br></br>
Ideally, storage should only be used to save data upon closing the world, or when saving a creation on the Lift.
:::

## Functions

### load

```lua
sm.storage.load( key )
```

Loads Lua data stored with a given key. The key can be any Lua object.

If no data is stored with the given key, this returns nil.

When used on the client, this function will return data saved with [saveAndSync](#saveandsync)

<strong>Arguments:</strong> <br></br>

- <code>key</code> [<strong> any </strong>]: The key.

<strong>Returns:</strong> <br></br>

- [<strong> any </strong>]: The stored data.

---

### save

```lua
sm.storage.save( key, data )
```
<code>Server-Only</code> <br></br>

Saves any Lua object with a given key. The key can be any lua object.

The data will remain stored after closing the world, and is retrieved using [load](#load), provided the same key.

:::info note
The data is stored globally <strong>within the current mod</strong>. As of such, keys will not collide with external mods and scripts.
:::

<strong>Arguments:</strong> <br></br>

- <code>key</code> [<strong> any </strong>]: The key to store the data with.
- <code>data</code> [<strong> any </strong>]: The data to be stored.

---

### saveAndSync

```lua
sm.storage.saveAndSync( key, data )
```
<code>Server-Only</code> <br></br>

Saves any Lua object with a given key and synchronizes it to all clients. The key can be any lua object.

The data will remain stored after closing the world, and is retrieved using [load](#load), provided the same key.

:::info note
The data is stored globally <strong>within the current mod</strong>. As of such, keys will not collide with external mods and scripts.
:::

<strong>Arguments:</strong> <br></br>

- <code>key</code> [<strong> any </strong>]: The key to store the data with.
- <code>data</code> [<strong> any </strong>]: The data to be stored.

---

