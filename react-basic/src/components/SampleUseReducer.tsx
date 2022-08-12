import React, { useState, useReducer } from "react";

function SampleUseReducer() {
  const [state, setState] = useState(0);
  const [rstate, rsetState] = useReducer((prev: number, action: "+" | "-") => {
    if (action === "+") {
      return ++prev;
    } else if (action === "-") {
      return --prev;
    } else {
      return 0;
    }
  }, 0);

  // useReducerはuseStateの書き換えに使用
  // prevState：前のステート
  // useStateで書くと
  const countUp = () => setState((prev) => ++prev);
  // useReducerで書くと
  const rcountUp = () => rsetState("+");
  const rcountDown = () => rsetState("-");

  return (
    <>
      <p> ---- useState ---- </p>
      <button onClick={countUp}>プラス</button>
      <p>カウント数: {state}</p>
      <p> ---- useReducer ---- </p>
      <button onClick={rcountUp}>プラス</button>
      <button onClick={rcountDown}>マイナス</button>
      <p>カウント数: {rstate}</p>
    </>
  );
}

export default SampleUseReducer;
