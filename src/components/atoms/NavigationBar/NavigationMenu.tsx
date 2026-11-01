import "./NavigationMenu.scss";

import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const NavigationMenu = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <div className="navigation-menu">
      <Link to="/class/subjects">{t("class_subjects")}</Link>
      <Link to="/consumables">Consumables</Link>
    </div>
  );
};
