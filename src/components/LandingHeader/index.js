import { useCallback, useState, useEffect } from 'react';
import LandingButton from '../LandingButton';
import Ranking from '../Ranking';
import { getScores } from '../../api/score';

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

export default function LandingHeader() {
  const [rankersOnUFOGame, setRankersOnUFOGame] = useState();
  const [rankersOnGeoguesser, setRankersOnGeoguesser] = useState();
  const [rankersOnCatGame, setRankersOnCatGame] = useState();
  const [rankersOnAsteroids, setRankersOnAsteroids] = useState();

  useEffect(() => {
    (async () => {
      setRankersOnUFOGame(await handleGetScoresArr(0, 'desc'));
    })();
    (async () => {
      setRankersOnGeoguesser(await handleGetScoresArr(1, 'asc'));
    })();
    (async () => {
      setRankersOnCatGame(await handleGetScoresArr(2, 'desc'));
    })();
    (async () => {
      setRankersOnAsteroids(await handleGetScoresArr(3, 'desc'));
    })();
  }, []);

  const handleGetScoresArr = useCallback(async (gameNum, order) => {
    const resultArr = [];
    const rankingArr = await getScores(gameNum, order);
    rankingArr.forEach(el => resultArr.push([el?.username, el?.score]));
    //const targetArr = resultArr.sort((a, b) => b[1] - a[1]);`
    return resultArr;
  }, []);

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
          <Ranking title={'아무말 끝말잇기'} data={rankersOnCatGame} />
          <Ranking title={'소행성을 부숴라!'} data={rankersOnAsteroids} />
        </RankingEachGameWrapper>
      </RankingWrapper>
    </Wrapper>
  );
}
