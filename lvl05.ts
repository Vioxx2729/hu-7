document.addEventListener("DOMContentLoaded", () => {
    const karel = new Karel();

    karel.loadLevel05("b");

    karel.move();
    karel.move();

    while (!karel.isWallInfront()) {

        if (karel.isOnBeeper()) {
            karel.pickBeeper();
        }

        karel.move();
    }
});