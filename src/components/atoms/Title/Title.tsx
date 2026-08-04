import "./Title.scss";

import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

interface TitleProps {
  label: string;
}

export const Title = ({ label }: TitleProps): ReactElement => {
  const { t } = useTranslation();
  return <h1 className="title">{t(label)}</h1>;
};
