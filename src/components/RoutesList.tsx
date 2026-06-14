import { ErrorPage } from "@/components/pages/ErrorPage/ErrorPage";
import { LandingPage } from "@/components/pages/LandingPage/LandingPage";
import { useTranslation } from "react-i18next";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const RoutesList = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="*"
          element={<ErrorPage message={t("error.not_found")} />}
        />
      </Routes>
    </Router>
  );
};
