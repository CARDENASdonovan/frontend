import "./LandingPage.scss";

import { ReactElement } from "react";

import { AboutMeSection } from "@/components/molecules/AboutMeSection/AboutMeSection";
import { ServiceList } from "@/components/organisms/ServiceList/ServiceList";
import { VerticalPageLayout } from "@/components/page-layout/VerticalPageLayout/VerticalPageLayout";

export const LandingPage = (): ReactElement => {
  return (
    <VerticalPageLayout>
      <div className="landing-page">
        <main>
          <div>
            <AboutMeSection />
          </div>
          <div className="card-list-container">
            <ServiceList />
          </div>
        </main>
      </div>
    </VerticalPageLayout>
  );
};

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className="language-switcher">
//       <button
//         onClick={() => changeLanguage('en')}
//         disabled={i18n.language === 'en'}
//         className={i18n.language === 'en' ? 'active' : ''}
//       >
//         EN
//       </button>
//       <button
//         onClick={() => changeLanguage('fr')}
//         disabled={i18n.language === 'fr'}
//         className={i18n.language === 'fr' ? 'active' : ''}
//       >
//         FR
//       </button>
//     </div>
//   );
// };
