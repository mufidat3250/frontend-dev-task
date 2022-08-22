import "./ConfirmInfo.scss";
import { data } from "../../../data";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

const ConfirmInfo = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    console.log("i am clicked");
  };

  return (
    <div>
      <div className="confirmInfo__container">
        {" "}
        <div className="header__container">
          <div className="heading">
            <h2>Item Name</h2>
            <div className=" flex space-x-[0.6568rem]">
              <img src="/public/vectors/naira.svg" alt="" /> <h2>Price</h2>
            </div>
          </div>
        </div>
        <div className="item__list__wrappper">
          {data.map(({ name, price }, index) => (
            <div className="item" key={`items${index}`}>
              <p>{name}</p>
              <p
                className={`${
                  index == 1 ? "text-black" : index == 0 ? "font-bold" : ""
                }`}
              >
                {price}
              </p>
            </div>
          ))}
        </div>
        <div className="line"></div>
        <div className=" total_container">
          <div className="total">
            <p className="text-lightBlue">Total</p>
            <p className="leading-[1.5] text-purple500 font-bold">50,000.00</p>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-[5rem] mb-[6.9375rem]">
        <div className="w-[14.875rem]">
          <Button
            title="Pay"
            otherClass="py-[0.875rem] text-white "
            onclick={() => navigate("/completed")}
          />
        </div>
        <div className="w-[14.875rem]">
          <Button
            title="Cancel Payment"
            otherClass={`!bg-none py-[0.678rem] !text-purple500`}
            onClick={() => handleClick()}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmInfo;
