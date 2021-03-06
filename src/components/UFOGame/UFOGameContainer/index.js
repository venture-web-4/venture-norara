import { useCallback, useState } from 'react';
import { postScore } from '../../../api/score';

import Dim from '../Dim';
import ToastModal from '../ToastModal';
import AlphaButton from '../AlphaButton';
import BasicButton from '../BasicButton';
import EndGameModal from '../EndGameModal';
import HowToDescription from '../HowToDescription';

import { pickRandom, setLenArr, allIndexOf } from '../../../utils/UFOGame';
import { loadItem } from '../../../utils/storage';

import {
  ALPHABET_ARR,
  GAMEOVER_NUMBER,
  WORDS,
} from '../../../constants/UFOGame';

import {
  Wrapper,
  Title,
  SubTitle,
  HowToButton,
  ImgButtonWrapper,
  ImgWrapper,
  GameImg,
  WordCountWrapper,
  WordsWrapper,
  WordWrapper,
  CountWrapper,
  KeyboardResetWrapper,
  KeyboardWrapper,
  OuterWrapper,
  ImgWordWrapper,
  GameImgSpring,
  TextWrapper,
} from './UFOGameContainer.styled';

export default function UFOGameContainer() {
  const [score, setScore] = useState(0);
  const [HowTo, setHowTo] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [failure, setFailure] = useState(0);
  const [imgNumber, setImgNumber] = useState(0);
  const [life, setLife] = useState(GAMEOVER_NUMBER);
  const [showModal, setShowModal] = useState(false);
  const [targetWordsArr] = useState(pickRandom(WORDS));
  const [clickedAlphaArr, setclickedAlphaArr] = useState([]);
  const [isCorrectAlpha, setIsCorrectAlpha] = useState(false);
  const [showEndGameModal, setShowEndGameModal] = useState(false);
  const [guessWordsArr, setGuessWordsArr] = useState(setLenArr(targetWordsArr));
  const [isClickedArr, setIsClickedArr] = useState(
    Array(ALPHABET_ARR.length).fill(false)
  );

  const userName = loadItem('userName');
  const userEmail = loadItem('userEmail');

  const handleClickHowTo = useCallback(() => {
    setHowTo(true);
  });

  const handleClickGoBack = useCallback(() => {
    setHowTo(false);
  });

  const handleFailure = useCallback((life, failure, imgNumber) => {
    setLife(life - 1);
    setFailure(failure + 1);
    setImgNumber(imgNumber + 1);
    setIsCorrectAlpha(false);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1000);

    return [life - 1];
  }, []);

  const handleSuccess = useCallback(() => {
    setIsCorrectAlpha(true);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  }, []);

  const handleCheckClickedAlpha = useCallback(alpha => {
    if (clickedAlphaArr.includes(alpha)) return true;
    return false;
  });

  const handleClickAlpha = useCallback(
    (
      alpha,
      index,
      targetArr,
      guessArr,
      life,
      failure,
      imgNumber,
      isClickedArr
    ) => {
      isClickedArr[index] = true;
      setIsClickedArr(isClickedArr);

      const { result } = allIndexOf(alpha, targetArr);
      if (result.isIncludes) {
        result.indexArr.forEach(targetIndex => (guessArr[targetIndex] = alpha));
        setGuessWordsArr(guessArr);
        handleSuccess();
        if (targetArr.join('') === guessArr.join('')) {
          handleWinGame(guessArr);
        }
      }
      if (!result.isIncludes) {
        const [newLife] = handleFailure(life, failure, imgNumber);
        if (newLife === 0) {
          handleLoseGame(guessArr);
        }
      }
      if (!handleCheckClickedAlpha(alpha)) {
        setclickedAlphaArr(clickedAlphaArr.push(alpha));
      }
    },
    []
  );

  const handleCalculateScore = useCallback(guessWordsArr => {
    const regex = /^[a-z|A-Z]+$/;
    const scoreArr = guessWordsArr.filter(elem => regex.test(elem));
    setScore(scoreArr.length * 10);
  });

  const handleLoseGame = useCallback(guessWordsArr => {
    setIsWin(false);
    setShowEndGameModal(true);
    handleCalculateScore(guessWordsArr);
  }, []);

  const handleWinGame = useCallback(guessWordsArr => {
    setIsWin(true);
    setShowEndGameModal(true);
    handleCalculateScore(guessWordsArr);
  }, []);

  const handleClickReset = useCallback(() => {
    window.location.href = '/ufogame';
  }, []);

  const handleClickPostScore = async score => {
    await postScore(0, score, userName, userEmail);
    window.location.href = '/ufogame';
  };

  return (
    <OuterWrapper>
      {showEndGameModal && <Dim />}
      {showModal && <Dim />}
      <Wrapper>
        <Title>UFO GAME</Title>
        <SubTitle>????????? ?????? ????????????????????? ????????? ?????? ?????????!</SubTitle>
        {showModal && <ToastModal isCorrectAlpha={isCorrectAlpha} />}
        {showEndGameModal && (
          <EndGameModal
            isWin={isWin}
            answer={targetWordsArr.join('')}
            userName={userName}
            onClick={() => handleClickPostScore(score)}
            score={score}
          />
        )}
        {!HowTo && (
          <HowToButton onClick={handleClickHowTo}>HOW TO PLAY?</HowToButton>
        )}
        {HowTo ? (
          <>
            <HowToDescription />
            <BasicButton onClick={handleClickGoBack} text={'????????????'} />
          </>
        ) : (
          <ImgButtonWrapper>
            <ImgWordWrapper>
              <ImgWrapper>
                <GameImgSpring />
                <GameImg url={`../../../img/ufo${imgNumber}.png`}></GameImg>
              </ImgWrapper>

              <WordCountWrapper>
                <WordsWrapper>
                  {guessWordsArr.map((letter, i) => {
                    return <WordWrapper key={i}>{letter}</WordWrapper>;
                  })}
                </WordsWrapper>
                <CountWrapper>
                  <TextWrapper color='red'>{failure}</TextWrapper>
                  {'??? ???????????????, ?????????'}
                  <TextWrapper color='green'>{life}</TextWrapper>
                  {'???!'}
                </CountWrapper>
              </WordCountWrapper>
            </ImgWordWrapper>

            <KeyboardResetWrapper>
              <KeyboardWrapper>
                {ALPHABET_ARR.map((alpha, index) => {
                  return (
                    <AlphaButton
                      key={alpha}
                      value={alpha}
                      onClick={() =>
                        handleClickAlpha(
                          alpha,
                          index,
                          targetWordsArr,
                          guessWordsArr,
                          life,
                          failure,
                          imgNumber,
                          isClickedArr
                        )
                      }
                      clicked={isClickedArr[index]}
                    >
                      {alpha}
                    </AlphaButton>
                  );
                })}
              </KeyboardWrapper>
              <BasicButton onClick={handleClickReset} text={'?????? ??????'} />
            </KeyboardResetWrapper>
          </ImgButtonWrapper>
        )}
      </Wrapper>
    </OuterWrapper>
  );
}
