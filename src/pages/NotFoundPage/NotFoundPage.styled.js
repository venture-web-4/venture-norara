import styled from 'styled-components';
import '../../styles/landing.scss';

export const NotFoundWrapper = styled.div`
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TitleOuterWrapper = styled.div`
  font-family: 'TTTogether';
  width: auto;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  width: auto;
  padding-right: 15px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  font-size: 80px;
  font-style: italic;
  line-height: 80px;
  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  color: #fcf7f4;
  z-index: 11;
`;

export const SubTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-style: italic;
  color: #fffaea;
  text-shadow: 7px 7px 7px rgba(0, 0, 0, 0.1);
`;
