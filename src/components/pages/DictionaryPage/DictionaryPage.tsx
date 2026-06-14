import "./DictionaryPage.scss";

import { ReactElement } from "react";

import { FreeDictionaryApiComponent } from "@/components/molecules/FreeDictionaryApiComponent/FreeDictionaryApiComponent";
import { VerticalPageLayout } from "@/components/page-layout/VerticalPageLayout/VerticalPageLayout";

export const DictionaryPage = (): ReactElement => {
  // const { t } = useTranslation();

  return (
    <VerticalPageLayout>
      <div className="dictionary-page">
        <main>
          <FreeDictionaryApiComponent word="hello" />
        </main>
      </div>
    </VerticalPageLayout>
  );
};
