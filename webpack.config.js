const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/page-load.js', './src/home.js', './src/menu.js', './src/contact.js'],
  devtool:'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module:{
    rules:[
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
    ],
  },
};