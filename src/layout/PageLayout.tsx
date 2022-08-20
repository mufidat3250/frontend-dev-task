import { ReactNode } from "react";
import Bg from "../atoms/Vectors/Bg";
import "./PageLayout.scss";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="pagelayout">
      <Bg />
      <main className="children w-[44.375rem] mx-auto">
        <h1 className="title">Complete your Purchase</h1>
        <div className="">{children}</div>
      </main>
    </div>
  );
};

export default PageLayout;
