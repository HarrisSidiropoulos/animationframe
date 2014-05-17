/*
 * AnimationFrame
 * https://github.com/HarrisSidiropoulos/animationframe
 *
 * Copyright (c) 2014 
 * Licensed under the MIT license.
 */

'use strict';

var win;
if (typeof exports == 'object' && typeof module == 'object') {
  win = global;
} else {
  win = window;
}

var requestAnimFrame = (function () {
  return  win.requestAnimationFrame ||
    win.webkitRequestAnimationFrame ||
    win.mozRequestAnimationFrame ||
    win.oRequestAnimationFrame ||
    win.msRequestAnimationFrame ||
    function (callback) {
      win.setTimeout(callback, 1000 / 60);
    };
})();

// Support commonjs wrapper, amd define and plain window.
if (typeof exports == 'object' && typeof module == 'object') {
  module.exports = requestAnimFrame;
} else if (typeof define == 'function' && define.amd) {
  define(function() { return requestAnimFrame; })
} else {
  window.requestAnimFrame = requestAnimFrame;
}