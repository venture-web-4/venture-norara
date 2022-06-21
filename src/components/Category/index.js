import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CategoryItem from '../CategoryItem';

import { Title, Wrapper, ContentWrapper, SubTitle } from './Category.styled';

const StyledLink = styled(Link)`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

export default function Category() {
  return (
    <Wrapper>
      <Title>🕹 게임선택하기 🕹</Title>
      <SubTitle>마우스를 올려 게임 이미지를 확인해보세요!</SubTitle>
      <ContentWrapper>
        <StyledLink to='/ufogame'>
          <CategoryItem
            title={'UFO 게임'}
            desc={'UFO로부터 뚱이를ㅤ구출해보세요!'}
            bgImg={'../../../img/ddoong.png'}
            bgSize={'100% 100%'}
          />
        </StyledLink>
        <StyledLink to='/catword'>
          <CategoryItem
            title={'ㅤ냥이와ㅤ끝말잇기'}
            desc={'아주 똑똑한 고양이와 끝말잇기 대결! 이길 수 있을까요?'}
            bgImg={'../../../img/fatcat.png'}
            bgSize={'100% 100%'}
          />
        </StyledLink>
        <StyledLink to='/preasteroids'>
          <CategoryItem
            title={'소행성을 부숴라!'}
            desc={'쾌적한 우주 여행을 위해 소행성을 제거해주세요!'}
            bgImg={'../../../img/asteroid.png'}
            bgSize={'100% 100%'}
          />
        </StyledLink>
      </ContentWrapper>
    </Wrapper>
  );
}
