# Overview
This is a boilerplate that compile ES2016 and higher to SparkAR via Babel 7.10 + Webpack.

### async function
You can use async function to replace Promise's then chain in SparkAR v85 or higher.

```
const Scene = require('Scene')
const Diagnostics = require('Diagnostics')

async function start() {
  const plane0 = await Scene.root.findFirst('plane0')
  Diagnostics.log(plane0.name)
}

start()

// print 'plane0' in SparkAR console
```

### babel v7.10

The boilerplate used babel `7.10`. So, we can use ES2020's feature like class private properties or optional chaining if need be.

```
// Class private properies or methods
class Foo {
  #x = 0
  get x() {
    return this.#x
  }
}

const foo = new Foo()

Diagnostics.log(foo.x)   // 0
Diagnostics.log(foo.#x)  // webpack SyntaxError. Private name #x is not defined


// Optional chaining
const obj = { a: 1 }

Diagnostics.log(obj?.a)  // 1
Diagnostics.log(obj?.b)  // null/undefined
```

### Splitting scripts with folder
SparkAR allows to across multiple files, but we can't create folder for script files. By webpack, we can create folder to manage our files.

## Installation
1. Clone or download zip from this repository.
1. install dependency module from npm
```
$ npm install
```
3. Build it for first running.
```
$ npm run build
```

## Usage

### Development
Watch files from `./src/index.js` and auto build our code to `./sparkAR/scripts/script.js`. SparkAR will refresh scene.
```
$ npm run dev
```

### Production
Build a minified file for production.
```
$ npm run build
```

