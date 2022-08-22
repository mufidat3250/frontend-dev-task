import "./Select.scss";

type selectProp = {
  title: string;
  options: Array<string>;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ title, options, ...props }: selectProp) => {
  return (
    <div className="select__wrapper">
      <p className="select__title">{title}</p>
      <div className="w-full relative">
        <select name="" id="" {...props}>
          {options.map((option: string, index: number) => (
            <option key={`option${index}`} value={option}>
              {option}
            </option>
          ))}
        </select>
        <img
          src="/public/vectors/caretcown.svg"
          alt=""
          className="absolute  top-[20px] right-[10%] "
        />
      </div>
    </div>
  );
};

export default Select;
