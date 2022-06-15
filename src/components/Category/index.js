import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CategoryItem from '../CategoryItem';

import { Title, Wrapper, ContentWrapper } from './Category.styled';

const StyledLink = styled(Link)`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

export default function Category() {
  return (
    <Wrapper>
      <Title>게임 선택하기</Title>
      <ContentWrapper>
        <StyledLink to='/ufogame'>
          <CategoryItem
            title={'UFO 게임'}
            desc={'UFO로부터 뚱이를ㅤ구출해보세요!'}
            bgImg={''}
            bgSize={'35px 35px'}
          />
        </StyledLink>
      </ContentWrapper>
    </Wrapper>
  );
}
