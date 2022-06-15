import { useCallback, useEffect, useState } from 'react';
import AlphaButton from '../AlphaButton';
import BasicButton from '../BasicButton';
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
  const [start, setStart] = useState(false);
  const [failure, setFailure] = useState(0);
  const [imgNumber, setImgNumber] = useState(0);
  const [life, setLife] = useState(GAMEOVER_NUMBER);
  const [isClickedArr, setIsClickedArr] = useState(
    Array(ALPHABET_ARR.length).fill(false)
  );
  const [clickedAlphaArr, setclickedAlphaArr] = useState([]);
  const [targetWordsArr, setTargetWordsArr] = useState(pickRandom(WORDS));
  const [guessWordsArr, setGuessWordsArr] = useState(setLenArr(targetWordsArr));

  const handleClickStart = useCallback(() => {
    setStart(true);
  });

  const handleFailure = useCallback((life, failure, imgNumber) => {
    // 그냥 set 하는 것과의 차이..무엇인가..
    setLife(life - 1);
    setFailure(failure + 1);
    setImgNumber(imgNumber + 1);
    // 틀렸습니다ㅠ 정도의 toast 띄워주기
    return [life - 1];
  }, []);

  const handleSuccess = useCallback(() => {
    // 맞았습니다! 정도의 toast 띄워주기
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
    console.log('game lose ㅠㅠ');
    console.log('답:', targetWordsArr.join(''));
  }, []);

  const handleWinGame = useCallback(() => {
    console.log('game win!!!');
    console.log('답:', targetWordsArr.join(''));
  }, []);

  const handleClickReset = useCallback(() => {
    const newTargetWordsArr = pickRandom(WORDS);
    setTargetWordsArr(newTargetWordsArr);
    setGuessWordsArr(setLenArr(newTargetWordsArr));
    setFailure(0);
    setImgNumber(0);
    setLife(GAMEOVER_NUMBER);
    setIsClickedArr(() => Array(ALPHABET_ARR.length).fill(false));
    setclickedAlphaArr([]);
  }, []);

  useEffect(() => {
    console.log('타켓', targetWordsArr);
    console.log('진행', guessWordsArr);
  }, [targetWordsArr]);

  return (
    <OuterWrapper>
      <Wrapper>
        <Title>UFO GAME</Title>
        <SubTitle>단어를 맞혀 우주선으로부터 뚱이를 구해 주세요!</SubTitle>
        {!start ? (
          <>
            <HowToDescription />
            <BasicButton onClick={handleClickStart} text={'시작하기'} />
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
