"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export interface IFaqItem {
  question: string;
  answer: string;
  link?: string;
}

export const FaqItem = ({ question, answer, link }: IFaqItem) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={toggleFaq}
      className="w-[90vw] mx-auto text-xl text-white font-sans py-2"
    >
      <div className="bg-rose-400 p-3 rounded-md cursor-pointer text-left">
        <div className="flex flex-row items-center ">
          <h3>Pytanie: {question}</h3>
        </div>
        <div className={`mt-3 ${isOpen ? "block" : "hidden"}`}>
          {" "}
          Odpowiedź: <span className="italic">{`${answer}`}</span>
        </div>
      </div>
    </button>
  );
};
