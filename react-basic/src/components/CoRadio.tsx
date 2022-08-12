import { useState } from "react";

type CoRadioProps = {
  labelName: string;
};

const CoRadio: React.FC<CoRadioProps> = ({ labelName }) => {
  const [val, setVal] = useState("たまご");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setVal(e.target.value);

  return (
    <label>
      <input
        type="radio"
        value={labelName}
        name="aaa"
        onChange={onChange}
        checked={val === labelName}
      />
      {labelName}
    </label>
  );
};

export default CoRadio;
