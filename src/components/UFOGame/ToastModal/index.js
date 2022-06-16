import { Wrapper, ModalText } from './ToastModal.styled';

export default function ToastModal({ isCorrectAlpha }) {
  return (
    <Wrapper>
      {isCorrectAlpha ? (
        <ModalText>알파벳이 있습니다!😘</ModalText>
      ) : (
        <ModalText>알파벳이 없습니다😂</ModalText>
      )}
    </Wrapper>
  );
}
