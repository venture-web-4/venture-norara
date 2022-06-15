import styled from 'styled-components';

export const Wrapper = styled.div`
  @keyframes popUp {
    0% {
      transform: translate(-50%, -50%) scale(0.5);
    }

    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  width: 430px;
  height: 280px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 101;
  transform: translate(-50%, -50%);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  animation: popUp 0.2s ease;
  padding: 30px;
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalAnnounce = styled.div`
  font-size: 25px;
  margin-bottom: 25px;
`;

export const ModalAnswer = styled.div`
  font-size: 25px;
  color: green;
`;

export const ButtonWrapper = styled.div`
  font-size: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
  margin-top: 35px;
`;
