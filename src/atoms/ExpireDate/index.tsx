
import "./ExpireDate.scss";
const ExpiryDate = ({ title, star }: { title: string; star: boolean }) => {
  return (
    <div className="expiry__container">
      <div className="expiry__title">
        <p className="">{title}</p>{" "}
        {star && <span className=" text-sm text-red font-bold ml-1">*</span>}
      </div>
      <div className="flex">
        <input type="text" />
      </div>
    </div>
  );
};

export default ExpiryDate;
