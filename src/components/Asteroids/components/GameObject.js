export class GameObject {
    constructor(xPos, yPos, size, speed) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.size = size;
        this.speed = speed;
        this.xDirectionVector = 1;
        this.yDirectionVector = 0;
        this.rotateDegree = 0;
        this.leftRotation = 0;
        this.rotation = 0;
    }

    render() {
        throw new Error('Abstract method must be override');
    }

    move() {
        throw new Error('Abstract method must be override');
    }

    rotate() {
        if (
            this.leftRotation > this.rotateDegree ||
            this.leftRotation < -this.rotateDegree
        ) {
            if (this.leftRotation > 0) {
                this.rotation += this.rotateDegree;
                this.leftRotation -= this.rotateDegree;
            } else if (this.leftRotation < 0) {
                this.rotation -= this.rotateDegree;
                this.leftRotation += this.rotateDegree;
            }
        }
    }
}
