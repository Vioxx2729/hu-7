"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const karel = new Karel();
    karel.loadLevel04("a");
    karel.move();
    if (karel.isWallInfront()) {
        // Oberer Weg ist blockiert -> unten herum
        karel.turnLeft();
        karel.move();
        karel.turnLeft();
        karel.turnLeft();
        karel.turnLeft();
        karel.move();
        karel.move();
        karel.turnLeft();
        karel.turnLeft();
        karel.turnLeft();
        karel.move();
        karel.turnLeft();
        karel.move();
    }
    else {
        // Oberer Weg ist frei -> geradeaus
        karel.move();
        karel.move();
        karel.move();
    }
});
