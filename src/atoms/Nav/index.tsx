
import "./NavTabs.scss";
type tabProps = {
  tabs: Array<String>;
  active?: number;
  setActive: Function;
};
const NavTab = ({ tabs, active, setActive }: tabProps) => {
  return (
    <div className="nav__container">
      {tabs.map((tab, index) => (
        <div
          key={`tab${index}`}
          className={`cursor-pointer ${active == index ? "single__tab" : " "}`}
          onClick={() => {
            setActive(index);
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default NavTab;
function setActive(active: number | undefined): void {
  throw new Error("Function not implemented.");
}
