import { Metadata } from "next";
import About from "../components/About";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import HeroModule from "../components/HeroModule/HeroModule";
import SeoModule from "../components/SeoModule/SeoModule";
import UnderHero from "../components/UnderHero";
import Shop from "../components/shop/Shop";
import { getShopContent } from "../lib/getShopContent";
export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#8cf562",
  publisher: "wesiudev",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
  title:
    "Quixy | Sklep - Utrzyj nosa konkurencji - konkurencyjne strony pod PIXEL.",
  description:
    "W Quixy tworzymy konkurencyjne strony internetowe. Co u nas znajdziesz? Aplikacje internetowe oparte o najnowsze technologie. Oferta stron internetowych. Grafika komputerowa, Grafika na Social Media.",
  openGraph: {
    type: "website",
    url: "https://quixy.pl",
    title: "Quixy | Utrzyj nosa konkurencji - konkurencyjne strony pod PIXEL.",
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
  const ItemsList = await getShopContent();
  return (
    <div>
      <Header />
      <div className="w-full max-h-[35vh] overflow-hidden relative mt-[90px]">
        <HeroModule filter={true} />
      </div>
      <div className="">
        <Shop ItemsList={ItemsList} pb={false} />
      </div>
      <UnderHero />
      <SeoModule pt={true} />
      <About content={ItemsList.shopItems[0].aboutSection} />
      <Footer content={ItemsList.shopItems} />
    </div>
  );
}