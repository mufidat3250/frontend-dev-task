import { useState } from "react";
import "./App.scss";
import Button from "./atoms/Button";
import NavTab from "./atoms/Nav";
import PageLayout from "./layout/PageLayout";

function App() {
  const [count, setCount] = useState(0);
  let tabs = ["Personal Info", "Billing Info", "Confirm Payment"];

  return (
    <div className="App text-b">
      {/* <PageLayout /> */}
      <Button title="Next" otherClass="py-[0.875rem] text-white " />
      <Button
        title="Cancel Payment"
        otherClass={`!bg-none py-[0.678rem] !text-purple500 `}
      />
      <NavTab tabs={tabs} />
    </div>
  );
}

export default App;
