const nodeResolve = require('rollup-plugin-node-resolve')
const path = require('path')

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    ts: {
      default: {
        tsconfig: './tsconfig.json'
      }
    },
    /*"rollup": {
      options: {
        plugins: [
          nodeResolve()
        ],
        format: 'es',
        sourceMap: true
      },
      files:{
        'dest':'scripts/bundle.js',
        'src': 'scripts/app.js'
      }
    },*/
    "webpack": {
      "config": {
        entry:'./build/app.js',
        output: {
          filename: 'main.js',
          path: path.resolve(__dirname, 'dist')
        }
      }
    },
    'http-server': {
      'dev': {
        root: "./",
        port: 4565,
        host: "0.0.0.0",
        ext: "html",
        runInBackground: false,
        openBrowser: false
      }
    }
  });
  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.registerTask('default', ["ts", "webpack", "http-server:dev"]);
};

