import React from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select";

const PersonalInfo = ({ handleSubmit }: { handleSubmit: any }) => {
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-[2.75rem] mt-[4.75rem]">
        <Input title={"Name"} placeholder={"Opara Linus Ahmed"} />
        <Input
          title={"Email Address"}
          subtitle={"The purchase reciept would be sent to this address"}
          placeholder={"OparaLinusAhmed@devmail.com"}
          star={true}
        />
        <Input
          title={"Address 1"}
          placeholder={"The address of the user goes here"}
          star={false}
        />
        <Input title={"Address 2"} placeholder={"and here"} star={false} />
      </div>
      <div className="grid grid-cols-[2fr,1fr] mt-[4.125rem] gap-[2.0625rem] ">
        <div className="">
          <Input
            title={"Local Government"}
            placeholder={"Surulere"}
            star={false}
          />
        </div>
        <Select title={"State"} options={["Lagos", "Abuja", "Osun"]} />
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

export default PersonalInfo;
