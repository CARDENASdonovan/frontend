import "./UserInfo.scss";

import { ReactElement } from "react";

import { Button } from "@/components/atoms/Button/Button";

interface UserInfoContentProps {
  isUserLoggedIn: boolean;
}

const UserInfoContent = ({
  isUserLoggedIn,
}: UserInfoContentProps): ReactElement => {
  return isUserLoggedIn ? (
    <a href="/">a{/* <img src={cyStonksLogo} /> */}</a>
  ) : (
    <Button label="Log In" />
  );
};

export const UserInfo = (): ReactElement => {
  // TODO: This should be replaced with actual logic to check user's login status.
  const isUserLoggedIn = false;

  return (
    <div className="user-info-container">
      <UserInfoContent isUserLoggedIn={isUserLoggedIn} />
    </div>
  );
};
