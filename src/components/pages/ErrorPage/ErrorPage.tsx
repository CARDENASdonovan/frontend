import { VerticalPageLayout } from "@/components/page-layout/VerticalPageLayout/VerticalPageLayout";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import "./ErrorPage.scss";

interface ErrorPageProps {
  message: string;
}

export const ErrorPage = ({ message }: ErrorPageProps): ReactElement => {
  const { t } = useTranslation();
  return (
    <VerticalPageLayout>
      <div className="error-screen">
        <main>{t(message)}</main>
      </div>
    </VerticalPageLayout>
  );
};
