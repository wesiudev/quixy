import Motivation from "./components/Motivation";
import About from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/HeroModule/HeroModule";
import UnderHero from "./components/UnderHero";
import Shop from "./components/shop/Shop";
import { getShopContent } from "./lib/getShopContent";

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
