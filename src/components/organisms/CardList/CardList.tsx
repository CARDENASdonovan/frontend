import { Card, CardProps } from "@/components/molecules/Card/Card";
import "./CardList.scss";

export const CardList = (): React.ReactElement => {
  const cards: CardProps[] = [
    {
      title: "title1",
      content: "content1",
    },
  ];

  return (
    <div className="card-list">
      {cards.map((card, i) => (
        <Card key={`card-${i}`} title={card.title} content={card.content} />
      ))}
    </div>
  );
};
