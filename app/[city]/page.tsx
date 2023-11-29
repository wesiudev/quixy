import Link from "next/link";
import cities from "./cities.json";
import { polishToEnglish } from "../utils/polishToEnglish";
import HeroModule from "../components/HeroModule/HeroModule";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import BriefResponse from "./[websiteId]/websiteTypes/BriefResponse";
import Footer from "../components/Footer";
import Technologies from "./technologies/Technologies";
import pl from "./technologies/pl.json";
export async function generateStaticParams() {
  return cities.cities.map((item) => ({
    city: polishToEnglish(item.city),
  }));
}
async function getCities() {
  const data = cities.cities;
  return data;
}
async function getTechnologies() {
  const data = pl.pl[0];
  return data;
}
export default async function Page({ params }: { params: { city: string } }) {
  const data = await getCities();
  const technologies = await getTechnologies();
  return (
    <section>
      <div className="px-5 md:px-[8vw]  lg:px-[10vw] min-h-screen mt-12 font-coco">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 lg:gap-6">
          <div className="flex flex-col">
            {data.map((item: any, i: any) => (
              <div key={i}>
                <h1 className="text-3xl text-green-400 drop-shadow shadow-black font-bold">
                  {params.city === polishToEnglish(item.city) && item.h1}
                </h1>
                <p className="text-white mt-2">
                  {params.city === polishToEnglish(item.city) && item.p}
                </p>
              </div>
            ))}
            <div className="prose lg:prose-lg prose-invert">
              <h2>Strony internetowe, które tworzymy:</h2>
              <ul className="list-none">
                <li className=" -ml-6">
                  <Link
                    href={`${params.city}/strona-wizytowka`}
                    className="flex flex-row items-center no-underline text-green-400"
                  >
                    <FaStar className="text-yellow-400 mr-2" />
                    Strona Wizytówka
                  </Link>
                  Twoje wirtualne wizytówka, prezentująca esencję Twojego
                  biznesu. Zaprezentuj się profesjonalnie i przyciągnij uwagę
                  klientów.
                </li>
                <li className=" -ml-6">
                  <Link
                    href={`${params.city}/landing-page`}
                    className="flex flex-row items-center no-underline text-green-400"
                  >
                    <FaStar className="text-yellow-400 mr-2" />
                    Landing Page
                  </Link>
                  Skuteczne strony docelowe, które koncentrują uwagę
                  użytkowników na kluczowym przekazie. Zwiększ konwersje i
                  osiągaj cele marketingowe.
                </li>
                <li className="-ml-6">
                  <Link
                    href={`${params.city}/sklep-internetowy`}
                    className="flex flex-row items-center no-underline text-green-400"
                  >
                    <FaStar className="text-yellow-400 mr-2" />
                    Sklep Internetowy
                  </Link>
                  Twój wirtualny sklep otwarty 24/7. Oferuj produkty online,
                  obsługuj zamówienia i rozwijaj swoją działalność e-commerce.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid xl:ml-8 grid-cols-2 gap-4 mt-3 lg:mt-0 select-none h-max">
            {images.map((image: any, i: any) => (
              <div key={i} className="relative group aspect-square">
                <div className="flex items-end justify-center text-center font-bold text-2xl rounded-xl absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-[#000000ce] overflow-hidden">
                  <h2 className="text-white drop-shadow-lg text-sm sm:text-lg lg:text-xl mb-3 sm:mb-5 lg:mb-8">
                    {image.alt}
                  </h2>
                </div>
                <Image
                  src={image.src}
                  width={1024}
                  height={1024}
                  alt={image.alt}
                  className="rounded-xl"
                />
                <div
                  className={` group-hover:translate-y-0 translate-y-[250px] duration-500 flex-col fixed bottom-20 lg:bottom-12 w-[80vw] sm:w-[60vw] lg:w-[60vw] xl:[50vw] text-center p-4 bg-white rounded-xl left-[50%] -translate-x-[50%] z-[50] `}
                >
                  <p className="relative">
                    <span className="absolute -top-8 left-[50%] -translate-x-[50%] bg-black font-bold text-yellow-400 rounded-md px-2">
                      Quixy
                    </span>
                    {image.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <Technologies dictionary={technologies} />
      </div>
      <div className="mt-12">
        <BriefResponse />
      </div>
      <Footer />
    </section>
  );
}
const images = [
  {
    src: "/offer/dedicated.webp",
    alt: "Projekty Dedykowane",
    desc: "Niezwykłe projekty dostosowane do unikalnych potrzeb Twojego biznesu. Indywidualne podejście i zaawansowane rozwiązania na miarę Twoich oczekiwań.",
  },
  {
    src: "/offer/graphic.webp",
    alt: "Projekty Graficzne",
    desc: "Kreatywne projekty graficzne, które wyróżnią Twoją markę. Tworzymy unikalne wzornictwo, od logo po materiały marketingowe.",
  },
  {
    src: "/offer/seo.webp",
    alt: "Pozycjonowanie (SEO)",
    desc: "Optymalizacja dla wyszukiwarek (SEO), aby Twoja strona była widoczna dla potencjalnych klientów. Zdobądź lepsze pozycje w wynikach wyszukiwania.",
  },
  {
    src: "/offer/shop.webp",
    alt: "Sklep Internetowy",
    desc: "Tworzymy funkcjonalne sklepy internetowe, które ułatwiają zakupy online. Zapewnimy Ci narzędzia do efektywnego zarządzania asortymentem i obsługi zamówień.",
  },
  {
    src: "/offer/support.webp",
    alt: "Opieka Techniczna",
    desc: "Nasi eksperci oferują kompleksową opiekę techniczną. Dbamy o bezpieczeństwo, aktualizacje i wydajność Twojej strony, abyś mógł skupić się na rozwoju biznesu.",
  },
  {
    src: "/offer/websites.webp",
    alt: "Strona Internetowa",
    desc: "Profesjonalne strony internetowe, które przyciągają uwagę i skutecznie komunikują się z Twoją publicznością. Nowoczesny design i intuicyjna nawigacja dla doskonałego doświadczenia użytkownika.",
  },
];
