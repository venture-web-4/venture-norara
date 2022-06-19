import { GameObject } from './GameObject.js';
import { ASTEROID_SPAWN_MANAGER, SCORE_MANAGER } from '../utils/singletons.js';

export class Asteroid extends GameObject {
  constructor(xPos, yPos, size, speed, status) {
    super(xPos, yPos, size, speed);
    this.status = status;
    this.isGlitter = false;
    this.glitterInterval = 10;
    this.glitterCoolTime = 0;
    this.moveTransitionInterval = 200;
    this.moveTransitionCoolTime = 0;
    this.speedTransitionInterval = 200;
    this.speedTransitionCoolTime = 0;
    this.rotationTransitionInterval = 40;
    this.rotationTransitionCoolTime = 0;
    this.rotateDegreeTransitionInterval = 100;
    this.rotateDegreeTransitionCoolTime = 0;
    this.rotateDegree = 0.001;
    this.debrisRemainTime = 500;
    this.yPositiveVertexes = [];
    this.yNegativeVertexes = [];
    this.makeShape();
  }

  static asteroids = [];

  static render() {
    const canvas = document.getElementById('asteroid-canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Asteroid.asteroids.forEach((asteroid, index) => {
      ctx.save();
      ctx.lineCap = 'square';
      ctx.strokeStyle = 'white';
      ctx.beginPath();
      ctx.translate(asteroid.xPos, asteroid.yPos);
      ctx.rotate(asteroid.rotation);
      ctx.moveTo(
        asteroid.yPositiveVertexes[0][0],
        asteroid.yPositiveVertexes[0][1]
      );
      ctx.lineTo(
        asteroid.yPositiveVertexes[1][0],
        asteroid.yPositiveVertexes[1][1]
      );
      ctx.lineTo(
        asteroid.yPositiveVertexes[2][0],
        asteroid.yPositiveVertexes[2][1]
      );
      ctx.lineTo(
        asteroid.yPositiveVertexes[3][0],
        asteroid.yPositiveVertexes[3][1]
      );
      ctx.lineTo(
        asteroid.yNegativeVertexes[3][0],
        asteroid.yNegativeVertexes[3][1]
      );
      ctx.lineTo(
        asteroid.yNegativeVertexes[2][0],
        asteroid.yNegativeVertexes[2][1]
      );
      ctx.lineTo(
        asteroid.yNegativeVertexes[1][0],
        asteroid.yNegativeVertexes[1][1]
      );
      ctx.lineTo(
        asteroid.yNegativeVertexes[0][0],
        asteroid.yNegativeVertexes[0][1]
      );
      ctx.lineTo(
        asteroid.yPositiveVertexes[0][0],
        asteroid.yPositiveVertexes[0][1]
      );
      if (asteroid.status === 0) {
        if (asteroid.isGlitter) {
          ctx.fillStyle = 'yellow';
          ctx.fill();
        }
        if (asteroid.glitterCoolTime <= 0) {
          asteroid.isGlitter = !asteroid.isGlitter;
          asteroid.glitterCoolTime = asteroid.glitterInterval;
        } else {
          asteroid.glitterCoolTime -= 1;
        }
      }
      ctx.stroke();
      ctx.closePath();
      ctx.restore();

      asteroid.move();
      asteroid.setDirection();
      asteroid.setSpeed();
      asteroid.rotate();
      asteroid.setRotation();
      asteroid.setRotateDegree();
      asteroid.removeDebris(index);
    });
  }

  makeShape() {
    const xPositivePoints = [];
    const xNegativePoints = [];
    const xPositiveVertexes = [];
    const xNegativeVertexes = [];
    const yPositiveVertexes = [];
    const yNegativeVertexes = [];
    let xPositiveMinusYFirstIndex;
    let xPositiveMinusYSecondIndex;
    let xNegativeMinusYFirstIndex;
    let xNegativeMinusYSecondIndex;

    for (let i = 0; i < 4; i++) {
      xPositivePoints.push(Math.random());
      xNegativePoints.push(-Math.random());
    }

    xPositivePoints.sort((a, b) => a - b);
    xNegativePoints.sort((a, b) => a - b);

    xPositiveMinusYFirstIndex = Math.floor(Math.random() * 4);
    xPositiveMinusYSecondIndex = Math.floor(Math.random() * 4);
    while (xPositiveMinusYFirstIndex === xPositiveMinusYSecondIndex) {
      xPositiveMinusYSecondIndex = Math.floor(Math.random() * 4);
    }
    xNegativeMinusYFirstIndex = Math.floor(Math.random() * 4);
    xNegativeMinusYSecondIndex = Math.floor(Math.random() * 4);
    while (xNegativeMinusYFirstIndex === xNegativeMinusYSecondIndex) {
      xNegativeMinusYSecondIndex = Math.floor(Math.random() * 4);
    }

    for (let i = 0; i < 4; i++) {
      if (i === xPositiveMinusYFirstIndex || i === xPositiveMinusYSecondIndex) {
        xPositiveVertexes.push(
          [xPositivePoints[i], -Math.sqrt(1 - xPositivePoints[i] ** 2)].map(
            n => n * this.size
          )
        );
      } else {
        xPositiveVertexes.push(
          [xPositivePoints[i], Math.sqrt(1 - xPositivePoints[i] ** 2)].map(
            n => n * this.size
          )
        );
      }
      if (i === xNegativeMinusYFirstIndex || i === xNegativeMinusYSecondIndex) {
        xNegativeVertexes.push(
          [xNegativePoints[i], -Math.sqrt(1 - xNegativePoints[i] ** 2)].map(
            n => n * this.size
          )
        );
      } else {
        xNegativeVertexes.push(
          [xNegativePoints[i], Math.sqrt(1 - xNegativePoints[i] ** 2)].map(
            n => n * this.size
          )
        );
      }
    }

    for (let i = 0; i < xNegativeVertexes.length; i++) {
      if (xNegativeVertexes[i][1] > 0) {
        yPositiveVertexes.push(xNegativeVertexes[i]);
      } else {
        yNegativeVertexes.push(xNegativeVertexes[i]);
      }
    }
    for (let i = 0; i < xPositiveVertexes.length; i++) {
      if (xPositiveVertexes[i][1] > 0) {
        yPositiveVertexes.push(xPositiveVertexes[i]);
      } else {
        yNegativeVertexes.push(xPositiveVertexes[i]);
      }
    }

    for (let i = 0; i < yPositiveVertexes.length; i++) {
      this.yPositiveVertexes.push(yPositiveVertexes[i]);
    }
    for (let i = 0; i < yNegativeVertexes.length; i++) {
      this.yNegativeVertexes.push(yNegativeVertexes[i]);
    }
  }

  setDirection() {
    if (this.moveTransitionCoolTime <= 0 && Math.random() < 0.3) {
      this.setDirectionByForce();
      this.moveTransitionCoolTime = this.moveTransitionInterval;
    } else {
      this.moveTransitionCoolTime -= 1;
    }
  }

  setDirectionByForce() {
    this.xDirectionVector = Math.random();
    this.yDirectionVector = Math.sqrt(1 - this.xDirectionVector ** 2);
    if (Math.random() < 0.5) {
      this.xDirectionVector *= -1;
    }
    if (Math.random() < 0.5) {
      this.yDirectionVector *= -1;
    }
  }

  setSpeed() {
    if (this.speedTransitionCoolTime <= 0 && Math.random() < 0.4) {
      this.speed = Math.random() * 0.75 + 0.75;
      this.speedTransitionCoolTime = this.speedTransitionInterval;
    } else {
      this.speedTransitionCoolTime -= 1;
    }
  }

  setRotation() {
    if (this.rotationTransitionCoolTime <= 0 && Math.random() < 0.5) {
      const newRotation = (Math.random() - 0.5) * Math.PI;
      this.leftRotation += newRotation;
      this.rotationTransitionCoolTime = this.rotationTransitionInterval;
    } else {
      this.rotationTransitionCoolTime -= 1;
    }
  }

  setRotateDegree() {
    if (this.rotateDegreeTransitionCoolTime <= 0 && Math.random() < 0.5) {
      this.rotateDegree = Math.random() * 0.005 + 0.001;
      this.rotateDegreeTransitionCoolTime = this.rotateDegreeTransitionInterval;
    } else {
      this.rotateDegreeTransitionCoolTime -= 1;
    }
  }

  move() {
    const distance = Math.sqrt(
      this.xDirectionVector ** 2 + this.yDirectionVector ** 2
    );
    let nextXPos = this.xPos + (this.xDirectionVector / distance) * this.speed;
    let nextYPos = this.yPos + (this.yDirectionVector / distance) * this.speed;

    if (this.checkNextPositionOutOfGameScreen(nextXPos, nextYPos)) {
      this.xDirectionVector = -this.xDirectionVector;
      this.yDirectionVector = -this.yDirectionVector;
    } else {
      this.xPos = nextXPos;
      this.yPos = nextYPos;
    }
  }

  checkNextPositionOutOfGameScreen(nextXPos, nextYPos) {
    return (
      nextXPos < this.size ||
      nextYPos < this.size ||
      nextXPos > 500 - this.size ||
      nextYPos > 500 - this.size
    );
  }

  attacked() {
    if (this.status > 1) {
      ASTEROID_SPAWN_MANAGER.spawnDividedAsteroid(
        Math.random() * 2,
        this.status - 1,
        this.xPos,
        this.yPos
      );
      ASTEROID_SPAWN_MANAGER.spawnDividedAsteroid(
        Math.random() * 2,
        this.status - 1,
        this.xPos,
        this.yPos
      );
    } else if (this.status === 1) {
      const debrisNum = Math.floor(Math.random() * 3 + 1);
      for (let i = 0; i < debrisNum; i++) {
        ASTEROID_SPAWN_MANAGER.spawnDividedAsteroid(
          Math.random() * 2,
          this.status - 1,
          this.xPos,
          this.yPos
        );
      }
    }
  }

  collected() {
    if (this.status === 0) {
      SCORE_MANAGER.collectCount += 1;
    }
  }

  removeDebris(index) {
    if (this.status === 0) {
      if (this.debrisRemainTime <= 0) {
        Asteroid.asteroids.splice(index, 1);
      } else {
        this.debrisRemainTime -= 1;
      }
    }
  }
}
