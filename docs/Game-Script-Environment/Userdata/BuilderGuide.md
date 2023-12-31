---
sidebar_position: 5
title: BuilderGuide
hide_title: true
sidebar-label: 'BuilderGuide'
---

<br></br>

## BuilderGuide

**Associated namespace:** [sm.builderGuide](/docs/Game-Script-Environment/Static-Functions/sm.builderGuide)

A userdata object representing a <strong>builder guide</strong>.

<strong>Values:</strong>

- <code>id</code> [<strong> int </strong>] <br></br>

	- <code>Get</code>: The id of the guide.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>BuilderGuide</code> == <code>BuilderGuide</code> | Checks if two instances of <code>BuilderGuide</code> refer to the same <code>BuilderGuide</code>. |

## Functions

### destroy

```lua
builderGuide:destroy()
```

Destroys the guide.

<strong>Arguments:</strong> <br></br>

- <code>builderGuide</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/BuilderGuide"> BuilderGuide </a> </strong>]: The guide.

---

### getCurrentStageIndex

```lua
builderGuide:getCurrentStageIndex()
```

Returns the stage index of the guide.

<strong>Arguments:</strong> <br></br>

- <code>builderGuide</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/BuilderGuide"> BuilderGuide </a> </strong>]: The guide.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The stage index.

---

### getId

```lua
builderGuide:getId()
```

Returns the id of the guide.

<strong>Arguments:</strong> <br></br>

- <code>builderGuide</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/BuilderGuide"> BuilderGuide </a> </strong>]: The guide.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The guide's id.

---

### isComplete

```lua
builderGuide:isComplete()
```

Returns the completion status of the guide.

<strong>Arguments:</strong> <br></br>

- <code>builderGuide</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/BuilderGuide"> BuilderGuide </a> </strong>]: The guide.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: The guide's completion status.

---

### update

```lua
builderGuide:update()
```

Updates the state of the guide. <br></br>
Should be called whenever the root [Shape](/docs/Game-Script-Environment/Userdata/Shape) of the builder guide has changed.

<strong>Arguments:</strong> <br></br>

- <code>builderGuide</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/BuilderGuide"> BuilderGuide </a> </strong>]: The guide.

---



