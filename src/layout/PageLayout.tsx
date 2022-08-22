import { ReactNode } from "react";
import Bg from "../atoms/Vectors/Bg";
import "./PageLayout.scss";

const PageLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <div className="pagelayout">
      <Bg />
      <main className="children w-[44.375rem] mx-auto">
        {title && <h1 className="title">{title}</h1>}
        <div className="">{children}</div>
      </main>
    </div>
  );
};

export default PageLayout;
