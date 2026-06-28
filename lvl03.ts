document.addEventListener("DOMContentLoaded", () => {
    const karel = new Karel();

    karel.loadLevel03("a");

    // bis zur Position (5,1)
    for (let i = 0; i < 5; i++) {
        karel.move();

        // alle Beeper auf diesem Feld einsammeln
        while (karel.isOnBeeper()) {
            karel.pickBeeper();
        }
    }
});