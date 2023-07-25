import { FaqItem, IFaqItem } from "./faqItem";

export const FaqList = ({ faq }: { faq: IFaqItem[] }) => {
  return (
    <>
      {faq.map((item: IFaqItem, idx: number) => (
        <FaqItem
          key={idx}
          question={item.question}
          answer={item.answer}
          link={item.link}
        />
      ))}
    </>
  );
};
