import { WebsiteOffer } from "@/app/types";
import Image from "next/image";
import FaqModule from "@/app/components/FaqModule";
import faq from "@/public/json/faqAboutWebsite.json";
import Specifications from "./Specifications";
import Promotion from "./Promotion";
export default function AboutThePage({ item }: { item: WebsiteOffer }) {
  return (
    <div className={` w-screen px-[3vw] bg-[#202020] font-coco relative pb-24`}>
      <div id="about" className="-top-24 absolute left-0"></div>
      <div className="grid grid-cols-1 pt-12 pb-12">
        <div className={`w-full text-white`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:pr-12 flex flex-col justify-between ">
              <Specifications item={item} />
              <div className="flex flex-col lg:mt-48 mt-12 pr-3 lg:pr-0">
                <h1 className="text-2xl lg:text-3xl font-bold my-6">
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
                  className="w-full lg:pl-[15vw] mt-24 lg:mt-0"
                />
              </div>
              <div className="relative font-coco font-light h-full flex-col px-12 pt-60 hidden lg:flex">
                <div className="flex flex-row justify-evenly opacity-10 -rotate-45">
                  <div className="bg-[#404040] w-60 h-60 rounded-l-3xl"></div>
                  <div className="bg-[#404040] w-60 h-60 rounded-r-3xl"></div>
                </div>
                <div className="flex flex-row justify-evenly opacity-10 mt-96 -rotate-45">
                  <div className="bg-[#404040] w-60 h-60 rounded-l-3xl"></div>
                  <div className="bg-[#404040] w-60 h-60 rounded-r-3xl"></div>
                </div>
              </div>
              <Promotion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
