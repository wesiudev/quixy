/* eslint-disable @next/next/no-img-element */

import faq from "@/public/json/faqAboutWebsite.json";
import Shop from "@/app/components/shop/Shop";
import About from "@/app/components/About";
import { Footer } from "@/app/components/Footer";
import ProductHero from "./ProductHero";
import AboutThePage from "./websiteTypes/AboutThePage";
import BriefResponse from "./websiteTypes/BriefResponse";
import shopItems from "@/public/json/ShopContent.json";
import HeroModule from "@/app/components/HeroModule/HeroModule";
import devProcess from "./websiteTypes/content/devProcess.json";
import DevProcess from "./websiteTypes/DevProcess";
export async function generateStaticParams() {
  return shopItems.shopItems.map((page) => ({
    city: page.city,
    websiteId: page.websiteId,
  }));
}
export default async function Page({ params }) {
  const page = shopItems.shopItems.find(
    (page) => page.city === params.city && page.websiteId === params.websiteId
  );

  if (page)
    return (
      <>
        <ProductHero page={page} />
        <AboutThePage item={page} />
        <DevProcess devProcess={devProcess} type={page.websiteId} />
        <BriefResponse />
        <div className="w-full h-full overflow-hidden relative ">
          <HeroModule filter={true} />
        </div>
        <Shop
          ItemsList={shopItems.shopItems}
          pb={true}
          filter={page.city}
          currentPage={page.websiteId}
        />
        {/* <UnderHero /> */}
        <About content={page.aboutSection} />
        <Footer content={shopItems.shopItems} />
      </>
    );
}

export async function generateMetadata({ params }) {
  const page = shopItems.shopItems.find(
    (page) => page.city === params.city && page.websiteId === params.websiteId
  );
  const title = page?.seo?.title;
  const description = page?.seo?.description;
  const keywords = page?.seo?.keywords;

  const faqQuestions =
    faq.faq
      ?.filter((faq) => faq.city === params.city)
      .map((faq) => ({
        "@type": "Question",
        name: faq.content.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.content.answer,
        },
      })) ?? [];

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqQuestions,
  };
  return {
    title,
    description,
    keywords,
    openGraph: {
      type: "website",
      url: "https://quixy.pl",
      title,
      description,
      siteName: "Quixy",
      images: [
        {
          url: "/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: "/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/favicon.ico",
          sizes: "48x48",
          type: "image/x-icon",
        },
        {
          url: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          url: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          url: "/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
      site: "@quixy",
      title,
      description,
      image: {
        url: "/android-chrome-512x512.png",
        alt: "Quixy Logo",
      },
    },
    schema: [faqPage],
    meta: [
      {
        name: "theme-color",
        content: "#8cf562",
      },
    ],
  };
}
