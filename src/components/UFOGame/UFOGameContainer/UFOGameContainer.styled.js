import styled from 'styled-components';

import '../../../styles/font.scss';

export const OuterWrapper = styled.div`
  font-family: 'DungGeunMo';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: 1000px;
  min-width: 1000px;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 3px 30px 7px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
  padding: 30px;
`;

export const Title = styled.div`
  font-size: 45px;
  font-weight: 600;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const ImgButtonWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgWordWrapper = styled.div``;

export const ImgWrapper = styled.div`
  width: 400px;
  height: 278px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0px 3px 20px 5px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  padding: 10px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GameImgSpring = styled.div`
  width: 100%;
  height: 40px;
  background-image: url('../../../img/sketch.png');
  background-size: 100% 40px;
`;

export const GameImg = styled.div(
  ({ url }) => `
  width: 95%;
  height: 90%;
  background-image: url(${url});
  background-size: 95% 100%;
`
);

export const WordCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 400px;
  height: 140px;
  border-radius: 30px;
  box-shadow: 0px 3px 30px 7px rgba(0, 0, 0, 0.08);
  padding: 15px 15px 20px 15px;
`;

export const WordsWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export const WordWrapper = styled.div`
  width: auto;
  height: auto;
  margin-right: 20px;

  &:last-child {
    margin-right: 0px;
  }
`;

export const TextWrapper = styled.div`
  font-size: 38px;
  margin: 0 7px;
  color: ${props => props.color || '#000'};
`;

export const CountWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-size: 23px;
`;

export const KeyboardResetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 438px;
  box-shadow: 0px 3px 20px 5px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
  background-color: #fff;
  margin-left: 20px;
  padding: 26px;
`;

export const KeyboardWrapper = styled.div`
  background-color: #e0e0e0;
  width: 346px;
  height: 320px;
  border-radius: 30px;
  margin-bottom: 23px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  place-items: center;
  justify-content: center;
  padding: 8px 30px 10px 30px;
`;
