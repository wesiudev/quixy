"use client";
import view from "@/app/assets/view.png";
import view2 from "@/app/assets/view2.png";
import Image from "next/image";
import connector from "@/app/assets/laczenie-sekcji-strony-www-o-nas.png";

export default function About() {
  return (
    <div className="min-h-screen w-screen  px-[8vw] pt-12 pb-12 bg-gray-500 font-coco relative">
      <Image
        width={1080}
        height={1920}
        src={view}
        alt="laczenie sekcji strony www o nas"
        className="absolute right-24 top-[30vh] w-[70vw] lg:w-[35vw] opacity-70"
      />
      <Image
        width={1080}
        height={1920}
        src={view2}
        alt="laczenie sekcji strony www o nas"
        className="absolute right-24 bottom-[10vh] w-[70vw] lg:w-[35vw] opacity-70"
      />
      <Image
        width={1080}
        height={1920}
        src={connector}
        alt="laczenie sekcji strony www o nas"
        className="w-full absolute left-0 top-0 -translate-y-[99%]"
      />
      <Image
        width={1080}
        height={1920}
        src={connector}
        alt="laczenie sekcji strony www o nas"
        className="w-full absolute left-0 bottom-0 translate-y-[99%] rotate-180"
      />
      <div className="flex flex-col relative">
        <h1 className="relative text-6xl sm:text-8xl lg:text-7xl font-bold drop-shadow-xl shadow-black text-green-300">
          KIM JESTEŚMY?
        </h1>
        <p className="text-white mt-3 lg:text-xl">
          Witaj na stronie Quixy.pl {"–"} Jesteśmy Twoim partnerem w dziedzinie
          projektowania stron internetowych i grafiki komputerowej na terenie
          Warszawy. Nasza firma to zespół profesjonalistów, którzy kochają to,
          co robią, i z pasją tworzą unikalne rozwiązania online oraz projekty
          graficzne.
        </p>
        <h1 className="relative text-6xl sm:text-8xl lg:text-7xl font-bold drop-shadow-xl shadow-black  mt-24 text-green-300">
          NASZA MISJA
        </h1>
        <h2 className="text-white mt-3 lg:text-xl ">
          Nasza misja polega na dostarczaniu klientom z Warszawy i okolic
          kompleksowych usług z zakresu projektowania stron internetowych i
          grafiki komputerowej. Jesteśmy przekonani, że każdy projekt zasługuje
          na indywidualne podejście oraz najwyższą jakość wykonania. Naszym
          celem jest zapewnienie naszym klientom nie tylko estetycznych, ale
          także funkcjonalnych rozwiązań, które pomogą osiągnąć sukces w świecie
          online.
        </h2>

        <div className="prose lg:prose-xl prose-invert mt-12">
          <h2 className="flex flex-row text-blue-300">Jakość, nie - jakoś</h2>
          <p>
            Dla nas jakość jest priorytetem. Dbamy o każdy detal, aby efekt
            końcowy był perfekcyjny. Nasze prace wyróżniają się estetyką i
            funkcjonalnością.
          </p>
          <h2 className="flex flex-row text-blue-300">Kreatywność</h2>
          <p>
            Nasz zespół twórców jest pełen pomysłów i gotów podejmować się
            wyzwań. Z pasją podchodzimy do projektowania, co gwarantuje
            unikalność i oryginalność naszych prac.
          </p>
          <h2 className="flex flex-row text-blue-300">Doświadczenie</h2>
          <p>
            Jesteśmy doświadczonymi developerami stron internetowych oraz
            projektantami graficznymi. Dzięki naszemu wieloletniemu
            doświadczeniu jesteśmy w stanie sprostać nawet najbardziej
            wymagającym projektom.
          </p>
          <h2 className="flex flex-row text-blue-300">
            Indywidualne podejście
          </h2>
          <p>
            Rozumiemy, że każdy projekt i każdy klient są wyjątkowi. Dlatego
            staramy się poznać Twoje potrzeby i cele, aby stworzyć rozwiązanie
            dostosowane do Ciebie.
          </p>

          <h2 className="flex flex-row text-blue-300">Obszar działania</h2>
          <p>
            Nasza firma działa na terenie całej Polski, co oznacza, że jesteśmy
            dostępni również w Warszawie.
          </p>
        </div>
      </div>
    </div>
  );
}
