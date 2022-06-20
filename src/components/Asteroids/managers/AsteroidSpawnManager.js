import { Asteroid } from '../components/Asteroid.js';

export class AsteroidSpawnManager {
  constructor(spaceShip) {
    this.spawnInterval = 500;
    this.spawnCoolTime = 0;
    this.spaceShip = spaceShip;
    this.minSpawnDistanceWithSpaceShip = 15;
    this.asteroidSize = [5, 20, 35, 50];
  }

  checkOutOfGameScreen(xPos, yPos, asteroidStatus) {
    const size = this.asteroidSize[asteroidStatus];
    return xPos < size || yPos < size || xPos > 500 - size || yPos > 500 - size;
  }

  selectSpawnPosition(asteroidStatus) {
    const gameScreenWidth = 500;
    const gameScreenHeight = 500;
    let spaceShipXPos = this.spaceShip.xPos;
    let spaceShipYPos = this.spaceShip.yPos;
    let xPos;
    let yPos;
    let distance;
    let minDistance =
      this.asteroidSize[asteroidStatus] +
      this.spaceShip.size +
      this.minSpawnDistanceWithSpaceShip;

    xPos = Math.random() * gameScreenWidth;
    yPos = Math.random() * gameScreenHeight;
    distance = Math.sqrt(
      (xPos - spaceShipXPos) ** 2 + (yPos - spaceShipYPos) ** 2
    );

    while (
      distance <= minDistance ||
      this.checkOutOfGameScreen(xPos, yPos, asteroidStatus)
    ) {
      xPos = Math.random() * gameScreenWidth;
      yPos = Math.random() * gameScreenHeight;
      distance = Math.sqrt(
        (xPos - spaceShipXPos) ** 2 + (yPos - spaceShipYPos) ** 2
      );
    }

    return [xPos, yPos];
  }

  spawnNewAsteroid(asteroidInitialSpeed, asteroidStatus) {
    const asteroidSize = this.asteroidSize[asteroidStatus];
    let xPos;
    let yPos;
    [xPos, yPos] = this.selectSpawnPosition(asteroidStatus);
    const asteroid = new Asteroid(
      xPos,
      yPos,
      asteroidSize,
      asteroidInitialSpeed,
      asteroidStatus
    );
    Asteroid.asteroids.push(asteroid);
  }

  spawnDividedAsteroid(asteroidInitialSpeed, asteroidStatus, xPos, yPos) {
    const asteroidSize = this.asteroidSize[asteroidStatus];
    const asteroid = new Asteroid(
      xPos,
      yPos,
      asteroidSize,
      asteroidInitialSpeed,
      asteroidStatus
    );
    Asteroid.asteroids.push(asteroid);
  }

  spawner() {
    if (this.spawnCoolTime <= 0) {
      const spawnNum = Math.floor(Math.random() * 2) + 3;
      for (let i = 0; i < spawnNum; i++) {
        const initialSpeed = Math.random() * 0.75 + 0.75;
        const status = Math.floor(Math.random() * 2 + 2);
        this.spawnNewAsteroid(initialSpeed, status);
      }
      this.spawnCoolTime = this.spawnInterval;
    } else {
      this.spawnCoolTime -= 1;
    }
  }
}
