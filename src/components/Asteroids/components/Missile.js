import { GameObject } from './GameObject.js';
import { Asteroid } from './Asteroid.js';

export class Missile extends GameObject {
    constructor(xPos, yPos, size, speed, xDirectionVector, yDirectionVector) {
        super(xPos, yPos, size, speed);
        this.xDirectionVector = xDirectionVector;
        this.yDirectionVector = yDirectionVector;
    }

    static missiles = [];

    static render() {
        const canvas = document.getElementById('missile-canvas');
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Missile.missiles.forEach((missile, index) => {
            ctx.save();
            ctx.beginPath();
            ctx.translate(missile.xPos, missile.yPos);
            ctx.arc(0, 0, missile.size, 0, Math.PI * 2);
            ctx.strokeStyle = 'white';
            ctx.stroke();
            ctx.closePath();
            ctx.restore();

            missile.move();
            missile.hit();
            missile.removeOutOfGameScreen(index);
        });
    }

    hit() {
        Asteroid.asteroids.forEach((asteroid, index) => {
            const distance = Math.sqrt(
                (asteroid.xPos - this.xPos) ** 2 + (asteroid.yPos - this.yPos) ** 2
            );
            if (
                distance < asteroid.size * 0.75 + this.size * 0.75 &&
                asteroid.status > 0
            ) {
                asteroid.attacked();
                Asteroid.asteroids.splice(index, 1);
                Missile.missiles.forEach((missile, index) => {
                    if (missile === this) {
                        Missile.missiles.splice(index, 1);
                    }
                });
            }
        });
    }

    move() {
        const distance = Math.sqrt(
            this.xDirectionVector ** 2 + this.yDirectionVector ** 2
        );
        this.xPos += (this.xDirectionVector / distance) * this.speed;
        this.yPos += (this.yDirectionVector / distance) * this.speed;
    }

    checkOutOfGameScreen() {
        return this.xPos < 0 || this.yPos < 0 || this.xPos > 500 || this.yPos > 500;
    }

    removeOutOfGameScreen(index) {
        if (this.checkOutOfGameScreen()) {
            Missile.missiles.splice(index, 1);
        }
    }
}
