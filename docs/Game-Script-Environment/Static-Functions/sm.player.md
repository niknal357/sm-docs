---
sidebar_position: 38
title: sm.player
hide_title: true
sidebar-label: 'sm.player'
---

<br></br>

## sm.player

**Associated object type:** [Player](/docs/Game-Script-Environment/Userdata/Player)

A <strong>player</strong> is a user playing the game. Every player controls a [Character](/docs/Game-Script-Environment/Userdata/Character) in the world.

## Functions

### getAllPlayers

```lua
sm.player.getAllPlayers()
```

Returns a table of all players that are currently in the game.

:::info note
When loading a world, there is a small period of time (a few ticks) during which this function <br></br>
will return an empty table (no players in the world yet)!

Because of this, it is <strong> not recommended </strong> to rely on this function returning a player <br></br>
when using it in a script's <code>server_onCreate</code> or <code>client_onCreate</code> callback.
:::

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The table of players.

---
