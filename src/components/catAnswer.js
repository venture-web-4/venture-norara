import React from "react";
import useInterval from "../hooks/useInterval";

export const catAnswer=({word, setWordList})=> {
  setWordList(prev=>prev.concat(word))
}
