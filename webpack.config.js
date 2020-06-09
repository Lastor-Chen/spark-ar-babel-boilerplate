const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'sparkAR', 'scripts'),
    filename: 'script.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: "commonjs",       // use module.exports
                  shippedProposals: true,    // allow the newest proposal features
                  bugfixes: true,            // reduce code output size, maybe
                }
              ]
            ],
            plugins: [
              "@babel/plugin-transform-runtime",  // translate async function to older ES version
            ]
          }
        }
      }
    ]
  },
  externals: {
    Animation: 'commonjs2 Animation',
    Diagnostics: 'commonjs2 Diagnostics',
    FaceTracking: 'commonjs2 FaceTracking',
    Audio: 'commonjs2 Audio',
    DeviceMotion: 'commonjs2 DeviceMotion',
    FaceTracking2D: 'commonjs2 FaceTracking2D',
    FaceGestures: 'commonjs2 FaceGestures',
    Fonts: 'commonjs2 Fonts',
    HandTracking: 'commonjs2 HandTracking',
    Instruction: 'commonjs2 Instruction',
    IrisTracking: 'commonjs2 IrisTracking',
    LightingEstimation: 'commonjs2 LightingEstimation',
    LiveStreaming: 'commonjs2 LiveStreaming',
    Locale: 'commonjs2 Locale',
    Patches: 'commonjs2 Patches',
    NativeUI: 'commonjs2 NativeUI',
    Persistence: 'commonjs2 Persistence',
    PersonSegmentation: 'commonjs2 PersonSegmentation',
    Random: 'commonjs2 Random',
    Reactive: 'commonjs2 Reactive',
    Scene: 'commonjs2 Scene',
    Time: 'commonjs2 Time',
    TouchGestures: 'commonjs2 TouchGestures',
    CameraInfo: 'commonjs2 CameraInfo',
    Materials: 'commonjs2 Materials',
    Textures: 'commonjs2 Textures',
  }
}