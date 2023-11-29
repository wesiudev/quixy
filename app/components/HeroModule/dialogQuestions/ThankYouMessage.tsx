import Link from "next/link";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

export default function ThankYouMessage({
  dispatch,
  data,
  setHeroDialogData,
}: {
  dispatch: any;
  data: any;
  setHeroDialogData: Function;
}) {
  return (
    <div
      className={`w-full absolute left-[50%] top-[50%] -translate-x-[50%] flex flex-col items-center justify-center ${
        data.step === 6
          ? "-translate-y-[50%] opacity-100 z-50"
          : "-translate-y-[200%] opacity-0 z-[-50]"
      } duration-500 delay-300`}
    >
      <FaCheckCircle className="text-7xl text-white bg-green-400 rounded-full" />
      <span className="text-xl md:text-3xl text-center text-green-400 drop-shadow shadow-black mt-2">
        Dziękujemy za wiadomość!
      </span>
      <span className="text-lg md:text-2xl mt-3">
        Wkrótce skontaktujemy się z Tobą w celu ustalenia szczegółów.
      </span>
    </div>
  );
}
