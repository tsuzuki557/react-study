type BtnProps = {
  txt: string;
  children: React.ReactNode;
};

const Btn: React.FC<BtnProps> = (props) => {
  return (
    <button>
      ボタン<span>({props.txt})</span>
      {props.children}
    </button>
  );
};

export default Btn;
