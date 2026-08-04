import "./NavigationMenu.scss";

import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export const NavigationMenu = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <div className="navigation-menu">
      <a href="/class/subject">{t("class_subjects")}</a>
    </div>
  );
};
