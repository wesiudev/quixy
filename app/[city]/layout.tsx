import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      {children}
    </div>
  );
}
