import Link from "next/link";
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

export const Audience = ({
  dispatch,
  data,
  setHeroDialogData,
}: {
  dispatch: any;
  data: any;
  setHeroDialogData: Function;
}) => {
  const [input, setInput] = useState("");

  return (
    <>
      <div
        className={`w-full absolute left-[50%] top-[50%] -translate-x-[50%] flex flex-col items-center duration-500 delay-500 justify-center ${
          data.step === 3
            ? "-translate-y-[50%] opacity-100 z-50"
            : "-translate-y-[200%] opacity-0 z-[-50]"
        }   `}
      >
        <h1 className=" text-white w-max text-3xl lg:text-4xl xl:text-5xl font-bold font-coco">
          DLA KOGO STRONA?
        </h1>
        <h2 className="text-sm font-light italic my-1 ">
          określ grupę docelową
        </h2>

        <form
          className="flex flex-col items-center"
          onSubmit={(e) => {
            dispatch(setHeroDialogData({ ...data, step: 4 }));
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <input
            className="bg-white p-2 rounded-md text-lg md:text-xl text-zinc-700 drop-shadow-lg shadow-black my-3 placeholder-shown:text-yellow-400 selection:outline-none focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-80 w-full md:w-[400px] placeholder:text-center placeholder:text-5xl"
            placeholder="..."
            type="text"
            value={input}
            autoFocus={data.step === 3 ? true : false}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyDown={(e: any) => {
              if (e.code === 13) {
                e.currentTarget.form.submit();
              }
            }}
          />
          <div className="flex flex-row items-center space-x-6">
            <button
              onClick={(e) => {
                dispatch(setHeroDialogData({ ...data, step: 2 }));
                e.preventDefault();
                e.stopPropagation();
              }}
              title="Poprzedni krok"
              className={`rotate-180  my-3 h-max w-max rounded-full  hover:shadow-green-400 hover:bg-green-500  duration-100`}
            >
              <FaArrowCircleRight className="w-12 h-12 text-white " />
            </button>
            <button
              title="Następny krok"
              className={`my-3 h-max w-max rounded-full hover:disabled:shadow-sm hover:disabled:shadow-red-400 hover:disabled:bg-red-500 hover:disabled:cursor-not-allowed  ${
                input.length >= 1 && "bg-green-500 shadow-sm shadow-green-400"
              } duration-100`}
              disabled={input.length <= 0}
            >
              <FaArrowCircleRight className="w-12 h-12 text-white " />
            </button>
          </div>
          <Link
            target="_blank"
            className="text-sm mt-3 text-yellow-400"
            title="Jak określić grupę docelową na stronie internetowej?"
            href="/blog/jak-okreslic-grupe-docelowa-strony-internetowej"
          >
            Jak określić grupę docelową?
          </Link>
        </form>
      </div>
    </>
  );
};
