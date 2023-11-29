import About from "./components/About";
import Footer from "./components/Footer";
import Shop from "./components/shop/Shop";
import shopItems from "@/public/json/ShopContent.json";
import HeroModule from "./components/HeroModule/HeroModule";
import UnderHero from "./components/UnderHero";
import BriefResponse from "./[city]/[websiteId]/websiteTypes/BriefResponse";
export default async function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="h-screen relative">
        <HeroModule />
      </div>
      <UnderHero />
      <Shop
        ItemsList={shopItems.shopItems}
        filter="shop"
        currentPage="shop"
        color="#212121"
        labelColor="#111111"
      />
      <div className="mt-12 ">
        <BriefResponse />
      </div>
      <About content={shopItems.shopItems[0].aboutSection} />
      <Footer />
    </div>
  );
}
