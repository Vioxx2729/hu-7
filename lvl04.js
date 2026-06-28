"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const karel = new Karel();
    karel.loadLevel04("a");
    karel.move();
    karel.turnLeft();
    karel.move();
    karel.turnLeft();
    karel.turnLeft();
    karel.turnLeft();
    if (karel.isWallInfront()) {
        karel.turnLeft();
        karel.turnLeft();
        karel.turnLeft();
        karel.move();
        karel.move();
        karel.turnLeft();
        karel.move();
        karel.move();
        karel.turnLeft();
        karel.move();
        karel.turnLeft();
        karel.turnLeft();
        karel.turnLeft();
        karel.move();
    }
    else {
        karel.move();
        karel.move();
        karel.turnLeft();
        karel.turnLeft();
        karel.turnLeft();
        karel.move();
        karel.turnLeft();
        karel.move();
    }
});
