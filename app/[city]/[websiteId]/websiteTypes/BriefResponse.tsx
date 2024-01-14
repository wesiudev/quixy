import Image from "next/image";
import Link from "next/link";

type Profession = {
  h1: any;
  h2: string;
  colors: string[];
  style: string;
  purpose: string;
  fonts: {
    fontName: string;
    variants: string[];
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
    <section className=" bg-[#212121] lg:!min-h-full h-max mx-auto lg:px-[3vw] w-full px-3 md:px-6 lg:pb-24 font-coco pt-12">
      <div className="w-full lg:hidden py-12 bg-[#181818] border-2 border-[#242424] mb-12">
        <div className="text-3xl lg:text-5xl  text-white text-center font-bold px-6">
          Przykładowe realizacje
        </div>
      </div>
      {professions.map((item: Profession, i: any) => (
        <div
          role="region"
          key={i}
          className={`flex relative flex-col items-center justify-center lg:justify-normal lg:items-start  w-full h-full rounded-lg  ${
            i > 0 && "lg:mt-12"
          }`}
        >
          <div
            role="region"
            className={`flex items-center justify-center h-[300px]  lg:px-6 md:h-[500px] w-full -mb-36 relative z-[500]`}
          >
            <div className="w-max h-full relative">
              <div className="h-full w-full bg-gradient-to-b from-green-100 via-green-200 to-green-400 p-1 rounded-xl">
                <Image
                  src={item.src}
                  width={512}
                  height={512}
                  alt={item.h1 + " strona wizytowka, strony www"}
                  className={`rounded-lg drop-shadow-md  shadow-black h-full w-auto `}
                />
              </div>

              {i === 0 && (
                <div className="w-full lg:flex flex-col items-end text-right hidden absolute right-[120%] top-12 text-4xl xl:text-5xl 2xl:text-6xl font-bold">
                  {" "}
                  <span className="text-green-100 text-left">NASZE</span>
                  <span className="text-green-200 text-left">PRZYKŁADOWE</span>
                  <span className="text-green-300 text-left">REALIZACJE</span>
                  <span className="text-green-400 text-left">STRON</span>
                </div>
              )}
            </div>
          </div>
          <div
            className={`drop-shadow-md shadow-black !min-h-full flex flex-col justify-between w-full font-coco mb-12 lg:mb-0 bg-[#181818] rounded-xl lg:rounded-br-none lg:rounded-tl-none  p-4 pt-48 lg:p-6 lg:pt-48 group relative`}
          >
            <div className=" ">
              <h2
                className={`!text-2xl lg:!text-3xl xl:!text-5xl 2xl:!text-6xl  drop-shadow-md shadow-black text-green-500 font-bold text-center `}
              >
                {item.h1}
              </h2>
              <p
                className={`!text-base sm:text-lg lg:!text-xl lg:w-4/5 xl:text-3xl xl:w-3/5 2xl:w-1/2 mx-auto mt-3 text-white text-center `}
              >
                {item.h2}
              </p>
              <div
                className={`flex flex-col py-6 w-full justify-center items-center ${
                  i !== 0 && "justify-start items-start"
                }`}
              >
                <p
                  className={`text-base text-yellow-400 mb-6 italic flex flex-row items-center text-center `}
                >
                  &quot;{item.opinion}&quot;
                </p>
                <Link
                  target="_blank"
                  title="Otwórz w nowej karcie..."
                  className={`text-xl text-white mt-2 border-l-4 border-r-4 border-green-400 px-12 py-3 w-max bg-[#282828] hover:bg-[#404040] duration-300 `}
                  href={item.link}
                >
                  Zobacz stronę
                </Link>
              </div>
            </div>
            <div className=" text-white mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#282828] p-3 lg:p-6 rounded-xl lg:rounded-bl-none lg:rounded-tr-none ">
                <div className="flex flex-col justify-start ">
                  <span className="text-lg md:text-2xl lg:text-3xl">
                    Nasza propozycja:
                  </span>
                  <p className="mt-4 text-base sm:text-lg">
                    <span className="text-yellow-400 font-bold">Cel:</span>{" "}
                    {item.purpose}
                  </p>
                  <p className="mt-2 text-base sm:text-lg">
                    <span className="text-yellow-400 font-bold">Styl:</span>{" "}
                    {item.style}
                  </p>
                  <p className="mt-2 text-base sm:text-lg">
                    <span className="text-yellow-400 font-bold">
                      Struktura:
                    </span>{" "}
                    {item.structure}
                  </p>
                  <p className="mt-2 text-base sm:text-lg">
                    <span className="text-yellow-400 font-bold">Rozwój:</span>{" "}
                    {item.possible}
                  </p>
                </div>
                <div>
                  <div className="grid grid-cols-1 mt-4 lg:mt-0">
                    <span className="text-green-400 font-bold text-lg md:text-2xl lg:text-3xl">
                      Kolory:
                    </span>{" "}
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 mt-4">
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
                      <span className="text-green-400 font-bold text-lg md:text-2xl lg:text-3xl mb-4">
                        Czcionki:
                      </span>{" "}
                      {item.fonts.map((font, i) => (
                        <div key={i} className="flex flex-col">
                          <div className="mr-2 text-yellow-400 text-lg md:text-2xl flex flex-row items-center">
                            <div>{font.fontName.toUpperCase()}</div>
                            <div className="ml-3 text-white opacity-0 group-hover:opacity-50 duration-300 text-sm">
                              ({font.source})
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
    </section>
  );
}

const professions = [
  {
    h1: (
      <div className="flex flex-row items-center justify-center text-center">
        <Link href="/shop/strona-wizytowka" className="mr-2">
          {" "}
          Strona wizytówka
        </Link>{" "}
        dla radcy prawnego
      </div>
    ),
    h2: "Jako radca prawny, Twoja reputacja i zaufanie klientów to Twoje najważniejsze atuty. Dlatego zainwestuj w naszą wizytówkę internetową, która nie tylko odzwierciedli Twoją ekspertyzę, ale także pokaże Twoje unikalne podejście do prawa.",
    colors: ["#685A50", "#4ADE80", "#D8B4FE"],
    style: "Elegancki i Profesjonalny",
    purpose: "Szybki kontakt z kancelarią, prezentacja usług",
    fonts: [
      {
        fontName: "inter",
        variants: ["regular", "bold"],
        source: "Ogólnodostępna",
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
    h2: "Jako fryzjer, Twoja strona internetowa jest Twoim głównym narzędziem marketingowym. Nasza strona wizytówka jest idealnym miejscem, aby pokazać światu swoje umiejętności i doświadczenie.",
    colors: ["#22C55E", "#F3F4F6", "#93C5FD"],
    style: "Nowoczesny i Trendy",
    purpose: "Szybki kontakt, prezentacja usług",
    fonts: [
      {
        fontName: "cocosharp",
        variants: ["regular", "bold"],
        source: "Kolekcja własna",
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
    h1: (
      <div className="flex flex-row items-center justify-center text-center">
        <Link href="/shop/sklep-internetowy" className="mr-2">
          {" "}
          Sklep Internetowy
        </Link>{" "}
        dla artysty
      </div>
    ),
    h2: "Jako artysta, Twoje dzieła są Twoim głosem w świecie sztuki. Nasza strona wizytówka jest idealnym miejscem, aby pokazać światu Twoje twórcze dzieła. Z naszym wsparciem, Twoje portfolio artystyczne zostanie zaprezentowane profesjonalnie.",
    colors: ["#252326", "#8F26F3", "#22C55E"],
    style: "Kreatywny i Artystyczny",
    purpose:
      "Prezentacja Portfolio, informacje o studio, kontakt i umawianie wizyt",
    fonts: [
      {
        fontName: "cocosharp",
        variants: ["regular", "bold", "light", "italic"],
        source: "Kolekcja własna",
      },
      {
        fontName: "Gilroy",
        variants: ["regular"],
        source: "Ogólnodostępna",
      },
      {
        fontName: "GraublauWeb",
        variants: ["regular", "bold"],
        source: "Ogólnodostępna",
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
