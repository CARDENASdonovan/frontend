import { ReactElement } from "react";
import "./Button.scss";

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
