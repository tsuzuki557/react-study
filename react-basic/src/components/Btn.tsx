import React, { useState } from "react";

type btnProps = {
  ttl: string;
};

const Btn: React.FC<btnProps> = (props) => {
  const [count, setCount] = useState(0);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCount(count + 1);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={clickHandler}>{props.ttl}</button>
        <p>カウント数: {count}</p>
      </div>
    </>
  );
};

export default Btn;
