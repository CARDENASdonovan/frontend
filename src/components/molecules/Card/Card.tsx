import { useTranslation } from "react-i18next";
import "./Card.scss";

export interface CardProps {
  title: string;
  content: string;
}

export const Card = ({ title, content }: CardProps) => {
  const { t } = useTranslation();
  return (
    <div className="card">
      <h2>{t(`${title}`)}</h2>
      <p className="multiline-ellipsis">{t(`${content}`)}</p>
    </div>
  );
};
