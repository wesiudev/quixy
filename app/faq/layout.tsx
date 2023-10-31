import HeroModule from "../components/HeroModule/HeroModule";
import FaqNavigation from "./FaqNavigation";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-[#202020] flex flex-col items-center gap-y-3">
      <div className="w-full max-h-[35vh] overflow-hidden relative mt-[90px]">
        <HeroModule filter={true} />
      </div>
      <FaqNavigation />
      {children}
    </div>
  );
}
