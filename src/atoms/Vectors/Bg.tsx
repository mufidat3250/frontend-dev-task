import * as React from "react";
import { SVGProps } from "react";

const Bg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1437 624"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1437-5.927H-9v624l1446-281.704V-5.927Z"
      fill="url(#a)"
      fillOpacity={0.2}
    />
    <defs>
      <linearGradient
        id="a"
        x1={714}
        y1={-5.927}
        x2={714}
        y2={618.073}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F2C94C" />
        <stop offset={1} stopColor="#F2994A" />
      </linearGradient>
    </defs>
  </svg>
);

export default Bg;
