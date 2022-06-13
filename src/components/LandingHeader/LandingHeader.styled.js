import styled from 'styled-components';
import '../../styles/landing.scss';

export const Wrapper = styled.div`
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
  width: 450px;
  background-clip: content-box;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
`;

export const ButtonWrapper = styled.div``;
