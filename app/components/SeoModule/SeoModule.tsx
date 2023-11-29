import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function SeoModule({ pt }: { pt: boolean }) {
  return (
    <div className={`${pt && "pb-24"} w-full px-3 lg:px-[8vw] bg-zinc-600`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full font-coco">
        {/* 1 */}
        <div className="flex flex-col h-full mt-24 ">
          <div className="prose 2xl:prose-xl prose-invert">
            <h2 className="!text-3xl lg:!text-4xl 2xl:!text-5xl mx-auto font-bold text-green-300">
              Skuteczne pozycjonowanie stron internetowych i sklepów e-commerce
            </h2>
            <p className=" font-light pb-12">
              Chcesz zwiększyć widoczność swojej strony internetowej i
              przyciągnąć większą liczbę potencjalnych klientów? Nasza firma
              oferuje kompleksowe usługi pozycjonowania, które pomogą Ci
              osiągnąć wyższą pozycję w wynikach wyszukiwania Google. Poznaj
              korzyści, jakie możemy Ci zaoferować:
            </p>
            <span className=" text-green-300">Wyższa Pozycja w Google</span>
            <p>
              Dzięki naszym profesjonalnym strategiom pozycjonowania, Twoja
              strona internetowa może znaleźć się na pierwszej stronie wyników
              wyszukiwania Google. Wyższa pozycja oznacza większą widoczność, co
              przekłada się na wzrost ruchu na stronie.
            </p>
            <h2 className=" text-green-300">
              Zwiększona Ilość Ruchu na Stronie
            </h2>
            <p>
              Nasze skuteczne techniki pozycjonowania pomagają zwiększyć ilość
              organicznego ruchu na Twojej stronie internetowej. Dzięki temu
              więcej potencjalnych klientów odwiedza Twoją stronę, co może
              prowadzić do większej konwersji i wzrostu sprzedaży.
            </p>
            <h2 className=" text-green-300">
              Pozyskaj Klientów Bez Płatnych Reklam
            </h2>{" "}
            Dzięki naszym
            <p>
              usługom pozycjonowania nie musisz inwestować ogromnych sum w
              płatne reklamy online. Zyskaj wartościowy ruch na stronie bez
              konieczności wydawania dużych budżetów na kampanie reklamowe.
            </p>
            <h2 className=" text-green-300">
              Zwiększenie Wiarygodności i Zaufania
            </h2>
            <p>
              Strony znajdujące się na pierwszej stronie wyników wyszukiwania
              Google są często postrzegane jako bardziej wiarygodne i godne
              zaufania przez użytkowników internetu. Dlatego osiągnięcie
              wysokiej pozycji może zwiększyć zaufanie klientów do Twojej marki.
            </p>
            <h2 className=" text-green-300">
              Lepsza Optymalizacja Strony pod Kątem Użytkowników i Wyszukiwarek
            </h2>
            <p>
              Nasze usługi pozycjonowania obejmują także optymalizację treści i
              struktury strony internetowej, aby była zarówno atrakcyjna dla
              użytkowników, jak i zgodna z wymogami algorytmów wyszukiwarek.
              Dzięki temu Twoja strona nie tylko przyciąga klientów, ale także
              uzyskuje aprobatę od Google.
            </p>
            <h2 className=" text-green-300">Poznaj Wyniki Audytu SEO</h2>
            <p>
              Przed rozpoczęciem procesu pozycjonowania przeprowadzamy
              szczegółowy audyt SEO Twojej strony internetowej. Dzięki temu
              poznajesz jej aktualny stan, mocne strony oraz obszary wymagające
              poprawy. Działamy na podstawie konkretnych danych, aby zapewnić Ci
              skuteczne rezultaty.
            </p>
            <h2 className="w-full shadow-black font-light">
              Działając z nami, masz pewność, że Twoja strona internetowa będzie
              działała na najwyższym poziomie, przyciągając organiczny ruch i
              przekształcając go w lojalnych klientów. Skontaktuj się z nami już
              dziś i zacznij budować silną obecność online dla swojej marki.
            </h2>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col h-full w-full items-end">
          <div className=" pt-24 lg:w-3/4 h-full">
            <Link
              href="/blog"
              className="group px-3 lg:px-0  text-white font-bold text-2xl mt-6 flex flex-row items-center hover:text-green-400 duration-150 w-max mb-12"
            >
              <FaArrowRight className="mr-3 group-hover:translate-x-2 group-hover:text-green-400 duration-150" />
              Artykuły powiązane
            </Link>
            <Link
              href="/blog/jak-wypromować-sklep-e-commerce-z-zegarkami"
              className="group"
            >
              <div className="bg-gray-200 p-3 bg-opacity-20 rounded-xl group-hover:bg-opacity-10 duration-150">
                <h2 className="text-xl lg:text-3xl drop-shadow shadow-black font-bold mb-6 text-white">
                  Jak wypromować sklep e-commerce z zegarkami?
                </h2>
                <div className="grid grid-cols-3">
                  <Image
                    src="/assets/watch1.png"
                    width={256}
                    height={256}
                    alt="author:https://www.ilovemega.com/blog/wp-content/uploads/montre-10-Louis-Moinet-LM-39.50.80.png"
                    className=""
                  />
                  <Image
                    src="/assets/watch2.png"
                    width={256}
                    height={256}
                    alt="author:https://www.ilovemega.com/blog/wp-content/uploads/montre-5-Longines-Master-Collection.png"
                    className=""
                  />
                  <Image
                    src="/assets/watch3.png"
                    width={256}
                    height={256}
                    alt="author:https://www.ilovemega.com/blog/wp-content/uploads/montre-4-Vacheron-Constantin-Dragon.png"
                    className=""
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
