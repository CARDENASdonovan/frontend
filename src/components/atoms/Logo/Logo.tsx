import "./Logo.scss";

export const Logo = (): React.ReactElement => {
  return (
    <div className="logo-container">
      <a className="logo" href="/">
        Logo{/* <img src={cyStonksLogo} alt="CyStonks Logo" /> */}
      </a>
    </div>
  );
};
