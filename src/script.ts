document.addEventListener("DOMContentLoaded", () => {
  const karel: Karel = new Karel();
  karel.loadLevel01();
});

document.addEventListener("DOMContentLoaded", () => {
  const karel: Karel = new Karel();

  const meinLevel = 3;

  if (meinLevel === 3) {
    karel.loadLevel03("a");
    for (let i = 0; i < 4; i++) {
      karel.move();
      if (karel.isOnBeeper()) karel.pickBeeper();
    }
  }
  else if (meinLevel === 4) {
    karel.loadLevel04("a");
    karel.move();
    if (karel.isWallInfront()) {
      karel.turnLeft(); karel.move();
      karel.turnLeft(); karel.turnLeft(); karel.turnLeft();
      karel.move(); karel.move();
      karel.turnLeft(); karel.turnLeft(); karel.turnLeft();
      karel.move(); karel.turnLeft();
    } else {
      karel.move(); karel.move(); karel.move();
    }
  }
  else if (meinLevel === 5) {
    karel.loadLevel05("a");
    karel.move(); karel.move();
    while (karel.isOnBeeper()) {
      karel.pickBeeper();
      karel.move();
    }
    while (!karel.isWallInfront()) karel.move();
  }
  else if (meinLevel === 6) {
    karel.loadLevel06("a");
    karel.move(); karel.move();
    while (karel.getBeeperCount() > 0) {
      karel.putBeeper();
      if (!karel.isWallInfront()) karel.move();
    }
    while (!karel.isWallInfront()) karel.move();
  }
});
