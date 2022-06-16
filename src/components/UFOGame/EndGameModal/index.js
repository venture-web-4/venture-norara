import { useCallback } from 'react';

import BasicButton from '../BasicButton';
import {
  Wrapper,
  ModalAnnounce,
  ModalAnswer,
  ModalTitleWrapper,
  ButtonWrapper,
  ModalImageLose,
  ModalImageWin,
} from './EndGameModal.styled';

export default function EndGameModal({ isWin, answer }) {
  const handleClickTryAgain = useCallback(() => {
    window.location.href = '/ufogame';
  }, []);

  const handleClickGoHome = useCallback(() => {
    window.location.href = '/category';
  }, []);

  return (
    <Wrapper>
      {isWin ? (
        <ModalTitleWrapper>
          <ModalImageWin />
          <ModalAnnounce>와! 뚱이를 구출했습니다!🎉</ModalAnnounce>
          <ModalAnswer>정답 : {answer}</ModalAnswer>
        </ModalTitleWrapper>
      ) : (
        <ModalTitleWrapper>
          <ModalImageLose />
          <ModalAnnounce>뚱이는..떠나갔습니다...😥</ModalAnnounce>
          <ModalAnswer>정답 : {answer}</ModalAnswer>
        </ModalTitleWrapper>
      )}
      <ButtonWrapper>
        <BasicButton onClick={handleClickTryAgain} text={'다시하기'} />
        <BasicButton onClick={handleClickGoHome} text={'그만하기'} />
      </ButtonWrapper>
    </Wrapper>
  );
}
