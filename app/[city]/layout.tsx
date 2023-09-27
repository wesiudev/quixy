import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <Header />
      {children}
    </div>
  );
}
