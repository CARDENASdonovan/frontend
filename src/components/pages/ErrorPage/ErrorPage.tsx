import { useTranslation } from "react-i18next";
import "./ErrorPage.scss";

interface ErrorPageProps {
  message: string;
}

export const ErrorPage = ({ message }: ErrorPageProps): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <div className="error-screen">
      <h2>{t("message", { replace: { message } })}</h2>
    </div>
  );
};
