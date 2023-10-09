import { Providers } from "@/redux/Provider";
import { Header } from "../components/Header";
import HeroModule from "../components/HeroModule/HeroModule";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Header />
      <div className="w-full max-h-[35vh] overflow-hidden relative mt-[90px]">
        <HeroModule filter={false} />
      </div>
      {children}
    </Providers>
  );
}
