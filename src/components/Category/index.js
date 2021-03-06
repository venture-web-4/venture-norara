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
      <Title>ð¹ ê²ìì ííê¸° ð¹</Title>
      <SubTitle>ë§ì°ì¤ë¥¼ ì¬ë ¤ ê²ì ì´ë¯¸ì§ë¥¼ íì¸í´ë³´ì¸ì!</SubTitle>
      <ContentWrapper>
        <StyledLink to='/ufogame'>
          <CategoryItem
            title={'UFO ê²ì'}
            desc={'UFOë¡ë¶í° ë±ì´ë¥¼ êµ¬ì¶í´ë³´ì¸ì!'}
            bgImg={'../../../img/ddoong.png'}
            bgSize={'100% 100%'}
          />
        </StyledLink>
        <StyledLink to='/geoguesser'>
          <CategoryItem
            title={'ì¬ì§ ìì¹ ë§ì¶ê¸°'}
            desc={'ì¬ì§ì ë³´ê³  ìì¹ë¥¼ ë§íë³´ì¸ì!'}
            bgImg={'../../../img/geoguesser.png'}
            bgSize={'100% 100%'}
          />
        </StyledLink>
        <StyledLink to='/catword'>
          <CategoryItem
            title={'ã¤ë¥ì´ìã¤ã¤ìë¬´ë§ã¤ëë§ìê¸°'}
            desc={'ì ë§ëë¡ì¸ ê³ ìì´ì ëë§ìê¸° ëê²°! ì´ê¸¸ ì ììê¹ì?'}
            bgImg={'../../../img/fatcat.png'}
            bgSize={'100% 100%'}
          />
        </StyledLink>
        <StyledLink to='/preasteroids'>
          <CategoryItem
            title={'ìíì±ì ë¶ì´ë¼!'}
            desc={'ì¾ì í ì°ì£¼ ì¬íì ìí´ ìíì±ì ì ê±°í´ì£¼ì¸ì!'}
            bgImg={'../../../img/asteroid.png'}
            bgSize={'100% 100%'}
          />
        </StyledLink>
      </ContentWrapper>
    </Wrapper>
  );
}
