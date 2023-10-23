import Motivation from "./components/Motivation";
import About from "./components/About";
import { Footer } from "./components/Footer";
import Hero from "./components/HeroModule/HeroModule";
import UnderHero from "./components/UnderHero";
import Shop from "./components/shop/Shop";
import { getShopContent } from "./lib/getShopContent";
export default async function Home() {
  const ItemsList = await getShopContent();

  return (
    <div className="overflow-x-hidden">
      <div className="h-screen relative">
        <Hero />
      </div>
      <UnderHero />
      <Motivation />
      <Shop ItemsList={ItemsList} filter="shop" currentPage="shop" />
      <About content={ItemsList.shopItems[0].aboutSection} />
      <Footer content={ItemsList.shopItems} />
    </div>
  );
}
