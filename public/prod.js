/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/controls.js":
/*!****************************!*\
  !*** ./src/js/controls.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function keyDown(playerKeyPress) {\n    console.log(\"hello down \" + playerKeyPress.keyCode);\n    var keyPressed = playerKeyPress.keyCode;\n    if (keyPressed == 38) upPressed = 1;\n    if (keyPressed == 40) downPressed = 1;\n    if (keyPressed == 37) leftPressed = 1;\n    if (keyPressed == 39) rightPressed = 1;\n}\n\nfunction keyUp(playerKeyPress) {\n    console.log(\"hello up \" + playerKeyPress.keyCode);\n    var keyPressed = playerKeyPress.keyCode;\n    if (keyPressed == 38) upPressed = 0;\n    if (keyPressed == 40) downPressed = 0;\n    if (keyPressed == 37) leftPressed = 0;\n    if (keyPressed == 39) rightPressed = 0;\n}\n\nmodule.exports = {\n    keyDown: keyDown,\n    keyUp: keyDown\n};\n\n//# sourceURL=webpack:///./src/js/controls.js?");

/***/ }),

/***/ "./src/js/createAsteroids.js":
/*!***********************************!*\
  !*** ./src/js/createAsteroids.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function createAsteroids() {\n\n    for (var i = 0; i < 100; i++) {\n\n        var asteroid = new Image();\n        asteroid.id = \"asteroid\" + i.toString();\n        asteroid.src = \"./img/asteroid.png\";\n        asteroid.style.height = (Math.random() * 6 + 0) * 30;\n        asteroid.style.position = \"absolute\";\n        asteroid.style.top = (Math.random() * 6 + 0) * 100;\n        asteroid.style.right = -200;\n        var asteroidPosition = asteroid.style.right;\n        var asteroidID = asteroid.id;\n\n        document.body.appendChild(asteroid);\n    }\n}\n\nmodule.exports = {\n    createAsteroids: createAsteroids\n};\n\n//# sourceURL=webpack:///./src/js/createAsteroids.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// THIS IS YOUR JAVASCRIPT DOCUMENT!\nlet makeAsteroids = __webpack_require__(/*! ./createAsteroids */ \"./src/js/createAsteroids.js\");\n// GENERATE ASTEROIDS IN HTML DOCUMENT\nlet controls = __webpack_require__(/*! ./controls */ \"./src/js/controls.js\");\n\n// MOVEMENT CONTROLS FOR SHIP\nmakeAsteroids.createAsteroids();\n\n// declare & initialize movement variables\nlet xPosition = 100;\nlet yPosition = 100;\nlet xSpeed = 1;\nlet ySpeed = 0;\nlet maxSpeed = 5;\n\n// declare & initialize controller variables\nlet upPressed = 0;\nlet downPressed = 0;\nlet leftPressed = 0;\nlet rightPressed = 0;\n\nfunction slowDownX() {\n  if (xSpeed > 0) xSpeed = xSpeed - 1;\n  if (xSpeed < 0) xSpeed = xSpeed + 1;\n}\n\nfunction slowDownY() {\n  if (ySpeed > 0) ySpeed = ySpeed - 1;\n  if (ySpeed < 0) ySpeed = ySpeed + 1;\n}\n\nlet shipHealth = 1000;\nlet loopCounter = 0;\nlet asteroidCounter = 0;\n\nfunction gameLoop() {\n\n  // SPACESHIP MOVEMENT\n  console.log(\"game started\");\n  // console.log(\"hello \" + e.key + \" \" + e.keyCode);\n  document.addEventListener(\"keydown\", controls.keyDown, false);\n\n  // console.log(\"hello there \" + e.key + \" \" + e.keyCode);\n  document.addEventListener(\"keyup\", controls.keyUp, false);\n\n  // new position\n  xPosition += xSpeed;\n  yPosition += ySpeed;\n\n  // actually change on-screen position by adjusting CSS\n  document.getElementById('ship').style.left = xPosition;\n  document.getElementById('ship').style.top = yPosition;\n\n  // change speed when user presses keys\n  if (upPressed == 1) ySpeed = Math.max(ySpeed - 1, -1 * maxSpeed);\n  if (downPressed == 1) ySpeed = Math.min(ySpeed + 1, 1 * maxSpeed);\n  if (rightPressed == 1) xSpeed = Math.min(xSpeed + 1, 1 * maxSpeed);\n  if (leftPressed == 1) xSpeed = Math.max(xSpeed - 1, -1 * maxSpeed);\n\n  // deceleration\n  if (upPressed == 0 && downPressed == 0) slowDownY();\n  if (leftPressed == 0 && rightPressed == 0) slowDownX();\n\n  // check position of ship on screen\n  var shipBox = document.getElementById('ship').getBoundingClientRect();\n\n  // ASTEROID MOVEMENT\n\n  // count how many times we've been through the gameLoop\n  loopCounter++;\n\n  // every 33 cycles (three times a second), launch a new asteroid BY GIVING IT A CLASS OF \"MOVING\"\n  // but only do this 100 times\n  if (loopCounter >= 32 && asteroidCounter <= 99) {\n    document.getElementById(\"asteroid\" + asteroidCounter.toString()).className = \"moving\";\n    asteroidCounter++;\n    loopCounter = 0;\n  }\n\n  // every cycle, check & update status of each moving asteroid\n  var arrayOfMovingAsteroids = document.getElementsByClassName(\"moving\");\n  for (var i = 0; i < arrayOfMovingAsteroids.length; i++) {\n\n    // move current asteroid 2px to the left (but remove it from the \"moving\" array if it's already offscreen)\n    if (parseInt(arrayOfMovingAsteroids[i].style.right) < 3000) {\n      arrayOfMovingAsteroids[i].style.right = parseInt(arrayOfMovingAsteroids[i].style.right) + 5 + 'px';\n    } else {\n      arrayOfMovingAsteroids[i].className = \"\";\n    }\n\n    // get \"bounding box\" of current asteroid\n    var asteroidBox = arrayOfMovingAsteroids[i].getBoundingClientRect();\n\n    // detect if asteroid's bounding box overlaps with space ship's bounding box\n    var collision = !(asteroidBox.right < shipBox.left || asteroidBox.left > shipBox.right || asteroidBox.bottom < shipBox.top + 30 || asteroidBox.top > shipBox.bottom - 30);\n\n    if (collision) {\n      shipHealth = shipHealth - parseInt(arrayOfMovingAsteroids[i].style.height); // ship loses number of health points relative to size of asteroid\n      if (shipHealth >= 0) {\n        document.getElementById(\"healthCounter\").innerHTML = \"SHIELDS: \" + shipHealth;\n      } else {\n        document.getElementById(\"healthCounter\").innerHTML = \"GAME OVER\";\n        document.getElementById('ship').style.display = 'none';\n      }\n      var audio = new Audio('./sounds/explosion.wav'); // load explosion sound (creative commons license: https://www.freesound.org/people/Veiler/sounds/264031/)\n      audio.play(); // play explosion sound\n      arrayOfMovingAsteroids[i].remove(); // asteroid disappears\n    }\n  }\n\n  // loop\n\n\n  setInterval(gameLoop, 10);\n}\n\ndocument.addEventListener(\"load\", gameLoop);\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });