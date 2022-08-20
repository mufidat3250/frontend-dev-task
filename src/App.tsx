import { useState } from "react";
import "./App.scss";
import Button from "./atoms/Button";
import Input from "./atoms/Input";
import NavTab from "./atoms/Nav";
import Select from "./atoms/Select";
import PageLayout from "./layout/PageLayout";
import BillingInfo from "./molecules/BillingInfo";
import ConfirmInfo from "./molecules/ConfirmInfo";
import PersonalInfo from "./molecules/PersonalInfo";

function App() {
  const [active, setActive] = useState(0);
  let tabs = ["Personal Info", "Billing Info", "Confirm Payment"];

  const submitPersonalInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hurry");
    setActive(1);
  };
  const handleBillingInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('hhh')
  };

  return (
    <div className="App text-b overflow-auto h-screen">
      <PageLayout>
        <NavTab tabs={tabs} active={active} setActive={setActive} />
        <div className="">
          {active === 0 && <PersonalInfo handleSubmit={submitPersonalInfo} />}
          {active === 1 && <BillingInfo />}
          {active === 2 && <ConfirmInfo />}
        </div>
      </PageLayout>
    </div>
  );
}

export default App;
