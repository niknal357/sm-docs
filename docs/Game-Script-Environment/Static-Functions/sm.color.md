---
sidebar_position: 12
title: sm.color
hide_title: true
sidebar-label: 'sm.color'
---

<br></br>

## sm.color

**Associated object type:** [Color](/docs/Game-Script-Environment/Userdata/Color)

A color is represented using a red, green, blue and alpha component. <br></br>
Colors are prominently used for blocks and parts that are colored by the Paint Tool.

To create one, use [sm.color.new](#new). It is possible to use hex <code>0xRRGGBBAA</code>, RGBA <code>0, 0, 0, 0</code> or strings <code>"RRGGBBAA"</code>.

## Functions

### new

```lua
sm.color.new( r_hex, g, b, a )
```

Creates a new color object.

<strong>Arguments:</strong> <br></br>

- <code>r_hex</code> [<strong> number/string/hexInt </strong>]: The red value if using RGBA OR the hex string OR the hex int.
- <code>g</code> [<strong> number </strong>]: The green value, if using RGBA.
- <code>b</code> [<strong> number </strong>]: The blue value, if using RGBA.
- <code>a</code> [<strong> number </strong>]: The alpha value, if using RGBA (optional).

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Color"> Color </a> </strong>]: The created color object.

---
















