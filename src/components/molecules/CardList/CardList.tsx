import "./CardList.scss";

import { ReactElement } from "react";

import { Card, CardProps } from "@/components/atoms/Card/Card";

export interface CardListProps {
  list: CardProps[];
}

function parseCards(list: CardProps[]): ReactElement[] {
  return list.map((card, i) => (
    <Card
      key={`card-${i}`}
      name={card.name}
      description={card.description}
      url={card.url}
    />
  ));
}

export const CardList = ({ list }: CardListProps): ReactElement => {
  const gridClassName = list.length > 1 ? "card-grid" : "";

  const parsedCards = parseCards(list);

  return (
    <div className={`card-list`}>
      <div className={`${gridClassName}`}>{parsedCards}</div>
    </div>
  );
};
