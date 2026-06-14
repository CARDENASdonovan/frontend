import { CardList } from "@/components/organisms/CardList/CardList";
import { Header } from "@/components/organisms/Header";
import "./NewPage.scss";

export const NewPage = (): React.ReactElement => {
  return (
    <div className="new-page-container">
      <Header />

      <main>
        <h1>Welcome to the New Page</h1>
        <h2>
          This is a new page in the application. You can add your content here.
        </h2>
        <CardList />
      </main>
    </div>
  );
};
