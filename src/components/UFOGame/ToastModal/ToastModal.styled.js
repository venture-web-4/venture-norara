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
  width: 300px;
  height: 100px;
  border-radius: 15px;
  display: flex;
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
`;

export const ModalText = styled.div`
  font-size: 22px;
`;
