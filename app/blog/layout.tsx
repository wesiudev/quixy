import { Header } from "../components/Header";
import HeroModule from "../components/HeroModule/HeroModule";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="w-full h-[40vh] overflow-hidden relative pt-[90px]">
        <HeroModule filter={true} />
      </div>
      {children}
    </>
  );
}
