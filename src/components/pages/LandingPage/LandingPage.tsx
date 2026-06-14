import { CardList } from "@/components/organisms/CardList/CardList";
import { Header } from "@/components/organisms/Header/Header";
import { useTranslation } from "react-i18next";
import "./LandingPage.scss";

export const LandingPage = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <div className="landing-page">
      <Header />

      <main>
        <div className="title-container">
          <h1>{t("welcome")}</h1>
          <h2>{t("subtitle")}</h2>
        </div>
        <div className="card-list-container">
          <CardList />
        </div>
      </main>
    </div>
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
