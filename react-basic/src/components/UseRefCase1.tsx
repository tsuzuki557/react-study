import { useState, useRef } from "react";

const UseRefCase1 = () => {
  const [val, setVal] = useState("テキストがはいります");
  const inputRef = useRef<HTMLInputElement | null>(null);
  //console.log(inputRef);

  return (
    <>
      <h1>UseRefCase1</h1>
      <input
        type="text"
        ref={inputRef}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        onClick={() => {
          //console.log(inputRef);
          //return inputRef.current && inputRef.current.focus();
          return inputRef.current?.focus();
        }}
      >
        入力にフォーカスを当てるボタン
      </button>
    </>
  );
};

export default UseRefCase1;
