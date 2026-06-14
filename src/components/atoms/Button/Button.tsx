import "./Button.scss";

interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps): React.ReactElement => {
  return (
    <div className="button">
      <a>{label}</a>
    </div>
  );
};
