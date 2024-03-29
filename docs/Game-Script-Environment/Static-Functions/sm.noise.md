---
sidebar_position: 33
title: sm.noise
hide_title: true
sidebar-label: 'sm.noise'
---

<br></br>

## sm.noise

Contains methods related to random number and noise generation.

Most noise related functions are used for terrain generation.

## Functions

### floatNoise2d

```lua
sm.noise.floatNoise2d( x, y, seed )
```

A number noise 2D function.

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> number </strong>]: The X value.
- <code>y</code> [<strong> number </strong>]: The Y value.
- <code>seed</code> [<strong> int </strong>]: The seed.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The noise value.

---

### gunSpread

```lua
sm.noise.gunSpread( direction, spreadAngle )
```

Returns a directional vector with a random spread given by a [normal distribution](#randomnormaldistribution).

<strong>Arguments:</strong> <br></br>

- <code>direction</code> [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The direction.
- <code>spreadAngle</code> [<strong> number </strong>]: The spread angle in degrees.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/Game-Script-Environment/Userdata/Vec3"> Vec3 </a> </strong>]: The spread direction.

---

### intNoise2d

```lua
sm.noise.intNoise2d( x, y, seed )
```

An integer noise 2D function.

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> number </strong>]: The X value.
- <code>y</code> [<strong> number </strong>]: The Y value.
- <code>seed</code> [<strong> int </strong>]: The seed.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The noise value.

---

### octaveNoise2d

```lua
sm.noise.octaveNoise2d( x, y, octaves, seed )
```

An octave noise 2D function.

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> number </strong>]: The X value.
- <code>y</code> [<strong> number </strong>]: The Y value.
- <code>octaves</code> [<strong> int </strong>]: The octaves.
- <code>seed</code> [<strong> int </strong>]: The seed.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The noise value.

---

### perlinNoise2d

```lua
sm.noise.perlinNoise2d( x, y, seed )
```

A perlin noise 2D function.

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> number </strong>]: The X value.
- <code>y</code> [<strong> number </strong>]: The Y value.
- <code>seed</code> [<strong> int </strong>]: The seed.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The noise value.

---

### randomNormalDistribution

```lua
sm.noise.randomNormalDistribution( mean, deviation )
```

Returns a random number according to the normal [random number distribution](https://en.wikipedia.org/wiki/Normal_distribution).

Values near the <strong>mean</strong> are the most likely.

Standard <strong>deviation</strong> affects the dispersion of generated values from the mean.

<strong>Arguments:</strong> <br></br>

- <code>mean</code> [<strong> number </strong>]: The mean.
- <code>deviation</code> [<strong> number </strong>]: The deviation.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The random number.

---

### randomRange

```lua
sm.noise.randomRange( a, b )
```

Returns a random number N such that <code>a \<\= N \<\= b</code>.

<strong>Arguments:</strong> <br></br>

- <code>a</code> [<strong> number </strong>]: The lower bound.
- <code>b</code> [<strong> number </strong>]: The upper bound.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The random number.

---

### simplexNoise1d

```lua
sm.noise.simplexNoise1d( x )
```

A simplex noise 1D function.

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> number </strong>]: The X value.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The noise value.

---

### simplexNoise2d

```lua
sm.noise.simplexNoise2d( x, y )
```

A simplex noise 2D function.

<strong>Arguments:</strong> <br></br>

- <code>x</code> [<strong> number </strong>]: The X value.
- <code>y</code> [<strong> number </strong>]: The Y value.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The noise value.

---














