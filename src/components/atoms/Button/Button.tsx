import "./Button.scss";

import { ReactElement } from "react";

interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps): ReactElement => {
  return (
    <div>
      <a className="button">
        <div>{label}</div>
      </a>
    </div>
  );
};
