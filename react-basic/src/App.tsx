//import InputText from "./components/InputText";
import Btn from "./components/Btn";
import Btn02 from "./components/Btn02";

function App() {
  return (
    <>
      {/* <InputText /> */}
      <Btn ttl="Aボタン" />
      <Btn ttl="Bボタン" />
      <Btn ttl="Cボタン" />
      <Btn02 ttl="ボタンA" initCount={0} />
      <Btn02 ttl="ボタンB" initCount={10} />
      <Btn02 ttl="ボタンC" initCount={12} />
    </>
  );
}

export default App;
