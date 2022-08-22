import "./ExpiryDate.scss";

type expireDateProp = {
  title: string;
  star: boolean;
  onchange: (value: any) => void;
  value: string | undefined;
};

const ExpiryDate = ({ title, star, value, onchange }: expireDateProp) => {
  return (
    <div className="expiry__container">
      <div className="expiry__title">
        <p className="">{title}</p>{" "}
        {star && <span className=" text-sm text-red font-bold ml-1">*</span>}
      </div>
      <div className="inputs_container">
        <input
          type="text"
          maxLength={5}
          placeholder="04/23"
          value={value}
          onChange={onchange}
          required
        />
      </div>
    </div>
  );
};

export default ExpiryDate;
