import LandingButton from '../LandingButton';
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
  RankingEachGame,
  RankingImg,
  Rankers,
  GameTitleRankersWrapper,
  GameTitle,
  Score,
  Loading,
  LoadingImg,
} from './LandingHeader.styled';

export default function LandingHeader() {
  // MOCK DATA: 게임별 score 필터링해서 랭크 보여주기
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
          {/* GameTitleRankersWrapper 하나씩 추가하면 column 하나 생김 */}
          <GameTitleRankersWrapper>
            <GameTitle>UFO GAME</GameTitle>
            <RankingEachGame>
              {/* index를 key로 사용하면 비효율적, 일단 플래그가 없어서 써둠 */}
              {!rankersOnUFOGame ? (
                <Loading>
                  Loading ...
                  <LoadingImg />
                </Loading>
              ) : (
                rankersOnUFOGame?.map((elem, index) => {
                  return (
                    <Rankers key={index}>
                      {`${index + 1}등 ${elem[0]}`}
                      <Score>{`- ${elem[1]}점 `}</Score>
                    </Rankers>
                  );
                })
              )}
            </RankingEachGame>
          </GameTitleRankersWrapper>

          {/* GameTitleRankersWrapper 하나씩 추가하면 column 하나 생김 */}
          <GameTitleRankersWrapper>
            <GameTitle>위치를 찾아라!</GameTitle>
            <RankingEachGame>
              {!rankersOnGeoguesser ? (
                <Loading>
                  Loading ...
                  <LoadingImg />
                </Loading>
              ) : (
                rankersOnGeoguesser?.map((elem, index) => {
                  return (
                    <Rankers key={index}>
                      {`${index + 1}등 ${elem[0]}`}
                      <Score>{`- ${elem[1]}점 `}</Score>
                    </Rankers>
                  );
                })
              )}
            </RankingEachGame>
          </GameTitleRankersWrapper>

          <GameTitleRankersWrapper>
            <GameTitle>냥이와 끝말잇기</GameTitle>
            <RankingEachGame>
              {!rankersOnCatGame ? (
                <Loading>
                  Loading ...
                  <LoadingImg />
                </Loading>
              ) : (
                rankersOnCatGame?.map((elem, index) => {
                  return (
                    <Rankers key={index}>
                      {`${index + 1}등 ${elem[0]}`}
                      <Score>{`- ${elem[1]}점 `}</Score>
                    </Rankers>
                  );
                })
              )}
            </RankingEachGame>
          </GameTitleRankersWrapper>

          <GameTitleRankersWrapper>
            <GameTitle>소행성을 부숴라!</GameTitle>
            <RankingEachGame>
              {!rankersOnAsteroids ? (
                <Loading>
                  Loading ...
                  <LoadingImg />
                </Loading>
              ) : (
                rankersOnAsteroids?.map((elem, index) => {
                  return (
                    <Rankers key={index}>
                      {`${index + 1}등 ${elem[0]}`}
                      <Score>{`- ${elem[1]}점 `}</Score>
                    </Rankers>
                  );
                })
              )}
            </RankingEachGame>
          </GameTitleRankersWrapper>
        </RankingEachGameWrapper>
      </RankingWrapper>
    </Wrapper>
  );
}
