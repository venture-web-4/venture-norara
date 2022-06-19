const mainCanvas = document.getElementById('main-canvas');
const missileCanvas = document.getElementById('missile-canvas');
const asteroidCanvas = document.getElementById('asteroid-canvas');
const backgroundCanvas = document.getElementById('background-canvas');

const width = window.innerWidth;
const height = window.innerHeight;

if (width - 500 > 0) {
  mainCanvas.style.left = String((width - 500) * 0.5) + 'px';
  missileCanvas.style.left = String((width - 500) * 0.5) + 'px';
  asteroidCanvas.style.left = String((width - 500) * 0.5) + 'px';
  backgroundCanvas.style.left = String((width - 500) * 0.5) + 'px';
} else {
  mainCanvas.style.left = '0px';
  missileCanvas.style.left = '0px';
  asteroidCanvas.style.left = '0px';
  backgroundCanvas.style.left = '0px';
}

if (height - 500 > 0) {
  mainCanvas.style.top = String((height - 500) * 0.5) + 'px';
  missileCanvas.style.top = String((height - 500) * 0.5) + 'px';
  asteroidCanvas.style.top = String((height - 500) * 0.5) + 'px';
  backgroundCanvas.style.top = String((height - 500) * 0.5) + 'px';
} else {
  mainCanvas.style.top = '0px';
  missileCanvas.style.top = '0px';
  asteroidCanvas.style.top = '0px';
  backgroundCanvas.style.top = '0px';
}

window.onresize = function (event) {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  if (newWidth - 500 > 0) {
    mainCanvas.style.left = String((newWidth - 500) * 0.5) + 'px';
    missileCanvas.style.left = String((newWidth - 500) * 0.5) + 'px';
    asteroidCanvas.style.left = String((newWidth - 500) * 0.5) + 'px';
    backgroundCanvas.style.left = String((newWidth - 500) * 0.5) + 'px';
  } else {
    mainCanvas.style.left = '0px';
    missileCanvas.style.left = '0px';
    asteroidCanvas.style.left = '0px';
    backgroundCanvas.style.left = '0px';
  }

  if (newHeight - 500 > 0) {
    mainCanvas.style.top = String((newHeight - 500) * 0.5) + 'px';
    missileCanvas.style.top = String((newHeight - 500) * 0.5) + 'px';
    asteroidCanvas.style.top = String((newHeight - 500) * 0.5) + 'px';
    backgroundCanvas.style.top = String((newHeight - 500) * 0.5) + 'px';
  } else {
    mainCanvas.style.top = '0px';
    missileCanvas.style.top = '0px';
    asteroidCanvas.style.top = '0px';
    backgroundCanvas.style.top = '0px';
  }
};
