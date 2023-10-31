import Motivation from "./components/Motivation";
import About from "./components/About";
import { Footer } from "./components/Footer";
import Shop from "./components/shop/Shop";
import shopItems from "@/public/json/ShopContent.json";
import HeroModule from "./components/HeroModule/HeroModule";
import UnderHero from "./components/UnderHero";
export default async function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="h-screen relative">
        <HeroModule />
      </div>
      <UnderHero />
      <Motivation />
      <Shop
        ItemsList={shopItems.shopItems}
        filter="shop"
        currentPage="shop"
        color="#212121"
        labelColor="#111111"
      />
      <About content={shopItems.shopItems[0].aboutSection} />
      <Footer content={shopItems.shopItems} />
    </div>
  );
}
