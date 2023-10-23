import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
type Profession = {
  h1: string;
  h2: string;
  colors: string[];
  style: string;
  purpose: string;
  fonts: {
    fontName: string;
    variants: string[];
    price: string;
    source: string;
  }[];
  structure: string;
  possible: string;
  link: string;
  linkName: string;
  opinion: string;
  src: string;
};
export default function BriefResponse() {
  return (
    <div className="py-12 bg-[#202020]  h-max mx-auto lg:px-[3vw] w-full px-3">
      <div className="text-2xl lg:text-5xl flex flex-row items-center text-white text-right font-bold">
        Przykładowe odpowiedzi na brief
      </div>
      {professions.map((item: Profession, i: any) => (
        <div
          key={i}
          className={`flex flex-col lg:flex-row  w-full h-full rounded-lg my-24 ${
            i % 2 !== 0 ? "lg:flex-row-reverse " : "flex-row   "
          }`}
        >
          <div className="flex h-max lg:w-1/3 w-full">
            <Image
              src={item.src}
              width={512}
              height={512}
              alt={item.h1 + " strona wizytowka, strony www"}
              className={`rounded-t-xl lg:rounded-xl drop-shadow-md  shadow-black h-max`}
            />
          </div>
          <div
            className={`${
              i % 2 !== 0 ? "lg:mr-12" : "lg:ml-12"
            } drop-shadow-md shadow-black min-h-full flex flex-col justify-between w-full font-coco mb-12 lg:mb-0 bg-[#121212] rounded-b-xl lg:rounded-xl p-6 group`}
          >
            <div>
              <h1 className="!text-2xl lg:!text-4xl  drop-shadow-md shadow-black text-green-500 font-bold">
                {item.h1}
              </h1>
              <h2 className="!text-lg lg:!text-2xl mt-3 text-white ">
                {item.h2}
              </h2>
              <Link
                className="text-xl text-blue-400 mt-2 underline underline-offset-2"
                href={item.link}
              >
                {item.linkName}
              </Link>
              <h4 className="text-base text-yellow-400 mt-6 italic flex flex-row items-center">
                <FaUser className="mr-2 w-5 h-5" /> &quot;{item.opinion}&quot;
              </h4>
            </div>
            <div className=" text-white mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-end">
                  <h1 className="text-2xl lg:text-3xl">Nasza propozycja:</h1>
                  <p className="mt-4 text-lg">
                    <span className="text-yellow-400 font-bold">Cel:</span>{" "}
                    {item.purpose}
                  </p>
                  <p className="mt-2 text-lg">
                    <span className="text-yellow-400 font-bold">Styl:</span>{" "}
                    {item.style}
                  </p>
                  <p className="mt-2 text-lg">
                    <span className="text-yellow-400 font-bold">
                      Struktura:
                    </span>{" "}
                    {item.structure}
                  </p>
                  <p className="mt-2 text-lg">
                    <span className="text-yellow-400 font-bold">Rozwój:</span>{" "}
                    {item.possible}
                  </p>
                </div>
                <div>
                  <div className="grid grid-cols-1 mt-4 lg:mt-0">
                    <span className="text-green-400 font-bold text-2xl lg:text-3xl">
                      Kolory:
                    </span>{" "}
                    <div className="flex flex-row space-x-3 flex-wrap mt-4">
                      {item.colors.map((color, i) => (
                        <li key={i} className="flex flex-row items-center">
                          <div
                            style={{ background: `${color}` }}
                            className={`h-10 w-10 mr-2`}
                          ></div>
                          <span>{color}</span>
                        </li>
                      ))}
                    </div>
                    <div className="flex flex-col mt-4">
                      <span className="text-green-400 font-bold text-2xl lg:text-3xl mb-4">
                        Czcionki:
                      </span>{" "}
                      {item.fonts.map((font, i) => (
                        <div key={i} className="flex flex-col">
                          <div className="mr-2 text-yellow-400 text-2xl flex flex-row items-center">
                            <div>{font.fontName.toUpperCase()}</div>
                            <div className="ml-3 text-white opacity-0 group-hover:opacity-50 duration-300 text-sm">
                              ({font.source}, {font.price})
                            </div>
                          </div>
                          <div>
                            <div className="flex flex-row items-center">
                              {font.variants.map((variant, i) => (
                                <div key={i} className="mr-1 ">
                                  {variant}
                                  {i !== font.variants.length - 1 && ","}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const professions = [
  {
    h1: "Strona wizytówka dla radcy prawnego",
    h2: "Jako radca prawny, Twoja reputacja i zaufanie klientów to Twoje najważniejsze atuty. Dlatego zainwestuj w naszą wizytówkę internetową, która nie tylko odzwierciedli Twoją ekspertyzę, ale także pokaże Twoje unikalne podejście do prawa. Nasza strona wizytówka jest idealnym narzędziem, aby zaprezentować swoje usługi prawne w najlepszym świetle. Z profesjonalnym designem, intuicyjną nawigacją i przystępną ceną, zyskasz nowych klientów i podniesiesz swoją wartość na rynku.",
    colors: ["#685A50", "#4ADE80", "#D8B4FE"],
    style: "Elegancki i Profesjonalny",
    purpose: "Szybki kontakt z kancelarią, prezentacja usług",
    fonts: [
      {
        fontName: "inter",
        variants: ["regular", "bold"],
        source: "Ogólnodostępna",
        price: "Darmowa",
      },
    ],
    structure: "Strona główna, Usługi, Kontakt, Cennik",
    possible: "Blog, Portfolio, Opinie, FAQ",
    link: "https://delugakancelaria.pl/",
    linkName: "Kancelaria Radcy Prawnego Artur Deluga",
    opinion:
      "Quixy.pl dostarczyło wyjątkową stronę internetową. Zadowolony z efektów!",
    src: "/images/strona-wizytowka-dla-radcy.png",
  },
  {
    h1: "Strona wizytówka dla fryzjera",
    h2: "Jako fryzjer, Twoja strona internetowa jest Twoim głównym narzędziem marketingowym. Nasza strona wizytówka jest idealnym miejscem, aby pokazać światu swoje umiejętności i doświadczenie. Z naszym wsparciem, Twoja strona internetowa będzie wyglądać profesjonalnie, przyciągając nowych klientów zainteresowanych Twoimi usługami. Nasza wizytówka internetowa pomoże Ci podkreślić Twoją unikalność i kreatywność.",
    colors: ["#22C55E", "#F3F4F6", "#93C5FD"],
    style: "Nowoczesny i Trendy",
    purpose: "Szybki kontakt z kancelarią, prezentacja usług",
    fonts: [
      {
        fontName: "cocosharp",
        variants: ["regular", "bold"],
        source: "Kolekcja własna",
        price: "200€",
      },
    ],
    structure: "Strona główna, Usługi, Kontakt, Cennik",
    possible: "Blog, Opinie, FAQ",
    link: "https://fryzurykaminska.pl/",
    linkName: "Portfolio fryzur Roksana Kamińska",
    opinion:
      "Quixy.pl dało mi stronę, która przyciąga uwagę! Profesjonalizm w każdym detalu. Polecam z całego serca!",
    src: "/images/strona-wizytowka-dla-fryzjera.png",
  },
  {
    h1: "Strona wizytówka dla artysty",
    h2: "Jako artysta, Twoje dzieła są Twoim głosem w świecie sztuki. Nasza strona wizytówka jest idealnym miejscem, aby pokazać światu Twoje twórcze dzieła. Z naszym wsparciem, Twoje portfolio artystyczne zostanie zaprezentowane profesjonalnie, przyciągając nowych klientów zainteresowanych Twoimi pracami. Nasza wizytówka internetowa pomoże Ci podkreślić Twoją unikalność i kreatywność.",
    colors: ["#252326", "#8F26F3", "#22C55E"],
    style: "Kreatywny i Artystyczny",
    purpose:
      "Prezentacja Portfolio, informacje o studio, kontakt i umawianie wizyt",
    fonts: [
      {
        fontName: "cocosharp",
        variants: ["regular", "bold", "light", "italic"],
        source: "Kolekcja własna",
        price: "200€",
      },
      {
        fontName: "Gilroy",
        variants: ["regular"],
        source: "Ogólnodostępna",
        price: "Darmowa",
      },
      {
        fontName: "GraublauWeb",
        variants: ["regular", "bold"],
        source: "Ogólnodostępna",
        price: "Darmowa",
      },
    ],
    structure: "Strona główna, Portfolio, Kontakt, Sklep",
    possible: "Blog, Opinie, FAQ",
    link: "https://blackbellart.com/",
    linkName: "Portfolio artystyczne Artystki Blackbell",
    opinion: "Cierplowość i profesjonalizm. Polecam!",
    src: "/images/strona-wizytowka-dla-artysty.png",
  },
];
