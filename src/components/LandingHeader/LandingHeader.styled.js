import styled from 'styled-components';
import '../../styles/landing.scss';
import '../../styles/font.scss';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TitleOuterWrapper = styled.div`
  @keyframes fadeInUp {
    from {
      transform: translate3d(0, 40px, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  font-family: 'TTTogether';
  width: auto;
  display: flex;
  flex-direction: column;
  animation: fadeInUp 2s ease;
`;

export const SubTitleWrapper = styled.div`
  display: flex;
  justify-content: baseline;
  font-size: 30px;
  font-style: italic;
  color: #fffaea;
  text-shadow: 7px 7px 7px rgba(0, 0, 0, 0.1);
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

export const AnnuonceWrapper = styled.div`
  height: auto;
  font-family: 'DungGeunMo';
  font-size: 19px;
  font-weight: 600;
  line-height: 40px;
  color: #6d6d6d;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Announce = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  height: 40px;
  width: 460px;
  background-clip: content-box;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
`;

export const ButtonWrapper = styled.div``;

export const DescriptionWrapper = styled.div`
  margin-right: 2.5vw;
  margin-left: 3vw;
`;

export const RankingWrapper = styled.div`
  width: auto;
  padding: 30px 25px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  height: auto;
  font-family: 'DungGeunMo';
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RankingTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: cetner;
  margin-bottom: 20px;
`;

export const RankingImg = styled.div`
  background-image: url('../../../img/question.gif');
  width: 35px;
  height: 35px;
  background-size: 35px 35px;
`;

export const RankingTitle = styled.div`
  font-size: 30px;
  margin: 0 15px;
  font-weight: 600;
`;

export const RankingEachGameWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;
