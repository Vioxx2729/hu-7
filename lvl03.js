"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const karel = new Karel();
    karel.loadLevel03("a");
    // bis zur Position (5,1)
    for (let i = 0; i < 5; i++) {
        karel.move();
        if (karel.isOnBeeper()) {
            karel.pickBeeper();
        }
        if (i < 5) {
            karel.move();
        }
    }
});
