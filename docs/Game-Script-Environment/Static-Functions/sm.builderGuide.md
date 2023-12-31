---
sidebar_position: 7
title: sm.builderGuide
hide_title: true
sidebar-label: 'sm.builderGuide'
---

<br></br>

## sm.builderGuide

**Associated object type:** [BuilderGuide](/docs/Game-Script-Environment/Userdata/BuilderGuide)

Builder Guide

## Functions

### createBuilderGuide

```lua
sm.builderGuide.createBuilderGuide( path, shape, ignoreBlockUuid )
```

Creates a [BuilderGuide](/docs/Game-Script-Environment/Userdata/BuilderGuide), comparing the creation from the root [Shape](/docs/Game-Script-Environment/Userdata/Shape) to the blueprint given by the path.

<strong>Arguments:</strong> <br></br>

- <code>path</code> [<strong> string </strong>]: The file path to the builder guide blueprint.
- <code>shape</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Shape"> Shape </a> </strong>]: Root Shape for comparing the creation from.
- <code>ignoreBlockUuid</code> [<strong> bool </strong>]: Whether the block UUID should be ignored for stage completion. Defaults to false.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/BuilderGuide"> BuilderGuide </a> </strong>]: The created guide.

---




