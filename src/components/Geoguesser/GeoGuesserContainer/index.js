const { kakao } = window;
import { useCallback, useState, useEffect } from 'react';
import { postScore } from '../../../api/score';

import Dim from '../Dim';
import HowToDescription from '../HowToDescription';
import BasicButton from '../BasicButton';
import NextButton from '../NextButton';
import EndGameModal from '../EndGameModal';

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
  const [scoreSum, setScoreSum] = useState(0);

  const userName = loadItem('userName');
  const userEmail = loadItem('userEmail');

  const increaseStage = useCallback(() => {
    let currentScore = parseFloat(loadItem('geoScore')) || 0;
    console.log('currentScore', currentScore);
    if ((stage * 2) % 2 === 0 && currentScore == 0) {
      alert('마커를 지도에 표시해주세요.');
    } else {
      saveItem('geoStage', stage + 0.5);
      setScoreSum(scoreSum + currentScore);
      setStage(stage + 0.5);
      if ((stage * 2) % 2 === 1) {
        // KakaoMapScript();
      }
    }
    if (stage >= 12.5) {
      setShowEndGameModal(true);
    }
  }, [stage]);

  const handleClickPostScore = async scoreSum => {
    await postScore(1, scoreSum / 12, userName, userEmail);
  };

  useEffect(() => {
    clearItem('geoStage');
    clearItem('geoScore');
    // @last : score 저장하는 로직 작성 중...
    saveItem('geoStage', stage);
    saveItem('geoScore', 0);
  });

  return (
    <OuterWrapper>
      {showEndGameModal && <Dim />}
      {showModal && <Dim />}
      <FlexBoxWrapper>
        <FlexItemWrapper>
          <ColContainer>
            {stage === 0.5 ? (
              <Title>사진 위치 맞추기</Title>
            ) : (
              <Title>사진 위치 맞추기 ({parseInt(stage)}/12)</Title>
            )}
            {(stage * 2) % 2 === 0 || stage === 0.5 ? (
              <SubTitle>사진을 보고 위치를 맞혀보세요</SubTitle>
            ) : (
              <SubTitle>
                오차 : {parseFloat(loadItem('geoScore')).toFixed(2)}m
              </SubTitle>
            )}
            {showEndGameModal && (
              <EndGameModal
                userName={userName}
                onClick={() => handleClickPostScore(scoreSum)}
                score={scoreSum / 12}
              />
            )}

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
          <NextButton
            id='geoguesser-submit'
            onClick={increaseStage}
            text={(stage * 2) % 2 === 0 ? '정답 제출' : '다음 문제'}
          />
          <KakaoMap />
        </FlexItemWrapper>
      </FlexBoxWrapper>
    </OuterWrapper>
  );
}
