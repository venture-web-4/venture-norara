import { useCallback, useState } from 'react';

import Dim from '../Dim';
import ToastModal from '../ToastModal';
import AlphaButton from '../AlphaButton';
import BasicButton from '../BasicButton';
import EndGameModal from '../EndGameModal';
import HowToDescription from '../HowToDescription';

import { pickRandom, setLenArr, allIndexOf } from '../../../utils/UFOGame';

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
          handleWinGame();
        }
      }
      if (!result.isIncludes) {
        const [newLife] = handleFailure(life, failure, imgNumber);
        if (newLife === 0) {
          handleLoseGame();
        }
      }
      if (!handleCheckClickedAlpha(alpha)) {
        setclickedAlphaArr(clickedAlphaArr.push(alpha));
      }
    },
    []
  );

  const handleLoseGame = useCallback(() => {
    setIsWin(false);
    setShowEndGameModal(true);
  }, []);

  const handleWinGame = useCallback(() => {
    setIsWin(true);
    setShowEndGameModal(true);
  }, []);

  const handleClickReset = useCallback(() => {
    window.location.href = '/ufogame';
  }, []);

  return (
    <OuterWrapper>
      {showEndGameModal && <Dim />}
      {showModal && <Dim />}
      <Wrapper>
        <Title>UFO GAME</Title>
        <SubTitle>단어를 맞혀 우주선으로부터 뚱이를 구해 주세요!</SubTitle>
        {showModal && <ToastModal isCorrectAlpha={isCorrectAlpha} />}
        {showEndGameModal && (
          <EndGameModal isWin={isWin} answer={targetWordsArr.join('')} />
        )}
        {!HowTo && (
          <HowToButton onClick={handleClickHowTo}>HOW TO PLAY?</HowToButton>
        )}
        {HowTo ? (
          <>
            <HowToDescription />
            <BasicButton onClick={handleClickGoBack} text={'돌아가기'} />
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
                  {'번 틀렸습니다, 기회는'}
                  <TextWrapper color='green'>{life}</TextWrapper>
                  {'번!'}
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
              <BasicButton onClick={handleClickReset} text={'다시 시작'} />
            </KeyboardResetWrapper>
          </ImgButtonWrapper>
        )}
      </Wrapper>
    </OuterWrapper>
  );
}
