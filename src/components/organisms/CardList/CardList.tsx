import { Card } from "@/components/molecules/Card/Card";
import { useTranslation } from "react-i18next";
import "./CardList.scss";

export const CardList = (): React.ReactElement => {
  const { t } = useTranslation();
  const cards: { title: string; content: string }[] = t("cards", {
    returnObjects: true,
  });

  return (
    <div className="card-list">
      {cards.map((card, i) => (
        <Card key={i} title={card.title} content={card.content} />
      ))}
    </div>
  );
};
