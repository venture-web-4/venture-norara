import { useCallback, useState } from 'react';

import Dim from '../../UFOGame/Dim';
import ToastModal from '../../UFOGame/ToastModal';
import AlphaButton from '../../UFOGame/AlphaButton';
import BasicButton from '../../UFOGame/BasicButton';
import EndGameModal from '../../UFOGame/EndGameModal';
import HowToDescription from '../../UFOGame/HowToDescription';

import {
  OuterWrapper,
  Wrapper,
  Title,
  SubTitle,
  HowToButton,
} from './GeoGuesserContainer.styled';

export default function GeoGuesserContainer() {
  const [HowTo, setHowTo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showEndGameModal, setShowEndGameModal] = useState(false);


  const handleClickHowTo = useCallback(() => {
    setHowTo(true);
  });

  const handleClickGoBack = useCallback(() => {
    setHowTo(false);
  });

  return (
    <OuterWrapper>
      {showEndGameModal && <Dim />}
      {showModal && <Dim />}
      <Wrapper>
        <Title>위치 맞추기</Title>
        <SubTitle>사진을 보고 위치를 맞혀보세요</SubTitle>
        {!HowTo && (
          <HowToButton onClick={handleClickHowTo}>HOW TO PLAY?</HowToButton>
        )}
        {HowTo ? (
          <>
            <HowToDescription />
            <BasicButton onClick={handleClickGoBack} text={'돌아가기'} />
          </>
        ) : (
          <p>its geoguesser</p>
        )}
      </Wrapper>
    </OuterWrapper>
  );
}
