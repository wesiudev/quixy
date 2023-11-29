import faq from "@/public/json/faqAboutWebsite.json";
import HeroModule from "../components/HeroModule/HeroModule";
import FaqMap from "./FaqMap";
export default async function Faq() {
  return (
    <div className="px-3 lg:px-[8vw]">
      <h2 className="font-coco text-2xl text-white py-3">
        Często zadawane pytania
      </h2>
      <FaqMap faq={faq.faq} city="shop" />
    </div>
  );
}
