import { Card, CardProps } from "@/components/molecules/Card/Card";
import { ReactElement } from "react";
import "./CardList.scss";

function parseCards(cards: CardProps[]): ReactElement[] {
  return cards.map((card, i) => (
    <Card key={`card-${i}`} title={card.title} content={card.content} />
  ));
}

export const CardList = (): ReactElement => {
  const cards: CardProps[] = [
    {
      title: "Service 1",
      content:
        "In React Native, use the numberOfLines and ellipsizeMode props on the <Text> component to truncate text with an ellipsis.  The numberOfLines prop limits the visible lines, while ellipsizeMode determines where the dots appear ('tail' for end, 'head' for start, or 'middle').",
    },
    {
      title: "Service 1",
      content:
        "In React Native, use the numberOfLines and ellipsizeMode props on the <Text> component to truncate text with an ellipsis.  The numberOfLines prop limits the visible lines, while ellipsizeMode determines where the dots appear ('tail' for end, 'head' for start, or 'middle').",
    },
  ];

  const layoutClassName = cards.length > 1 ? "card-grid" : "card-column";

  const parsedCards = parseCards(cards);

  return <div className={`card-list ${layoutClassName}`}>{parsedCards}</div>;
};
