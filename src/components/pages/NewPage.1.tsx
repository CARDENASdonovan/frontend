import { Card } from "@/components/molecules/Card/Card";
import Header from "@/components/organisms/Header";

export const NewPage = (): React.ReactElement => {
  return (
    <div className="new-page-container">
      <Header />

      <main>
        <h1>Welcome to the New Page</h1>
        <h2>
          This is a new page in the application. You can add your content here.
        </h2>

        <div className="cards-container">
          <Card title="Card 1" content="This is the content of card 1." />
          <Card title="Card 2" content="This is the content of card 2." />
          <Card title="Card 3" content="This is the content of card 3." />
          <Card title="Card 4" content="This is the content of card 4." />
          <Card title="Card 5" content="This is the content of card 5." />
          <Card title="Card 6" content="This is the content of card 6." />
          <Card title="Card 7" content="This is the content of card 7." />
        </div>
      </main>
    </div>
  );
};
