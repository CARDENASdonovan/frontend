import "./TextSection.scss";

import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

interface TextSectionProps {
  label: string;
}

export const TextSection = ({ label }: TextSectionProps): ReactElement => {
  const { t } = useTranslation();
  return <span className="text-section">{t(label)}</span>;
};
