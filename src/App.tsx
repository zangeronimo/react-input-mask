import { Input } from "./components/Input";

function App() {
  return (
    <div>
      <h1>Components</h1>
      <hr />
      <h2>Input</h2>
      <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <Input label="Simple Input" name="simpleInput" />
        <Input label="AlphaNumeric Input" mask='#999999' name="alphaInput" number />
        <Input label="CEP Input" mask='99999-999' name="cepInput" number />
        <Input label="Mobile Input" mask='+99 (99) 99999-9999' name="mobileInput" number />
        <Input label="Date Input" mask='99/99/9999' name="dateInput" number />
        <Input label="CPF Input" mask='999.999.999-99' name="dateInput" number />
      </div>
    </div >
  );
}

export default App;
