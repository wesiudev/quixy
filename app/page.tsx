import Motivation from "./components/Motivation";
import About from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/HeroModule/HeroModule";
import UnderHero from "./components/UnderHero";
import Shop from "./components/shop/Shop";
import { getShopContent } from "./lib/getShopContent";
import { Metadata } from "next";
export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#8cf562",
  publisher: "wesiudev",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
  title: "Quixy | Utrzyj nosa konkurencji - konkurencyjne strony pod PIXEL.",
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
export default async function Home() {
  const ItemsList = await getShopContent();

  return (
    <>
      <Header />
      <div className="h-screen relative">
        <Hero />
      </div>
      <UnderHero />
      <Motivation />
      <Shop ItemsList={ItemsList} pb={true} />
      <About content={ItemsList.shopItems[0].aboutSection} />
      <Footer content={ItemsList.shopItems} />
    </>
  );
}
