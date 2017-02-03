(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "name": "minimal-icons",
  "version": "1.0.0",
  "devDependencies": {
    "babel-core": "^6.22.1",
    "babel-preset-es2015": "^6.22.0",
    "gulp": "3.9.1",
    "gulp-autoprefixer": "3.1.1",
    "gulp-browserify": "^0.5.1",
    "gulp-minify-css": "1.2.4",
    "gulp-rename": "^1.2.2",
    "gulp-sass": "2.3.2",
    "gulp-uglify": "2.0.0",
    "merge-stream": "1.0.0"
  },
  "scripts": {
    "dist": "rm -rf dist && gulp dist",
    "dev": "rm -rf dist && gulp"
  }
}

},{}],2:[function(require,module,exports){
function getGitTag() {
    const config = require('../../package.json');
    document.querySelector('#git-tag').innerHTML = `v${config.version}`;
}

getGitTag();
},{"../../package.json":1}]},{},[2])