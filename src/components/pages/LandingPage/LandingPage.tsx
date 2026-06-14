import { CardList } from "@/components/organisms/CardList/CardList";
import { Header } from "@/components/organisms/Header/Header";
import "./LandingPage.scss";

export const LandingPage = (): React.ReactElement => {
  return (
    <div className="new-page-container">
      <Header />

      <main>
        <h1>Title crampté</h1>
        <h2>Quoicoubé</h2>
        <CardList />
      </main>
    </div>
  );
};
