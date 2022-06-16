import { Desc, Title, Wrapper } from './CategoryItem.styled';

export default function CategoryItem({ title, desc, bgImg, bgSize }) {
  return (
    <Wrapper bgImg={bgImg} bgSize={bgSize}>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Wrapper>
  );
}
