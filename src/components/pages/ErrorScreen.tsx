import "./ErrorScreen.scss";

export default function ErrorScreen(props: {
  message: string;
}): React.ReactElement {
  return (
    <div className="error-screen">
      <h1>CY Stonks</h1>
      <span>By Pauline, Jules & Donovan</span>
      <span>For Ms. Djaouida</span>
      <br />
      <h2>{props.message}</h2>
    </div>
  );
}
