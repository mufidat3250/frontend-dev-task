import React, { FormEvent, useState } from "react";
import NavTab from "../../atoms/Nav";
import PageLayout from "../../layout/PageLayout";
import BillingInfo from "../../molecules/BillingInfo";
import ConfirmInfo from "../../molecules/ConfirmInfo";
import PersonalInfo from "../../molecules/PersonalInfo";

const TransactionPage = () => {
  const [active, setActive] = useState(0);
  let tabs = ["Personal Info", "Billing Info", "Confirm Payment"];

  const handleInfo = (formdata: any) => {
    if (!formdata.email) {
      alert("email address is required");
      setActive(0);
      return;
    }
    setActive(1);
  };

const handleBilling = ()=>{
  
}
  return (
    <PageLayout title="Complete your Purchase">
      <NavTab tabs={tabs} active={active} setActive={setActive} />
      <div className="">
        {active === 0 && <PersonalInfo handleSubmit={handleInfo} />}
        {active === 1 && <BillingInfo handleSubmit={() => setActive(2)} />}
        {active === 2 && <ConfirmInfo />}
      </div>
    </PageLayout>
  );
};

export default TransactionPage;
