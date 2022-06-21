import { useCallback, useState, useEffect } from 'react';

import Dim from '../Dim';
import HowToDescription from '../HowToDescription';
import BasicButton from '../BasicButton';

import KakaoMap from '../KakaoMap';
import { KakaoMapScript } from '../../../utils/GeoGuesser';
import { saveItem, loadItem, clearItem } from '../../../utils/storage';

import {
  OuterWrapper,
  FlexBoxWrapper,
  FlexItemWrapper,
  ColContainer,
  RowContainer,
  Title,
  SubTitle,
  TextWrapper,
  ImgWrapper,
} from './GeoGuesserContainer.styled';

export default function GeoGuesserContainer() {
  const [showModal, setShowModal] = useState(false);
  const [showEndGameModal, setShowEndGameModal] = useState(false);
  const [stage, setStage] = useState(0.5);
  const [score, setScore] = useState(0);

  const increaseStage = useCallback(() => {
    saveItem('geoStage', stage + 0.5);
    setScore(score + parseFloat(loadItem('geoScore')));
    setStage(stage + 0.5);
    if ((stage * 2) % 2 !== 0) {
      KakaoMapScript();
    }
  }, [stage]);

  useEffect(() => {
    clearItem('geoStage');
    clearItem('geoScore');
    // @last : score 저장하는 로직 작성 중...
    saveItem('geoStage', stage);
  });

  // log score every 2 seconds
  useEffect(() => {
    console.log('score : ' + score);
    console.log('stage : ' + stage);
  }, [stage]);

  return (
    <OuterWrapper>
      {showEndGameModal && <Dim />}
      {showModal && <Dim />}
      <FlexBoxWrapper>
        <FlexItemWrapper>
          <ColContainer>
            <Title>사진 위치 맞추기</Title>
            <SubTitle>사진을 보고 위치를 맞혀보세요</SubTitle>
            {stage !== 0.5 ? (
              <>
                <ImgWrapper
                  style={{
                    backgroundImage: `url(../../../img/snu_${parseInt(
                      stage
                    )}.jpg)`,
                  }}
                />
              </>
            ) : (
              <>
                <TextWrapper>
                  <HowToDescription />
                  <BasicButton onClick={increaseStage} text={'시작'} />
                </TextWrapper>
              </>
            )}
          </ColContainer>
        </FlexItemWrapper>
        <FlexItemWrapper>
          {stage !== 0.5 ? (
            <button onClick={() => increaseStage()}>정답 제출</button>
          ) : (
            <button></button>
          )}
          <KakaoMap />
        </FlexItemWrapper>
      </FlexBoxWrapper>
    </OuterWrapper>
  );
}
