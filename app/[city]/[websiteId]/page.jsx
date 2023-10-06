/* eslint-disable @next/next/no-img-element */

import { getWebsiteInfo } from "@/app/lib/getWebsiteInfo";
import Image from "next/image";
import ninja from "@/app/assets/ninja-strony-internetowe-quixy.png";
import superhero from "@/app/assets/superdoge-strony-internetowe-quixy.png";
import { FaCheck, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import UnderHero from "@/app/components/UnderHero";
import Shop from "@/app/components/shop/Shop";
import { getShopContent } from "@/app/lib/getShopContent";
import About from "@/app/components/About";
import shopItems from "@/public/json/ShopContent.json";
import { getShopContentSSR } from "@/app/lib/getShopContentSSR";
import { Footer } from "@/app/components/Footer";
import Hero from "@/app/components/HeroModule/HeroModule";
import ProductHero from "./ProductHero";
import Motivation from "../../components/Motivation";

export async function generateStaticParams() {
  const pages = await getShopContentSSR();
  return pages.pages.map((page) => ({
    city: page.city,
    websiteId: page.websiteId,
  }));
}

export async function generateMetadata({ params }) {
  // fetch data
  const { page } = await getWebsiteInfo(params.city, params.websiteId);
  return {
    title: ``,
    description: ``,
  };
}

export const dynamicParams = false;

export default async function Page({ params }) {
  const { page } = await getWebsiteInfo(params.city, params.websiteId);
  const ItemsList = await getShopContent();
  if (page)
    return (
      <>
        <ProductHero page={page} />
        <Motivation />
        <UnderHero />
        <Shop ItemsList={ItemsList} pb={true} />
        <About content={page.aboutSection} />
        <Footer content={ItemsList.shopItems} />
      </>
    );
}
