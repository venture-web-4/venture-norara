export class ScoreManager {
  constructor() {
    this.collectCount = 0;
    this.timeElapsed = 0;
    this.previousTime = new Date().getTime();
    this.nowTime = new Date().getTime();
    this.timeCounter = 0;
  }
  
  setScoreManager() {
    this.collectCount = 0;
    this.timeElapsed = 0;
    this.previousTime = new Date().getTime();
    this.nowTime = new Date().getTime();
    this.timeCounter = 0;
  }

  runTimer() {
    this.previousTime = this.nowTime;
    this.nowTime = new Date().getTime();
    this.timeCounter += this.nowTime - this.previousTime;
    if (this.timeCounter >= 1000) {
      this.timeElapsed += 1;
      this.timeCounter -= 1000;
    }
  }

  getScore() {
    let score;
    if (this.timeElapsed < 10) {
      score = this.collectCount;
    } else {
      score = (this.collectCount * this.timeElapsed) / 10;
    }
    return score;
  }
}
