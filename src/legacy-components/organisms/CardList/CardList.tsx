import { Card } from "@/components/molecules/Card/Card";
import "./CardList.scss";

export const CardList = (): React.ReactElement => {
  return (
    <div className="cards-container">
      <Card title="Card 1" content="This is the content of card 1." />
      <Card title="Card 2" content="This is the content of card 2." />
      <Card title="Card 3" content="This is the content of card 3." />
      <Card title="Card 4" content="This is the content of card 4." />
      <Card title="Card 5" content="This is the content of card 5." />
      <Card title="Card 6" content="This is the content of card 6." />
      <Card title="Card 7" content="This is the content of card 7." />
    </div>
  );
};
