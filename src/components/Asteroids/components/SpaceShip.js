import { Missile } from './Missile.js';
import { GameObject } from './GameObject.js';
import { Asteroid } from './Asteroid.js';

export class SpaceShip extends GameObject {
    constructor(xPos, yPos, size, speed) {
        super(xPos, yPos, size, speed);
        this.xDestination = this.xPos;
        this.yDestination = this.yPos;
        this.rotateDegree = 0.15;
        this.isFire = false;
        this.fireInterval = 15;
        this.fireCoolTime = 0;
        this.fireKeys = ['A', 'a', 'ㅁ'];
        this.isSpaceShipDestroyed = false;
        document.addEventListener('keydown', this.startFire.bind(this), false);
        document.addEventListener('keyup', this.stopFire.bind(this), false);
    }

    setMainCanvas() {
        const mainCanvas = document.getElementById('main-canvas');
        if (mainCanvas !== null && mainCanvas !== undefined) {
            mainCanvas.addEventListener(
                'mousedown',
                this.setDestination.bind(this),
                false
            );
        }
    }

    setDestination(e) {
        this.xDestination = e.offsetX;
        this.yDestination = e.offsetY;

        if (this.xDestination < this.size) {
            this.xDestination = this.size;
        }
        if (this.xDestination > 500 - this.size) {
            this.xDestination = 500 - this.size;
        }
        if (this.yDestination < this.size) {
            this.yDestination = this.size;
        }
        if (this.yDestination > 500 - this.size) {
            this.yDestination = 500 - this.size;
        }

        this.setDirection();
    }

    setDirection() {
        let newRotation;
        const xPreDirection = this.xDirectionVector;
        const yPreDirection = this.yDirectionVector;

        this.xDirectionVector = this.xDestination - this.xPos;
        this.yDirectionVector = this.yDestination - this.yPos;
        newRotation =
            Math.atan2(this.yDirectionVector, this.xDirectionVector) -
            Math.atan2(yPreDirection, xPreDirection);

        if (newRotation > Math.PI) {
            newRotation -= Math.PI * 2;
        } else if (newRotation < -Math.PI) {
            newRotation += Math.PI * 2;
        }

        this.leftRotation += newRotation;
    }

    startFire(e) {
        for (let fireKey of this.fireKeys) {
            if (e.key === fireKey) {
                this.isFire = true;
                break;
            }
        }
    }

    stopFire(e) {
        for (let fireKey of this.fireKeys) {
            if (e.key === fireKey) {
                this.isFire = false;
                break;
            }
        }
    }

    fire() {
        if (this.isFire && this.fireCoolTime <= 0) {
            const missile = new Missile(
                this.xPos,
                this.yPos,
                3,
                5,
                this.xDirectionVector,
                this.yDirectionVector
            );
            Missile.missiles.push(missile);
            this.fireCoolTime = this.fireInterval;
        } else {
            this.fireCoolTime -= 1;
        }
    }

    render() {
        const canvas = document.getElementById('main-canvas');
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.lineCap = 'square';
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.translate(this.xPos, this.yPos);
        ctx.rotate(this.rotation);
        ctx.moveTo(0 + this.size, 0);
        ctx.lineTo(0 - this.size * 0.5, 0 - this.size * Math.sin(Math.PI / 3));
        ctx.lineTo(
            0 - this.size * 0.5,
            0 - this.size * Math.sin(Math.PI / 3) * 0.5
        );
        ctx.lineTo(0 - this.size / 6, 0);
        ctx.lineTo(0 - this.size * 0.5, this.size * Math.sin(Math.PI / 3) * 0.5);
        ctx.lineTo(0 - this.size * 0.5, this.size * Math.sin(Math.PI / 3));
        ctx.lineTo(0 + this.size, 0);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }

    move() {
        const distance = Math.sqrt(
            (this.xPos - this.xDestination) ** 2 +
            (this.yPos - this.yDestination) ** 2
        );

        if (
            this.xPos < this.xDestination - this.speed ||
            this.xPos > this.xDestination + this.speed
        ) {
            if (this.xDestination > this.xPos) {
                this.xPos +=
                    (this.speed * Math.abs(this.xPos - this.xDestination)) / distance;
            } else {
                this.xPos -=
                    (this.speed * Math.abs(this.xPos - this.xDestination)) / distance;
            }
        }

        if (
            this.yPos < this.yDestination - this.speed ||
            this.yPos > this.yDestination + this.speed
        ) {
            if (this.yDestination > this.yPos) {
                this.yPos +=
                    (this.speed * Math.abs(this.yPos - this.yDestination)) / distance;
            } else {
                this.yPos -=
                    (this.speed * Math.abs(this.yPos - this.yDestination)) / distance;
            }
        }
    }

    checkCollideWithAsteroid() {
        Asteroid.asteroids.forEach((asteroid, index) => {
            const distance = Math.sqrt(
                (asteroid.xPos - this.xPos) ** 2 + (asteroid.yPos - this.yPos) ** 2
            );
            if (distance < asteroid.size * 0.75 + this.size * 0.75) {
                if (asteroid.status > 0) {
                    this.isSpaceShipDestroyed = true;
                } else {
                    asteroid.collected();
                    Asteroid.asteroids.splice(index, 1);
                }
            }
        });
    }

    activate() {
        this.render();
        this.move();
        this.rotate();
        this.fire();
        this.checkCollideWithAsteroid();
    }
}
