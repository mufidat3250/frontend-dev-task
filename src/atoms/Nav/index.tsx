import React from "react";
import "./NavTabs.scss";
type tabProps = {
  tabs?: Array<String>;
  tab?: number;
  setTab?: Function;
};
const NavTab = ({ tabs, tab, setTab }: tabProps) => {
  return (
    <div className="nav__container">
      {tabs?.map((tab, index) => (
        <div key={`tab${index}`} className={`single__tab`}>
          {tab}
        </div>
      ))}
    </div>
  );
};

export default NavTab;
