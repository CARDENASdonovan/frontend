import "./ClassSubjectsPage.scss";

import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { ServiceList } from "@/components/organisms/ServiceList/ServiceList";
import { VerticalPageLayout } from "@/components/page-layout/VerticalPageLayout/VerticalPageLayout";

export const ClassSubjectsPage = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <VerticalPageLayout>
      <div className="class-subjects-page">
        <main>
          <div className="title-container">
            <h1>{t("title")}</h1>
            <h2>{t("subtitle")}</h2>
          </div>
          <div className="card-list-container">
            <ServiceList />
          </div>
        </main>
      </div>
    </VerticalPageLayout>
  );
};
