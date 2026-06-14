import { FreeDictionaryApiComponent } from "@/components/molecules/FreeDictionaryApiComponent/FreeDictionaryApiComponent";
import { VerticalPageLayout } from "@/components/page-layout/VerticalPageLayout/VerticalPageLayout";
import { ReactElement } from "react";
import "./DictionaryPage.scss";

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
