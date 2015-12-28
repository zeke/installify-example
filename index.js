'use strict'

const fs              = require('fs')
const path            = require('path')
const babelify        = require('babelify')
const browserify      = require('browserify')
const installify      = require('installify')
const concat          = require('concat-stream')

browserify('./lazy.js')
  .transform('babelify', {presets: ['es2015']})
  .transform(installify)
  .bundle()
  .pipe(concat(function(buffer){
    console.log(buffer.toString())
  }))
