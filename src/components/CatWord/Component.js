import useInterval from '../../hooks/useInterval';
import { useState, useRef, useCallback, useEffect } from 'react';
import {
  StyledMeow,
  StyledGameBoard,
  StyledInputButton,
  StyledWordInput,
  StyledGameLine,
  StyledInputWrapper,
} from '../../pages/CatWord/CatWord.Styled';

export function Component1({ checkWord }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <StyledInputWrapper>
      <StyledWordInput
        value={inputValue}
        onChange={e => {
          handleChange(e);
        }}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            checkWord(inputValue);
            setInputValue('');
          }
        }}
      />
      <StyledInputButton
        onClick={() => {
          checkWord(inputValue);
        }}
      >
        제출
      </StyledInputButton>
    </StyledInputWrapper>
  );
}

export function Component3({ wordList }) {
  // 우선 유저로부터 입력하는 값을 받아오고

  // 서버 통신을 통해서 유효한 값인지 받아오고

  // 그 결과에 따라 alert창을 띄우거나 리스트에 값을 추가하는 식으로 구현하면 된다.

  const scrollRef = useRef();

  const scrollToBottom = useCallback(() => {
    if (scrollRef) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [wordList]);

  return (
    <>
      <StyledGameBoard>
        {wordList.map((word, index) => (
          <StyledGameLine color={word['color']} key={index}>
            {word['text']}
          </StyledGameLine>
        ))}
        <div ref={scrollRef} />
      </StyledGameBoard>
    </>
  );
}

export function Component4() {
  const [slay, setSlay] = useState(0);

  const arr = [
    '나는 끝말잇기를 잘하는 고양이라냥!',
    '고양이는 고양이 말을 한다냥',
    '나는 단 한 번도 진 적이 없다냥',
  ];

  useInterval(() => {
    if (slay === 2) {
      setSlay(0);
    } else setSlay(prev => prev + 1);
  }, 5000);

  return <StyledMeow>{arr[slay]}</StyledMeow>;
}
