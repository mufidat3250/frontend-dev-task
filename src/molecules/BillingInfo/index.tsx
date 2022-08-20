import React from "react";
import Button from "../../atoms/Button";
import CardDetailInput from "../../atoms/CardDetailInout";
import ExpiryDate from "../../atoms/ExpireDate";
import ExpireDate from "../../atoms/ExpireDate";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select";

const BillingInfo = () => {
  return (
    <form action="">
      <div className="flex flex-col space-y-[2.75rem] mt-[4.75rem]">
        <Input
          title={"Name on Card"}
          placeholder={"Opara Linus Ahmed"}
          star={true}
        />
        <Select title={"Card Type"} options={["Lagos", "Abuja", "Osun"]} />
      </div>
      <div className="grid grid-cols-[2fr,1fr, 0.5fr] mt-[4.125rem] gap-[2.0625rem] ">
        <div className="">
          <CardDetailInput title={"Card details"} star={true} />
        </div>
        <div>
          <ExpiryDate title={"Expiry date"} star={true} />
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
