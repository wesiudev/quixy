"use client";

import { useState } from "react";
export default function FaqMap({
  faq,
  city,
}: {
  faq: { city: string; content: { question: string; answer: string }[] }[];
  city: string;
}) {
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [filteredFaq, setFilteredFaq] = useState<
    { city: string; content: { question: string; answer: string }[] }[]
  >(faq.filter((faq) => faq.city === city));

  const handleSearch = (e: any) => {
    const value = e.target.value;
    setSearch(value);
    setLoading(true);
    setTimeout(() => {
      const filteredData = faq
        .filter((faq) => city === faq.city)
        .map((faq) => {
          const filteredContent = faq.content.filter(
            (item) =>
              item.question.toLowerCase().includes(value.toLowerCase()) ||
              item.answer.toLowerCase().includes(value.toLowerCase())
          );
          return { ...faq, content: filteredContent };
        })
        .filter((faq) => faq.content.length > 0);
      setFilteredFaq(filteredData);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center">
        <input
          className="bg-[#303030] text-white rounded-xl p-4 my-4 w-[300px]"
          type="text"
          placeholder="Szukaj..."
          onChange={handleSearch}
        />
        {isLoading && (
          <div className="text-yellow-400 ml-3 animate-spin">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 8h.01M4 16h.01M20 8h-2a4 4 0 00-4 4v4a4 4 0 004 4h2m0-16a4 4 0 00-4 4v4a4 4 0 004 4h2a4 4 0 004-4V12a4 4 0 00-4-4z"
              />
            </svg>
          </div>
        )}
      </div>

      {filteredFaq.length > 0 &&
        filteredFaq.map &&
        filteredFaq.map((faq, i) => (
          <>
            {faq.content.map((item: any, i: any) => (
              <div
                key={i}
                className="bg-[#303030] text-white rounded-xl p-4 my-4"
              >
                <h2 className="text-2xl">
                  {item.question
                    .split(new RegExp(`(${search})`, "gi"))
                    .map((text: any, i: any) =>
                      text.toLowerCase() === search.toLowerCase() ? (
                        <span key={i} className="text-green-400">
                          {text}
                        </span>
                      ) : (
                        <span key={i}>{text}</span>
                      )
                    )}
                </h2>
                <p className="text-lg">
                  {item.answer
                    .split(new RegExp(`(${search})`, "gi"))
                    .map((text: any, i: any) =>
                      text.toLowerCase() === search.toLowerCase() ? (
                        <span key={i} className="text-green-400">
                          {text}
                        </span>
                      ) : (
                        <span key={i}>{text}</span>
                      )
                    )}
                </p>
              </div>
            ))}
          </>
        ))}
    </div>
  );
}
