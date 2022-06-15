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
        <Rule>0. 뚱이가 UFO에 붙잡힐 위기에 처했어요.</Rule>
        <Rule>1. 단어를 맞히면 뚱이를 구할 수 있답니다!</Rule>
        <Rule>2. 단어에 없는 알파벳을 고르면 우주선이 그려지고,</Rule>
        <Rule>3. 총 7번 잘못 고르면 게임은 종료됩니다.</Rule>
        <Rule>4. 선택한 알파벳은 다시 고를 수 없습니다.</Rule>
        <Rule>5. 뚱이의 💖사랑스러운 영웅이 되어보세요!</Rule>
      </RuleWrapper>
    </Wrapper>
  );
}
