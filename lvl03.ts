document.addEventListener("DOMContentLoaded", () => {
    const karel = new Karel();

    karel.loadLevel03("a");

    for (let i = 0; i < 5; i++) {
        karel.move();

        if (karel.isOnBeeper()) {
            karel.pickBeeper();
        }
    }
});