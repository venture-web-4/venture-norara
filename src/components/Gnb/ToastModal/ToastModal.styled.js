import styled from 'styled-components';

export const ToastWrapper = styled.div`
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: absolute;
  top: 20vh;
  left: 80vw;
  padding: 10px;
  z-index: 101;
  transform: translate(-50%, -50%);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  animation: popUp 0.2s ease;
`;

export const ModalText = styled.div`
  font-size: 22px;
`;

export const InputText = styled.input`
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export const ConfirmButton = styled.button`
  margin-left: 10px;
  font-size: 18px;
`;

export const CancleButton = styled.button`
  position: fixed;
  left: 270px;
  top: 10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  font-size: 20px;
  z-index: 102;
  font-weight: bold;
`;
