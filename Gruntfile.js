"use strict";

module.exports = function (grunt) {

    require('matchdep').filterDev(['grunt-*', 'gruntify-*']).forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        "pkg": grunt.file.readJSON('package.json'),

        "browserify": {
            proxy: {
                files: {
                    'dist/superagent-proxy.js': ['src/index.js']
                }
            }
        }

    });

    grunt.registerTask('default', ['browserify']);

};
