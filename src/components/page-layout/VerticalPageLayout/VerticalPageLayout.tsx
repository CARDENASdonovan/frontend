import { Header } from "@/components/organisms/Header/Header";

interface VerticalPageProps {
  children: React.ReactNode;
}

export const VerticalPageLayout = ({ children }: VerticalPageProps) => {
  return (
    <div className="vertical-page-layout">
      <Header />
      {children}
    </div>
  );
};
