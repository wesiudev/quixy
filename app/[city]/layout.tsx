import HeroModule from "../components/HeroModule/HeroModule";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden">
      <div className=" h-screen relative">
        <HeroModule />
      </div>
      {children}
    </div>
  );
}
