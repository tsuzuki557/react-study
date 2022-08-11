import { useState } from "react";

type btnProps = {
  ttl: string;
  initCount: number;
};

const Btn02: React.FC<btnProps> = ({ ttl, initCount }) => {
  const [count, setCount] = useState(initCount);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {ttl}
      </button>
      <p>
        {ttl}のカウント数:{count}
      </p>
      <button
        onClick={() => {
          setCount(initCount);
        }}
      >
        リセット
      </button>
    </>
  );
};

export default Btn02;
