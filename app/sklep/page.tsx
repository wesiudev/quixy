import About from "../components/About";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Hero from "../components/Hero";
import UnderHero from "../components/UnderHero";
import Shop from "../components/shop/Shop";
import { getShopContent } from "../lib/getShopContent";

export default async function Page() {
  const ItemsList = await getShopContent();
  return (
    <div>
      <Header />
      <div className="w-full max-h-[35vh] overflow-hidden relative mt-[104px]">
        <Hero filter={true} />
      </div>
      <div className="bg-green-500">
        <Shop ItemsList={ItemsList} mt={true} />
      </div>
      <UnderHero />
      <About content={ItemsList.shopItems[0].aboutSection} />
      <Footer content={ItemsList.shopItems} />
    </div>
  );
}
