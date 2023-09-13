"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

export default function NewPost() {
  const [input, setInput] = useState({ title: "" });
  return (
    <div>
      <Link
        href="/admin"
        className="bg-gray-500 text-3xl lg:text-5xl w-full py-3 px-3 flex flex-row items-center text-white"
      >
        <FaArrowLeft className="mr-3" /> Powrót
      </Link>
      <h1 className="text-3xl lg:text-5xl w-full bg-green-500 text-white py-6 px-3 flex flex-row">
        <FaPlus className="mr-3" /> NOWY POST NA BLOGU
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col">
          <h1 className="w-full py-6 px-3 text-center text-3xl lg:text-5xl bg-rose-500 text-white">
            KREATOR
          </h1>
          <div className="grid grid-cols-1 bg-white text-black text-lg border-r-2 border-black h-max">
            <div className="p-6 flex flex-row items-center bg-blue-500">
              <h1 className="border-r-2 border-white h-full p-6">TYTUŁ</h1>
              <input
                value={input.title}
                onChange={(e) => setInput({ title: e.target.value })}
                className="bg-blue-500 text-white ml-3 w-full h-full border-2 border-white px-3"
                type="text"
              />
            </div>

            <div className="p-6 flex flex-row items-center bg-blue-500">
              <h1 className="border-r-2 border-white h-full p-6">SEKCJA</h1>
              <input
                value={input.title}
                onChange={(e) => setInput({ title: e.target.value })}
                className="bg-blue-500 text-white ml-3 w-full h-full border-2 border-white px-3"
                type="text"
              />
              <button className="w-full bg-blue-500 text-white font-bold text-3xl lg:text-5xl">
                DODAJ SEKCJĘ
              </button>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="w-full py-6 px-3 text-center text-3xl lg:text-5xl bg-purple-500 text-white">
            PODGLĄD
          </h1>
          <div className="flex flex-col p-12">
            <h1 className="text-3xl lg:text-5xl leading-relaxed font-bold">
              {input.title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
