import Header from "components/organisms/Header";
import { Card } from "../molecules/Card";
import "./NewPage.scss";

export const NewPage = (): React.ReactElement => {
  return (
    <div className="new-page">
      <Header />

      <main>
        <h1>Welcome to the New Page</h1>
        <p>
          This is a new page in the application. You can add your content here.
        </p>

        <div className="cards-container">
          <Card title="Card 1" content="This is the content of card 1." />
          <Card title="Card 2" content="This is the content of card 2." />
          <Card title="Card 3" content="This is the content of card 3." />
        </div>
      </main>
    </div>
  );
};
