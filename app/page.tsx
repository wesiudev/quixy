import Motivation from "./components/Motivation";
import About from "./components/About";
import { Footer } from "./components/Footer";
import Hero from "./components/HeroModule/HeroModule";
import UnderHero from "./components/UnderHero";
import Shop from "./components/shop/Shop";
import shopItems from "@/public/json/ShopContent.json";
export default async function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="h-screen relative">
        <Hero />
      </div>
      <UnderHero />
      <Motivation />
      <Shop ItemsList={shopItems.shopItems} filter="shop" currentPage="shop" />
      <About content={shopItems.shopItems[0].aboutSection} />
      <Footer content={shopItems.shopItems} />
    </div>
  );
}
