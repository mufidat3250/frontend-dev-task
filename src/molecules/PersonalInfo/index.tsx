import React, { FormEvent, useState } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select";

const PersonalInfo = ({ handleSubmit }: { handleSubmit: any }) => {
  const [form, setform] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    localgov: "",
    state: "",
  });

  type formFieldProp =
    | "name"
    | "email"
    | "address1"
    | "address2"
    | "localgov"
    | "state";

  const handleChange = (formfield: formFieldProp, e: any) => {
    setform({ ...form, [formfield]: e.target.value });
  };

  const submitPersonalInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(form);
  };

  console.log(form.state);

  console.log();

  return (
    <form action="" onSubmit={submitPersonalInfo}>
      <div className="flex flex-col space-y-[2.75rem] mt-[4.75rem]">
        <Input
          title={"Name"}
          placeholder={"Opara Linus Ahmed"}
          value={form.name}
          onChange={(e: React.ChangeEventHandler) => handleChange("name", e)}
          type="text"
          
        />
        <Input
          title={"Email Address"}
          subtitle={"The purchase reciept would be sent to this address"}
          placeholder={"OparaLinusAhmed@devmail.com"}
          star={true}
          type="email"
          onChange={(e: React.ChangeEventHandler) => handleChange("email", e)}
          required={true}
        />
        <Input
          title={"Address 1"}
          placeholder={"The address of the user goes here"}
          star={false}
          onChange={(e: React.ChangeEventHandler) =>
            handleChange("address1", e)
          }
        />
        <Input
          title={"Address 2"}
          placeholder={"and here"}
          star={false}
          onChange={(e: React.ChangeEventHandler) =>
            handleChange("address2", e)
          }
        />
      </div>
      <div className="grid grid-cols-[2fr,1fr] mt-[4.125rem] gap-[2.0625rem] ">
        <div className="">
          <Input
            title={"Local Government"}
            placeholder={"Surulere"}
            star={false}
            onChange={(e: React.ChangeEventHandler) =>
              handleChange("localgov", e)
            }
          />
        </div>
        <Select
          title={"State"}
          options={["Lagos", "Abuja", "Osun"]}
          onChange={(e: any) => handleChange("state", e)}
        />
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
function split(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}
