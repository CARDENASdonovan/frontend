import { Logo } from "@/components/atoms/Logo/Logo";
import { NavigationMenu } from "@/components/atoms/NavigationBar/NavigationMenu";
import { UserInfo } from "@/components/molecules/UserInfo/UserInfo";
import { ReactElement } from "react";
import "./Header.scss";

export const Header = (): ReactElement => {
  return (
    <nav className="header-container">
      <header className="header">
        <div className="header-left-container">
          <Logo />
        </div>
        <div className="header-middle-container">
          <NavigationMenu />
        </div>
        <div className="header-right-container">
          <UserInfo />
        </div>
      </header>
    </nav>
  );
};
