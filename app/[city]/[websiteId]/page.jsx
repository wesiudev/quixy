/* eslint-disable @next/next/no-img-element */

import { getWebsiteInfo } from "@/app/lib/getWebsiteInfo";

import UnderHero from "@/app/components/UnderHero";
import Shop from "@/app/components/shop/Shop";
import { getShopContent } from "@/app/lib/getShopContent";
import About from "@/app/components/About";
import { getShopContentSSR } from "@/app/lib/getShopContentSSR";
import { Footer } from "@/app/components/Footer";
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
    title: `${page.seo.title}`,
    description: `${page.seo.description}`,
    openGraph: {
      type: "website",
      url: "https://quixy.pl",
      title: `${page.seo.title}`,
      description: `${page.seo.description}`,
      siteName: "Quixy",
      images: [
        {
          url: "/favicon.ico",
        },
      ],
    },
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
