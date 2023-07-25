import { getFaqData } from "../lib/getFaqData";
import { FaqItem, IFaqItem } from "./faqItem";
import { FaqList } from "./faqList";

export default async function Faq() {
  const { faq } = await getFaqData();
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-rose-300 to-white flex flex-col items-center gap-y-3">
      <h1 className="font-sans italic text-2xl text-white py-3">
        Często zadawane pytania
      </h1>
      <div className="h-1 w-12  rounded-full mx-auto mb-12 bg-rose-600"></div>
      <FaqList faq={faq} />
    </div>
  );
}
