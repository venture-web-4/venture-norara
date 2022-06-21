import { useCallback } from 'react';

import BasicButton from '../BasicButton';
import {
  Wrapper,
  ModalAnnounce,
  ModalAnswer,
  ModalTitleWrapper,
  ButtonWrapper,
  ModalImageWin,
  PostScoreWrapper,
} from './EndGameModal.styled';

export default function EndGameModal({ userName, onClick, score }) {
  const handleClickTryAgain = useCallback(() => {
    window.location.href = '/geoguesser';
  }, []);

  const handleClickGoHome = useCallback(() => {
    window.location.href = '/category';
  }, []);

  return (
    <Wrapper>
      <ModalTitleWrapper>
        <ModalImageWin />
        <ModalAnnounce>와! 뚱이를 구출했습니다!🎉</ModalAnnounce>
        <ModalAnswer>점수 (평균오차) : {score.toFixed(2)}</ModalAnswer>
      </ModalTitleWrapper>
      <ButtonWrapper>
        <BasicButton onClick={handleClickTryAgain} text={'다시하기'} />
        <BasicButton onClick={handleClickGoHome} text={'그만하기'} />
      </ButtonWrapper>
      {userName && (
        <PostScoreWrapper>
          <BasicButton onClick={onClick} text={'내 스코어 등록하기'} />
        </PostScoreWrapper>
      )}
    </Wrapper>
  );
}
