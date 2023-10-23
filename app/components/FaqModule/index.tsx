"use client";
import { useState } from "react";
type faQitem = {
  city: string;
  content: { question: string; answer: string }[];
};
export default function FaqModule({
  faq,
  city,
}: {
  faq: { city: string; content: { question: string; answer: string }[] }[];
  city: string;
}) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [numQuestions, setNumQuestions] = useState<number>(6);

  return (
    <>
      <div
        className={`${
          openIndexes.length > 0
            ? "overflow-y-scroll pr-5 lg:pr-6"
            : "overflow-hidden pr-3 lg:pr-0"
        } flex flex-col h-[40vh] scrollbarwhite duration-500`}
      >
        {faq.map((faqItem: faQitem, i: any) => (
          <div key={i}>
            {faqItem.city === city && (
              <div className="grid grid-cols-1 gap-3">
                {faqItem.content
                  .slice(0, numQuestions)
                  .map((item: any, j: any) => (
                    <div className=" " key={j}>
                      <button
                        className={`flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-white   hover:bg-[#323232] focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-50 relative z-50 ${
                          openIndexes.includes(j)
                            ? "bg-[#323232] hover:bg-[#262626]"
                            : "bg-[#262626] hover:bg-[#323232]"
                        }`}
                        onClick={() => {
                          if (openIndexes.includes(j)) {
                            setOpenIndexes(
                              openIndexes.filter((index) => index !== j)
                            ),
                              setNumQuestions(numQuestions - 2);
                          } else {
                            setOpenIndexes([...openIndexes, j]);
                            if (!openIndexes.includes(j)) {
                              setNumQuestions(numQuestions + 2);
                            }
                          }
                        }}
                      >
                        <span>{item.question}</span>
                        <span>{openIndexes.includes(j) ? "-" : "+"}</span>
                      </button>

                      <div
                        className={`px-4 py-2 text-gray-200 bg-[#141414] duration-500 relative z-10 ${
                          openIndexes.includes(j)
                            ? "h-max scale-y-100 -translate-y-0 duration-500"
                            : "h-[0px] scale-y-0 -translate-y-[100%] duration-500"
                        } `}
                      >
                        <p
                          className={`${
                            openIndexes.includes(j)
                              ? "text-white duration-300 delay-300 -translate-y-0"
                              : "text-transparent duration-200 -translate-y-6"
                          }`}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
