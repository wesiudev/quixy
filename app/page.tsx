import About from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import UnderHero from "./components/UnderHero";
import Shop from "./components/shop/Shop";
import { getShopContentSSR } from "./lib/getShopContentSSR";

export default async function Home() {
  const ItemsList = await getShopContentSSR();

  return (
    <>
      <Header />
      <Hero />
      <UnderHero />
      <Shop ItemsList={ItemsList} />
      <About content={ItemsList.pages[0].aboutSection} />
      <Footer />
    </>
  );
}
