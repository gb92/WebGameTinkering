module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    ts: {
      default: {
        tsconfig: './tsconfig.json'
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
  grunt.loadNpmTasks('grunt-http-server');
  grunt.registerTask('default', ["ts","http-server:dev"]);
};

