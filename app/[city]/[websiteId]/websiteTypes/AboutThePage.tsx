"use client";
import { WebsiteOffer } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import FaqModule from "@/app/components/FaqModule";
import faq from "@/public/json/faqAboutWebsite.json";
import Specifications from "./Specifications";
import { useState } from "react";
export default function AboutThePage({ item }: { item: WebsiteOffer }) {
  const [isExpanded, toggleExpand] = useState({
    domain: false,
    hosting: false,
  });
  return (
    <div className={` w-screen px-[3vw] bg-[#202020] font-coco relative`}>
      <div id="about" className="-top-24 absolute left-0"></div>
      <div className="grid grid-cols-1 pt-12 pb-12">
        <div className={`w-full text-white`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:pr-12 flex flex-col justify-between ">
              <Specifications item={item} />
              <div className="flex flex-col lg:mt-48 mt-12 pr-3 lg:pr-0 my-12">
                <h1 className="text-3xl lg:text-4xl font-bold my-6">
                  Często zadawane pytania
                </h1>
                <FaqModule faq={faq.faq} city={item.city} />
              </div>
            </div>
            <div className="flex flex-col justify-between w-full">
              <div>
                <Image
                  src="/assets/websites.png"
                  width={1024}
                  height={1024}
                  alt=""
                  className="w-full "
                />
              </div>
              <div className="mt-12">
                <h1 className="font-bold mb-12 text-xl lg:text-3xl  text-left text-white mt-24 p-3  bg-[#191919] lg:p-6 rounded-xl">
                  Aktywne promocje
                  <div className="mt-6 lg:mt-12">
                    <div className="prose prose-invert font-coco  lg:px-0">
                      <div className="flex flex-row items-start ">
                        <span className="text-green-400 font-bold text-lg lg:text-2xl  !m-0 !p-0">
                          Domena na 2 lata w cenie strony!
                        </span>
                        <button
                          title="otwórz zasady promocji"
                          onClick={() =>
                            toggleExpand({
                              ...isExpanded,
                              domain: !isExpanded.domain,
                            })
                          }
                          className="text-gray-400 font-light ml-3"
                        >
                          zasady
                        </button>
                      </div>
                      <div>
                        {isExpanded.domain && (
                          <ul className="font-light">
                            <li>
                              <strong>Darmowa Domena</strong>: Oferujemy darmową
                              domenę na 2 lata dla każdej zakupionej strony
                              internetowej w{" "}
                              <span className="text-yellow-400 font-bold">
                                Quixy.pl
                              </span>
                              .
                            </li>
                            <li>
                              <strong>Warunki Uczestnictwa</strong>: Oferta
                              dotyczy nowych klientów i osób, które kupują
                              stronę w{" "}
                              <span className="text-yellow-400 font-bold">
                                Quixy.pl
                              </span>
                              .
                            </li>
                            <li>
                              <strong>Ograniczenia Domen</strong>: Darmowa
                              domena obejmuje wybrane rozszerzenia, nie dotyczy
                              domen premium.
                            </li>
                            <li>
                              <strong>Przeniesienie Domeny</strong>: Jeśli
                              klient już ma domenę, możemy pomóc w przeniesieniu
                              jej na nasze serwery.
                            </li>
                            <li>
                              <strong>Opłaty po 2 Latach</strong>: Po dwóch
                              latach klient płaci za przedłużenie domeny zgodnie
                              z{" "}
                              <Link href="/pricing" className="text-green-400">
                                cennikiem
                              </Link>
                              , czyli 300zł/rok na dzień{" "}
                              {moment().format("DD.MM.YYYY")}
                            </li>
                            <li>
                              <strong>Zastrzeżenia</strong>:{" "}
                              <span className="text-yellow-400 font-bold">
                                Quixy.pl
                              </span>{" "}
                              zastrzega sobie prawo do zmiany warunków promocji,
                              ale istniejący klienci nie są dotknięci zmianami.
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 lg:mt-6">
                    <div className="prose prose-invert font-coco  lg:px-0">
                      <div className="flex flex-row items-start">
                        <span className="text-green-400 font-bold  text-lg lg:text-2xl  !m-0 !p-0">
                          Hosting za darmo przez pierwszy rok!
                        </span>
                        <button
                          title="otwórz zasady promocji"
                          onClick={() =>
                            toggleExpand({
                              ...isExpanded,
                              hosting: !isExpanded.hosting,
                            })
                          }
                          className="text-gray-400 font-light ml-3"
                        >
                          zasady
                        </button>
                      </div>
                      <div
                        onClick={() =>
                          toggleExpand({ ...isExpanded, hosting: true })
                        }
                      >
                        {isExpanded.hosting && (
                          <ul className="font-light">
                            <li>
                              <strong>Darmowy Hosting</strong>: Oferujemy
                              darmowy hosting przez pierwszy rok, o ile
                              miesięczny ruch na stronie nie przekracza 100,000
                              użytkowników.
                            </li>
                            <li>
                              <strong>Ograniczenia Ruchu</strong>: Darmowy
                              hosting obejmuje strony z ruchem do 100,000
                              użytkowników na miesiąc. W przypadku przekroczenia
                              tego limitu, klient może zaktualizować swój plan
                              lub podlegać dodatkowym opłatom.
                            </li>
                            <li>
                              <strong>Warunki Wyłączenia</strong>: Promocja nie
                              obejmuje hostingu premium ani dodatkowych usług,
                              które nie są częścią standardowego planu hostingu.
                              Dodatkowe opcje bezpieczeństwa i wsparcia są
                              dostępne w płatnych planach.
                            </li>
                            <li>
                              <strong>Opłaty po dwóch latach</strong>: Po dwóch
                              latach klient płaci za przedłużenie hostingu
                              zgodnie z{" "}
                              <Link href="/pricing" className="text-green-400">
                                cennikiem
                              </Link>
                              , czyli 500zł/rok na dzień{" "}
                              {moment().format("DD.MM.YYYY")}
                            </li>
                            <li>
                              <strong>Zastrzeżenia</strong>:{" "}
                              <span className="text-yellow-400 font-bold">
                                Quixy.pl
                              </span>{" "}
                              zastrzega sobie prawo do zmiany warunków promocji,
                              ale istniejący klienci nie są dotknięci zmianami.
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
