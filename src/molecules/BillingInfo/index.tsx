import React, { useState } from "react";
import Button from "../../atoms/Button";
import CardNumber from "../../atoms/CardNumber";
import CVV from "../../atoms/CVV";
import ExpiryDate from "../../atoms/ExpiryDate";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select";

type formFieldProp = "cardName" | "cardNumber" | "cardType";
const BillingInfo = ({ handleSubmit }: { handleSubmit: any }) => {
  const [form, setForm] = useState({
    cardName: "",
    cardNumber: "",
    cardType: "",
  });

  const handleChange = (formField: formFieldProp, e: any) => {
    setForm({ ...form, [formField]: e.target.value });
  };

  const handleCardChange = () => {
    const text = [...form.cardNumber.split(" ").join("")];
    console.log(text);
    let creditCard: string[] = [];
    text.forEach((t, i) => {
      console.log(i);
      let nT = t.replace(/\D+/g, "");
      if (i % 5 == 0) {
        creditCard.push("  ");
      }
      creditCard.push(nT);
    });
    return creditCard.join("");
  };

  console.log(form.cardNumber);
  const handleBillingInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <form action="" onSubmit={handleBillingInfo}>
      <div className="flex flex-col space-y-[2.75rem] mt-[2.5rem]">
        <Input
          title={"Name on Card"}
          placeholder={"Opara Linus Ahmed"}
          star={true}
          onChange={(e: React.ChangeEventHandler) =>
            handleChange("cardName", e)
          }
        />
        <Select
          title={"Card Type"}
          options={["Valve", "Master", "Visa"]}
          onChange={(e: any) => handleChange("cardName", e)}
        />
      </div>
      <div className="grid grid-cols-[391px,132px,104px] mt-[4.125rem] gap-[2.5625rem] ">
        <div className="">
          <CardNumber
            title={"Card details"}
            star={true}
            value={handleCardChange()}
            onchange={(e: React.ChangeEvent) => handleChange("cardNumber", e)}
          />
        </div>
        <div>
          <ExpiryDate title={"Expiry date"} star={true} />
        </div>
        <div className="w-[6.5rem]">
          {" "}
          <CVV title={"CVV"} star={true} />
        </div>
      </div>
      <div className="flex items-center mt-[5rem] mb-[6.9375rem]">
        <div className="w-[14.875rem]">
          <Button title="Next" otherClass="py-[0.875rem] text-white " />
        </div>
        <div className="w-[14.875rem]">
          <Button
            title="Cancel Payment"
            otherClass={`!bg-none py-[0.678rem] !text-purple500`}
          />
        </div>
      </div>
    </form>
  );
};

export default BillingInfo;
function replace(arg0: RegExp, arg1: string) {
  throw new Error("Function not implemented.");
}
