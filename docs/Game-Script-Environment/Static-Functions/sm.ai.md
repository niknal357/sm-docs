---
sidebar_position: 3
title: sm.ai
hide_title: true
sidebar-label: 'sm.ai'
---

<br></br>

## sm.ai

AI utility functions.

## Functions

### directPathAvailable

```lua
sm.ai.directPathAvailable( unit, position )
```

Checks if the unit can reach the target position by moving straight.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The target position.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the target position is directly reachable or not.

---

### getAimPosition

```lua
sm.ai.getAimPosition( character, target, range, width )
```

Returns true if the character can fire at the target within a given fire lane.

Also returns the aim position that allows the character to succeed.

<strong>Arguments:</strong> <br></br>

- <code>character</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>]: The firing character.
- <code>target</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Harvestable"> Harvestable </a>/character </strong>]: The target.
- <code>range</code> [<strong> number </strong>]: The maximum firing distance.
- <code>width</code> [<strong> number </strong>]: The width of the fire lane.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the character can fire at the target or not.
- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The aim position, if available.

---

### getBreachablePosition

```lua
sm.ai.getBreachablePosition( unit, position, range, attack )
```

Check if there's an attackable object between the unit and a position.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The target position.
- <code>range</code> [<strong> number </strong>]: The distance.
- <code>attack</code> [<strong> int </strong>]: The possible attack level from the attacker.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: True if a breachable object was found or no object was found. False if the found object is unbreachable.
- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The attackable position, if found.
- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Shape"> Shape </a>/<a href="/docs/Game-Script-Environment/Userdata/Harvestable"> Harvestable </a>/lift </strong>]: The object to attack.

---

### getClosestTree

```lua
sm.ai.getClosestTree( position, world )
```

Find the closest "tree" harvestable in a world.

<strong>Arguments:</strong> <br></br>

- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The position.
- <code>world</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/World"> World </a> </strong>]: The world.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The closest found tree.

---

### getClosestVisibleCharacterType

```lua
sm.ai.getClosestVisibleCharacterType( unit, uuid )
```

Returns the closest visible character with matching uuid.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.
- <code>uuid</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Uuid"> Uuid </a> </strong>]: The character uuid.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>]: The closest visible character.

---

### getClosestVisibleCrop

```lua
sm.ai.getClosestVisibleCrop( unit )
```

Returns the closest visible farming harvestable.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Harvestable"> Harvestable </a> </strong>]: The closest visible farming harvestable.

---

### getClosestVisiblePlayerCharacter

```lua
sm.ai.getClosestVisiblePlayerCharacter( unit )
```

Returns the closest visible player character.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>]: The closest visible player character.

---

### getClosestVisibleTeamOpponent

```lua
sm.ai.getClosestVisibleTeamOpponent( unit, color )
```

Returns the closest visible character that does not have the given color.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.
- <code>color</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Color"> Color </a> </strong>]: The color.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Character"> Character </a> </strong>]: The closest visible team opponent.

---

### getRandomCreationPosition

```lua
sm.ai.getRandomCreationPosition( body )
```

Returns a random position on the given body.

<strong>Arguments:</strong> <br></br>

- <code>body</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Body"> Body </a> </strong>]: The body.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The random position.

---

### isReachable

```lua
sm.ai.isReachable( unit, position )
```

Check if the unit can reach the target position by moving along a path.

<strong>Arguments:</strong> <br></br>

- <code>unit</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Unit"> Unit </a> </strong>]: The unit.
- <code>position</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The target position.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the position is reachable or not.

---













