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
          <SubTitleWrapper>{'μ¬μ¬ν  λ'}</SubTitleWrapper>
          <TitleWrapper>{'NORARA'}</TitleWrapper>
        </TitleOuterWrapper>

        <AnnuonceWrapper>
          <Announce>{'πΉ μκ° μμ­λλ λ€μν κ²μμ μ°Έμ¬ν΄λ³΄μΈμ.π'}</Announce>
        </AnnuonceWrapper>

        <ButtonWrapper>
          <LandingButton text={'GET STARTED'} />
        </ButtonWrapper>
      </DescriptionWrapper>

      <RankingWrapper>
        <RankingTitleWrapper>
          <RankingImg />
          <RankingTitle>λͺμμ μ λΉ</RankingTitle>
          <RankingImg />
        </RankingTitleWrapper>

        <RankingEachGameWrapper>
          <Ranking title={'UFO GAME'} data={rankersOnUFOGame} />
          <Ranking title={'μμΉλ₯Ό μ°ΎμλΌ!'} data={rankersOnGeoguesser} />
          <Ranking title={'μλ¬΄λ§ λλ§μκΈ°'} data={rankersOnCatGame} />
          <Ranking title={'μνμ±μ λΆμ΄λΌ!'} data={rankersOnAsteroids} />
        </RankingEachGameWrapper>
      </RankingWrapper>
    </Wrapper>
  );
}
