const Scene = require('Scene')
const Materials = require('Materials')
const Touch = require('TouchGestures')

// Import external modules from other folder or Node.js npm modules
const Counter = require('./utils/Counter.js')

// ==================================================

// New a instance from custom class Counter
const counter = new Counter()

// Allow to use ES7+ async function through babel
async function start() {
  // Find one asset from SparkAR
  const tapText = await Scene.root.findFirst('tapText')
  
  // Find multiple assets via Promise.all
  const assets = await Promise.all([
    Scene.root.findFirst('rect0'),
    Materials.findFirst('rectMat0'),
    Materials.findFirst('rectMat1')
  ])
  const [rect0, rectMat0, rectMat1] = assets

  // Add a tap event listener
  Touch.onTap(rect0).subscribe(async () => {
    // Toggle rect0's material
    const mat = await rect0.getMaterial()
    rect0.material = (mat.name === 'rectMat0') ? rectMat1 : rectMat0

    // Increase a number then replace the text
    counter.increment()
    tapText.text = `Tap ${counter.getCount}`
  })
}

start()