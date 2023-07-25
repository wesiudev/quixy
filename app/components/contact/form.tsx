"use client";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

export const Form = () => {
  const [focus, setFocus] = useState("");
  const [data, setData] = useState({ email: "", message: "" });
  const [isError, setError] = useState({ email: false, message: false });
  function sendEmail() {
    const isEmail = data.email.includes("@") && data.email.includes(".");
    if (!isEmail) {
      setError({ ...isError, email: true });
      setTimeout(() => {
        setError({ ...isError, email: false });
      }, 5000);
    }
  }
  return (
    <div className="flex flex-col w-full h-full p-6 ">
      <div className="relative h-max w-full">
        <input
          className={`p-3 outline-none focus:shadow-md focus:shadow-rose-500 w-full z-5 text-black`}
          type="email"
          onFocusCapture={() => setFocus("email")}
          onBlur={() => setFocus("")}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
        />
        <div
          onClick={() => setFocus("email")}
          className={`absolute top-[50%] flex flex-row items-center cursor-pointer ${
            focus === "email" || data.email !== ""
              ? "-translate-y-[150%]  rounded-md px-3 py-1 left-0 ease-in-out duration-100 bg-rose-500 text-white z-0"
              : "-translate-y-[50%] left-3 ease-in-out duration-150 text-rose-500"
          }
          `}
        >
          <FaEnvelope
            className={`mr-1 ${
              focus === "email" || data.email !== ""
                ? "text-white"
                : "text-rose-500"
            }`}
          />
          Email
        </div>
      </div>
      {isError.email && (
        <div className="text-red-600 p-2 bg-white rounded-lg mt-3">
          Wpisz poprawny email
        </div>
      )}
      <div className="relative h-full w-full mt-9">
        <textarea
          className="p-3 outline-none focus:shadow-md focus:shadow-rose-500 w-full z-5 resize-none h-full text-black"
          onFocusCapture={() => {
            setFocus("message"), setData({ ...data, message: "Cześć Aniu," });
          }}
          onBlur={() => setFocus("")}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          value={data.message}
        />
        <div
          onClick={() => setFocus("message")}
          className={`absolute top-6 flex flex-row items-center cursor-pointer ${
            focus === "message" || data.message !== ""
              ? "-translate-y-[150%]  rounded-md px-3 py-1 left-0 ease-in-out duration-100 bg-rose-500 text-white z-0"
              : "-translate-y-[50%] left-3 ease-in-out duration-150 text-rose-500"
          }`}
        >
          <FaEnvelope
            className={`mr-1 ${
              focus === "message" || data.message !== ""
                ? "text-white"
                : "text-rose-500"
            }`}
          />
          Treść wiadomości
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button
          onClick={sendEmail}
          className="bg-rose-500 px-3 py-2 mt-3 text-white w-full hover:bg-red-400 rounded-md"
        >
          Wyślij wiadomość
        </button>
      </div>
    </div>
  );
};
