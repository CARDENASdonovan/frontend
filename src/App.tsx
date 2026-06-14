import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import LandingPage from "@/components/pages/LandingPage";
import LoginForm from "@/components/pages/LoginForm";
import TransactionPage from "@/components/pages/TransactionPage";
import { NewPage } from "./components/pages/NewPage";

interface LandingPageProps {
  demo: boolean;
}

const landingPageDemoProps: LandingPageProps = { demo: true };
const landingPageProdProps = { demo: false };

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/new"
          element={<LandingPage {...landingPageDemoProps} />}
        />
        <Route
          path="/prod"
          element={<LandingPage {...landingPageProdProps} />}
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/" element={<NewPage />} />
      </Routes>
    </Router>
  );
}
