import "./ExpiryDate.scss";
const ExpiryDate = ({ title, star }: { title: string; star: boolean }) => {
  return (
    <div className="expiry__container">
      <div className="expiry__title">
        <p className="">{title}</p>{" "}
        {star && <span className=" text-sm text-red font-bold ml-1">*</span>}
      </div>
      <div className="inputs_container">
        <input type="text" maxLength={2} pattern="\d*" placeholder="04" />
        <p className="flex justify-center items-center text-sm font-normal">
          /
        </p>
        <input type="number" maxLength={2} pattern="\d*" placeholder="23" />
      </div>
    </div>
  );
};

export default ExpiryDate;
