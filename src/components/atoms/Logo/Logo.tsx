import { ReactElement } from "react";
import "./Logo.scss";

export const Logo = (): ReactElement => {
  return (
    <div className="logo-container">
      <a className="logo" href="/">
        <div>{/* <img src={cyStonksLogo} alt="CyStonks Logo" /> */}</div>
      </a>
    </div>
  );
};
