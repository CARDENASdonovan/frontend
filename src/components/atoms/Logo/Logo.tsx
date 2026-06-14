import "./Logo.scss";

import { ReactElement } from "react";

export const Logo = (): ReactElement => {
  return (
    <div className="logo-container">
      <a className="logo" href="/">
        <div>{/* <img src={cyStonksLogo} alt="CyStonks Logo" /> */}</div>
      </a>
    </div>
  );
};
