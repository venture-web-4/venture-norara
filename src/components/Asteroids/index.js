import { useEffect } from 'react';
import '../../styles/asteroids.scss';
import { Missile } from './components/Missile.js';
import { Asteroid } from './components/Asteroid.js';
import {
  ASTEROID_SPAWN_MANAGER,
  SCORE_MANAGER,
  SPACE_SHIP,
} from './utils/singletons.js';
import { getAuth } from 'firebase/auth';
import { postScore } from '../../api/score';
import { KeyWrapper, OuterWrapper } from './AsteroidsContainer.styled';
import {
  GameKeyDescription,
  KeyboardImg,
  KeyboardWrapper,
  MinorDescription,
  MouseImg,
  MouseWrapper,
} from './AsteroidsContainer.styled';

export default function AsteroidsContainer() {
  useEffect(() => {
    const windowScript = document.createElement('script');
    windowScript.src = './utils/window.js';
    windowScript.defer = true;
    windowScript.type = 'text/jsx';

    document.head.appendChild(windowScript);

    return () => {
      document.head.removeChild(windowScript);
    };
  }, []);

  useEffect(() => {
    function gameScreenUpdate() {
      ASTEROID_SPAWN_MANAGER.spawner();
      SCORE_MANAGER.runTimer();
      SPACE_SHIP.activate();
      Missile.render();
      Asteroid.render();
    }

    function setGame() {
      SPACE_SHIP.initialize();
      SPACE_SHIP.setMainCanvas();
      SCORE_MANAGER.setScoreManager();
      Asteroid.asteroids.length = 0;
      Missile.missiles.length = 0;
      ASTEROID_SPAWN_MANAGER.spawnCoolTime = 0;
    }

    function startGame() {
      setGame();
      return setInterval(gameScreenUpdate, 10);
    }

    function checkSpaceShipDestroyed() {
      if (SPACE_SHIP.isSpaceShipDestroyed) {
        endGame();
      }
    }

    function checkURLSwitched() {
      const url = window.location.href;
      const page = url.slice(-10, url.length);

      if (page !== '/asteroids') {
        endGame();
      }
    }

    function showGameResult() {
      const restartKeys = ['r', 'R', 'ㄱ'];
      const timeElapsed = SCORE_MANAGER.timeElapsed;
      const collectCount = SCORE_MANAGER.collectCount;
      const score = SCORE_MANAGER.getScore();
      const mainCanvas = document.getElementById('main-canvas');
      const ctx = mainCanvas.getContext('2d');

      ctx.fillStyle = 'white';
      ctx.font = '56px serif';
      ctx.textAlign = 'center';
      ctx.fillText(`Game End!`, 250, 160);
      ctx.font = '28px serif';
      ctx.fillText(`TimeElapsed: ${timeElapsed}초`, 250, 220);
      ctx.fillText(`CollectCount: ${collectCount}개`, 250, 260);
      ctx.fillText(`Score: ${score}점`, 250, 300);
      ctx.font = '30px serif';
      ctx.fillText(`Press R to Restart`, 250, 360);

      document.addEventListener(
        'keyup',
        e => {
          for (let restartKey of restartKeys) {
            if (e.key === restartKey) {
              window.location.href = '/asteroids';
              break;
            }
          }
        },
        false
      );

      return score;
    }

    function endGame() {
      clearInterval(game);
      clearInterval(spaceShipDestroyedChecker);
      clearInterval(urlSwitchedChecker);

      if (SPACE_SHIP.isSpaceShipDestroyed) {
        const gameType = 3;
        const score = showGameResult();
        const auth = getAuth();
        const userName = auth.currentUser?.displayName;
        const userEmail = auth.currentUser?.email;
        if (userName) {
          postScore(gameType, score, userName, userEmail);
        }
      }
    }

    const game = startGame();
    const spaceShipDestroyedChecker = setInterval(checkSpaceShipDestroyed, 10);
    const urlSwitchedChecker = setInterval(checkURLSwitched, 10);
  }, []);

  return (
    <OuterWrapper>
      <KeyWrapper>
        <MinorDescription>
          {'❗️ 파편화된 소행성을 먹어 점수를 획득해보세요.'}
        </MinorDescription>
        <MouseWrapper>
          <MouseImg />
          <GameKeyDescription>{'우주선 이동: 검은 캔버스 마우스 좌클릭'}</GameKeyDescription>
        </MouseWrapper>
        <KeyboardWrapper>
          <KeyboardImg />
          <GameKeyDescription>{'미사일 공격: a 키'}</GameKeyDescription>
        </KeyboardWrapper>
      </KeyWrapper>
      <canvas id='background-canvas' width='500' height='500'></canvas>
      <canvas id='asteroid-canvas' width='500' height='500'></canvas>
      <canvas id='missile-canvas' width='500' height='500'></canvas>
      <canvas id='main-canvas' width='500' height='500'></canvas>
    </OuterWrapper>
  );
}
