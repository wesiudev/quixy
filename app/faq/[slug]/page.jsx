import { faq } from "@/public/json/faqAboutWebsite.json";
import FaqMap from "../FaqMap";
export async function generateStaticParams() {
  return faq.faq.map((item) => ({
    slug: item.city,
  }));
}
export async function generateMetadata({ params }) {
  // fetch data

  const faqQuestions =
    faq.faq
      ?.filter((faq) => faq.city === params.slug)
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
  const title =
    "Quixy - Pytania i odpowiedzi - Tworzenie Stron Internetowych - Utrzyj nosa konkurencji";
  const description =
    "W Quixy tworzymy konkurencyjne strony internetowe. Co u nas znajdziesz? Aplikacje internetowe oparte o najnowsze technologie. Oferta stron internetowych. Grafika komputerowa, Grafika na Social Media.";
  const keywords = [
    "strony internetowe",
    "strona www",
    "programowanie",
    "web development",
  ];
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
    schema: [faqPage],
    meta: [
      {
        name: "theme-color",
        content: "#8cf562", // replace with your desired theme color
      },
    ],
  };
}

export default async function Page({ params }) {
  const city = params.slug;
  if (city)
    return (
      <div className="min-h-screen bg-[#202020] w-full px-3 lg:px-[8vw]">
        <h1 className="text-white text-4xl">Często zadawane pytania</h1>
        <FaqMap city={city} faq={faq.faq} />
      </div>
    );
}
