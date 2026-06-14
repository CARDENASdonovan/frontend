import "./Card.scss";

import { useTranslation } from "react-i18next";

export interface CardProps {
  name: string;
  description: string;
  url: string;
}

export const Card = ({ name, description, url }: CardProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <a href={url}>
        <div className="card">
          <h2>{t(`${name}`)}</h2>
          <p className="multiline-ellipsis">{t(`${description}`)}</p>
        </div>
      </a>
    </div>
  );
};
