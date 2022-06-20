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

export default function LandingHeader() {
  // MOCK DATA: 게임별 score 필터링해서 랭크 보여주기
  // nestedArray = [[username1, score1], [username2, score2],  ... ];
  const rankersOnUFOGame = [
    ['4조', 600],
    ['페이커', 500],
    ['홍진호', 400],
    ['2등진호', 300],
    ['버그픽서', 299],
    ['으라차차빈재윤', 200],
    ['기몌지', 100],
    ['욱병최!', 20],
    ['내가 게임의신', 10],
    ['정정정', 5],
  ];

  const rankersOnGeoguesser = [
    ['4조', 600],
    ['페이커', 500],
    ['홍진호', 400],
    ['2등진호', 300],
    ['버그픽서', 299],
    ['으라차차빈재윤', 200],
    ['기몌지', 100],
    ['욱병최!', 20],
    ['내가 게임의신', 10],
    ['정정정', 5],
  ];

  const rankersOnCatGame = undefined;

  // const rankersOnCatGame = [
  //   ['4조', 600],
  //   ['페이커', 500],
  //   ['홍진호', 400],
  //   ['2등진호', 300],
  //   ['버그픽서', 299],
  //   ['으라차차빈재윤', 200],
  //   ['기몌지', 100],
  //   ['욱병최!', 20],
  //   ['내가 게임의신', 10],
  //   ['정정정', 5],
  // ];

  const rankersOnAsteroids = [
    ['4조', 600],
    ['페이커', 500],
    ['홍진호', 400],
    ['2등진호', 300],
    ['버그픽서', 299],
    ['으라차차빈재윤', 200],
    ['기몌지', 100],
    ['욱병최!', 20],
    ['내가 게임의신', 10],
    ['정정정', 5],
  ];

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
          {/* Ranking 하나씩 추가하면 column 하나 생김 */}
          <Ranking title={'UFO GAME'} data={rankersOnUFOGame} />
          <Ranking title={'위치를 찾아라!'} data={rankersOnGeoguesser} />
          <Ranking title={'냥이와 끝말잇기'} data={rankersOnCatGame} />
          <Ranking title={'소행성을 부숴라!'} data={rankersOnAsteroids} />
        </RankingEachGameWrapper>
      </RankingWrapper>
    </Wrapper>
  );
}
