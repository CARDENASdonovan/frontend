import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ClassSubjectsPage } from "@/components/pages/ClassSubjectsPage/ClassSubjectsPage";
import { ConsumablesPage } from "@/components/pages/ConsumablesPage/ConsumablesPage";
import { DictionaryPage } from "@/components/pages/DictionaryPage/DictionaryPage";
import { ErrorPage } from "@/components/pages/ErrorPage/ErrorPage";
import { LandingPage } from "@/components/pages/LandingPage/LandingPage";

export const RoutesList = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/class/subjects" element={<ClassSubjectsPage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="/consumables" element={<ConsumablesPage />} />
        <Route path="*" element={<ErrorPage message={t("error.notFound")} />} />
      </Routes>
    </Router>
  );
};
