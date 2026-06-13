import cyStonksLogo from "@/assets/cy_stonks_logo.png";

import "./Header.scss";

const Logo = (): React.ReactElement => {
  return (
    <div className="header-logo">
      <a href="/">
        <img src={cyStonksLogo} />
      </a>
    </div>
  );
};

export default function SideMenu(): React.ReactElement {
  return (
    <header className="header">
      <Logo />
    </header>
  );
}
