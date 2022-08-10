import React from "react";

const InputText: React.FC = () => {
  const valueArray = React.useState("初期値がはいってるよ！！");
  console.log(valueArray);

  //let setValue = "初期値";
  const chnageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("変更した時に発火");
    console.log(e.target.value);
    //setValue = e.target.value;
    //valueArray[1]("変わらない値を入れると2回目以降、再実行しない!!");
    valueArray[1](e.target.value);
    console.log("/変更した時に発火");
  };
  const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log("フォーカスがあたる");
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    console.log("フォーカスが外れる");
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          onChange={chnageHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
        <p>入力された値: {valueArray[0]}</p>
        {/* <p>入力された値: {setValue}</p> */}
      </div>
    </>
  );
};

export default InputText;
