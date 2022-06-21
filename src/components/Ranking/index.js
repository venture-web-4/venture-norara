import {
  Wrapper,
  GameTitle,
  RankingEachGame,
  Loading,
  LoadingImg,
  Rankers,
  Score,
} from './Ranking.styled';

export default function Ranking({ title, data }) {
  if (!Array.isArray(data)) {
    data = undefined;
  }
  return (
    <Wrapper>
      <GameTitle>{title}</GameTitle>
      <RankingEachGame>
        {/* index를 key로 사용하면 비효율적, 일단 플래그가 없어서 써둠 */}
        {!data ? (
          <Loading>
            Loading ...
            <LoadingImg />
          </Loading>
        ) : (
          data?.map((elem, index) => {
            return (
              <Rankers key={index}>
                {`${index + 1}등 ${elem[0]}`}
                <Score>{`- ${elem[1]}점 `}</Score>
              </Rankers>
            );
          })
        )}
      </RankingEachGame>
    </Wrapper>
  );
}
