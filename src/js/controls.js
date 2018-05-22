function keyDown(playerKeyPress) {
    console.log("hello down " + playerKeyPress.keyCode)
    var keyPressed = playerKeyPress.keyCode;
    if (keyPressed == 38)
        upPressed = 1;
    if (keyPressed == 40)
        downPressed = 1;
    if (keyPressed == 37)
        leftPressed = 1;
    if (keyPressed == 39)
        rightPressed = 1;
}

function keyUp(playerKeyPress) {
    console.log("hello up " + playerKeyPress.keyCode)
    var keyPressed = playerKeyPress.keyCode;
    if (keyPressed == 38)
        upPressed = 0;
    if (keyPressed == 40)
        downPressed = 0;
    if (keyPressed == 37)
        leftPressed = 0;
    if (keyPressed == 39)
        rightPressed = 0;
}

module.exports = {
    keyDown: keyDown,
    keyUp: keyDown
};