"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const karel = new Karel();
    karel.loadLevel06("a");
    karel.move();
    karel.move();
    while (karel.getBeeperCount() > 0) {
        karel.putBeeper();
        if (karel.getBeeperCount() > 0) {
            karel.move();
        }
    }
    while (!karel.isWallInfront()) {
        karel.move();
    }
});
