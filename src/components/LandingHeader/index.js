import { useCallback } from 'react';
import LandingButton from '../LandingButton';
import Ranking from '../Ranking';

import {
  Announce,
  AnnuonceWrapper,
  ButtonWrapper,
  SubTitleWrapper,
  DescriptionWrapper,
  RankingWrapper,
  TitleOuterWrapper,
  TitleWrapper,
  Wrapper,
  RankingTitleWrapper,
  RankingTitle,
  RankingEachGameWrapper,
  RankingImg,
} from './LandingHeader.styled';

import { getScores } from '../../api/score';
import { getDefaultNormalizer } from '@testing-library/react';
import { useEffect, useState } from 'react';

export default function LandingHeader() {
  const [rankersOnUFOGame, setRankersOnUFOGame] = useState();
  const [rankersOnGeoguesser, setRankersOnGeoguesser] = useState();
  const [rankersOnCatGame, setRankersOnCatGame] = useState();
  const [rankersOnAsteroids, setRankersOnAsteroids] = useState();

  const getRanking = async () => {
    let rankerList = [];
    const response = await getScores(0);
    response.forEach(item => {
      rankerList.push([item['username'], item['score']]);
    });
    return rankerList;
  };

  useEffect(() => {
    console.log('promise에러');
  });

  return (
    <Wrapper>
      <DescriptionWrapper>
        <TitleOuterWrapper>
          <SubTitleWrapper>{'심심할 때'}</SubTitleWrapper>
          <TitleWrapper>{'NORARA'}</TitleWrapper>
        </TitleOuterWrapper>

        <AnnuonceWrapper>
          <Announce>{'🕹 시간 순삭되는 다양한 게임에 참여해보세요.💎'}</Announce>
        </AnnuonceWrapper>

        <ButtonWrapper>
          <LandingButton text={'GET STARTED'} />
        </ButtonWrapper>
      </DescriptionWrapper>

      <RankingWrapper>
        <RankingTitleWrapper>
          <RankingImg />
          <RankingTitle>명예의 전당</RankingTitle>
          <RankingImg />
        </RankingTitleWrapper>

        <RankingEachGameWrapper>
          <Ranking title={'UFO GAME'} data={rankersOnUFOGame} />
          <Ranking title={'위치를 찾아라!'} data={rankersOnGeoguesser} />
          <Ranking title={'냥이와 끝말잇기'} data={rankersOnCatGame} />
          <Ranking title={'소행성을 부숴라!'} data={rankersOnAsteroids} />
        </RankingEachGameWrapper>
      </RankingWrapper>
    </Wrapper>
  );
}
