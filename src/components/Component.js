import useInterval from '../hooks/useInterval';
import { useState } from 'react';
import { StyledBalloon, StyledGameBoard } from '../styles/StyledCatWordComponents';

export function Component1({setWordList}) {
  const [userInput, setUserInput] = useState('')
  const [inputValue, setInputValue] = useState('')

  const onReset = () => {
    setInputValue('')
  }

  return (
    <>
      <input onChange={e => setUserInput(e.target.value)} onKeyDown={(e)=>{
        if (e.keyCode ===13) {
          setWordList(prev=> prev.concat(userInput))
          }
        }} />
      <button onClick={()=> {setWordList(prev=> prev.concat(userInput))}}>제출하기</button>
    </>
  );
}

export function Component3({wordList}) {
  // 우선 유저로부터 입력하는 값을 받아오고

  // 서버 통신을 통해서 유효한 값인지 받아오고

  // 그 결과에 따라 alert창을 띄우거나 리스트에 값을 추가하는 식으로 구현하면 된다.

  return (
    <>
      <StyledGameBoard>
        {wordList.map((word, index)=> 
          <Component6 key={index} words={word} />
        )}
        {/* map 함수로 펼칠 예정 */}
      </StyledGameBoard>
    </>
  );
}

export function Component4() {
  const [slay, setSlay] = useState(0);

  const arr = [
    '나도 못이긴다냥?!',
    '어디 한번 덤벼보라냥',
    '나는 끝말잇기 좀 한다냥',
  ];

  useInterval(() => {
    if (slay === 2) {
      setSlay(0);
    } else setSlay(prev => prev + 1);
  }, 5000);

  return (
    <StyledBalloon>
      <div>{arr[slay]}</div>
    </StyledBalloon>
  );
}

function Component6({ words }) {
  return (
    <div>
      <div>{words}</div>
    </div>
  );
}
