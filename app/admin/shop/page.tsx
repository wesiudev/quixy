import { Metadata } from "next";

import itemsList from "@/public/json/ShopContent.json";
import Header from "../Header";
import HeroModule from "@/app/components/HeroModule/HeroModule";
import Shop from "@/app/components/shop/Shop";
import UnderHero from "@/app/components/UnderHero";
import SeoModule from "@/app/components/SeoModule/SeoModule";
import About from "@/app/components/About";
export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#8cf562",
  publisher: "wesiudev",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
  title: "Quixy | Oferta Tworzenia Stron Internetowych",
  description:
    "W Quixy tworzymy konkurencyjne strony internetowe. Co u nas znajdziesz? Aplikacje internetowe oparte o najnowsze technologie. Oferta stron internetowych. Grafika komputerowa, Grafika na Social Media.",
  openGraph: {
    type: "website",
    url: "https://quixy.pl",
    title: "Quixy | Oferta Tworzenia Stron Internetowych",
    description:
      "W Quixy tworzymy konkurencyjne strony internetowe. Co u nas znajdziesz? Aplikacje internetowe oparte o najnowsze technologie. Oferta stron internetowych. Grafika komputerowa, Grafika na Social Media.",
    siteName: "Quixy",
    images: [
      {
        url: "/favicon.ico",
      },
    ],
  },
};
export default async function Page() {
  return (
    <div>
      <Header />
      <div className="w-full h-full overflow-hidden relative">
        <HeroModule filter={true} />
      </div>
      <div className="">
        <Shop
          ItemsList={itemsList.shopItems}
          filter="shop"
          currentPage="shop"
        />
      </div>
      <UnderHero />
      <SeoModule pt={true} />
      <About content={itemsList.shopItems[0].aboutSection} />
    </div>
  );
}
