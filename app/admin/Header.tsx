import Link from "next/link";
import { FaHome, FaToolbox } from "react-icons/fa";

export default function Header() {
  return (
    <div className="absolute left-0 top-0 w-full h-max z-[2000] text-3xl lg:text-5xl text-white bg-blue-600 py-12 px-3 flex flex-row flex-wrap items-center justify-between">
      <h1>ZARZĄDZANIE STRONĄ</h1>
      <Link href="/admin" className="flex flex-row items-center">
        <FaToolbox className="text-white text-3xl lg:text-5xl mr-2" />
        ADMIN
      </Link>
      <Link href="/" className="flex flex-row items-center">
        <FaHome className="text-white text-3xl lg:text-5xl mr-2" />
        STRONA GŁÓWNA
      </Link>
    </div>
  );
}
