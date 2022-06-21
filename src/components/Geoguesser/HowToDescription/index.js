import {
  Wrapper,
  ImgWrapper,
  RuleWrapper,
  Rule,
} from './HowToDescription.styled';

export default function HowToDescription() {
  return (
    <Wrapper>
      <ImgWrapper></ImgWrapper>
      <RuleWrapper>
        <Rule>서울대 안에서 찍은 사진을 보고 위치를 맞혀보세요!</Rule>
        <Rule></Rule>
        <Rule>1. 사진을 감상한다</Rule>
        <Rule>2. 위치를 가늠해본다 🤔...</Rule>
        <Rule>3. 오른쪽 지도에 마우스를 눌러 위치를 마킹한다</Rule>
        <Rule>4. 답을 제출한다</Rule>
        <Rule>제출한 답과 정답 사이의 거리로 점수가 측정됩니다..!</Rule>
      </RuleWrapper>
    </Wrapper>
  );
}
