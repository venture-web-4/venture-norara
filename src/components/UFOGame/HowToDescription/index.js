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
        <Rule>0. 뚱이가 UFO에 붙잡혀 갈 위기에 처했어요.</Rule>
        <Rule>1. 단어를 맞추면 뚱이를 구할 수 있답니다!</Rule>
        <Rule>2. 단어에 없는 알파벳을 7번 고르면 탈락,</Rule>
        <Rule>3. 선택한 알파벳은 다시 고를 수 없습니다.</Rule>
        <Rule>4. 뚱이의 💖사랑스러운 영웅이 되어보세요!</Rule>
      </RuleWrapper>
    </Wrapper>
  );
}
