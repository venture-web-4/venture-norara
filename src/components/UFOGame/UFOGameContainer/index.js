import { useState } from 'react';
import AlphaButton from '../AlphaButton';
import { ALPHABET_ARR, GAMEOVER_NUMBER } from '../../../constants/UFOGame';

import {
  Wrapper,
  Title,
  SubTitle,
  ImgButtonWrapper,
  ImgWrapper,
  GameImg,
  WordCountWrapper,
  WordWrapper,
  CountWrapper,
  KeyboardResetWrapper,
  KeyboardWrapper,
  ResetButton,
  OuterWrapper,
  ImgWordWrapper,
  GameImgSpring,
} from './UFOGameContainer.styled';

export default function UFOGameContainer() {
  const [life, setLife] = useState(GAMEOVER_NUMBER);
  const [failure, setFailure] = useState(0);
  const [imgNumber, setImgNumber] = useState(7);

  return (
    <OuterWrapper>
      <Wrapper>
        <Title>UFO GAME</Title>
        <SubTitle>단어를 맞혀 우주선으로부터 뚱이를 구해 주세요!</SubTitle>

        <ImgButtonWrapper>
          <ImgWordWrapper>
            <ImgWrapper>
              <GameImgSpring />
              <GameImg url={`../../../img/ufo${imgNumber}.png`}></GameImg>
            </ImgWrapper>

            <WordCountWrapper>
              <WordWrapper>_ _ _ _ _ _</WordWrapper>
              <CountWrapper>{`${failure}번 틀렸습니다, 기회는 ${life}번!`}</CountWrapper>
            </WordCountWrapper>
          </ImgWordWrapper>

          <KeyboardResetWrapper>
            <KeyboardWrapper>
              {ALPHABET_ARR.map(alpha => {
                return <AlphaButton key={alpha}>{alpha}</AlphaButton>;
              })}
            </KeyboardWrapper>
            <ResetButton>다시 시작</ResetButton>
          </KeyboardResetWrapper>
        </ImgButtonWrapper>
      </Wrapper>
    </OuterWrapper>
  );
}
