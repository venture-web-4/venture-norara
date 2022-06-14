import useInterval from "../hooks/useInterval";
import { useState } from "react";
import { StyledBalloon } from "../styles/StyledCatWordComponents";

export function Component1() {
  return (
    <>
      <input/>
      <button>제출하기</button>
    </>
  );
}

export function Component2({title}) {
  return (
    <>
      <div>{title}</div>
    </>
  );
}

export function Component3() {
  return (
    <>
      <div>
        <Component6 words="안녕" />
        {/* map 함수로 펼칠 예정 */}
      </div>
    </>
  );
}

export function Component4() {
  const [slay, setSlay] = useState(0)

  const arr = ["나도 못이긴다냥?!", "어디 한번 덤벼보라냥","나는 끝말잇기 좀 한다냥"]

  useInterval(()=> {
    if(slay ===2){
      setSlay(0)
    } else setSlay(prev => prev+1)
  },5000)

  return (
    <StyledBalloon>
      <div>
        {arr[slay]}
      </div>
    </StyledBalloon>
  );
}

function Component6({words}) {
  return(
    <div>
      <div>{words}</div>
    </div>
    )
}

