import "./Subtitle.scss";

import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

interface SubtitleProps {
  label: string;
}

export const Subtitle = ({ label }: SubtitleProps): ReactElement => {
  const { t } = useTranslation();
  return <h2 className="subtitle">{t(label)}</h2>;
};
