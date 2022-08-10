import React from "react";

type BtnProps = {
  txt: string;
  children: React.ReactNode;
};

const clickHander = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log(e);
};

const Btn: React.FC<BtnProps> = (props) => {
  return (
    <button onClick={clickHander}>
      ボタン<span>({props.txt})</span>
      {props.children}
    </button>
  );
};

export default Btn;
