import About from "./components/About";
import Hero from "./components/Hero";
import UnderHero from "./components/UnderHero";
import Shop from "./components/shop/Shop";
import { getShopContent } from "./lib/getShopContent";

// async function getServicesList() {
//   const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/services`);
//   // Recommendation: handle errors
//   if (!req.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }
//   const services = req.json();
//   return services;
// }

export default async function Home() {
  const ItemsList = await getShopContent();
  return (
    <>
      <Hero />
      <UnderHero />
      {/* <Shop ItemsList={ItemsList} /> */}
      <About />
    </>
  );
}
