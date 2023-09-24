import Link from "next/link";
import { FaHome, FaToolbox } from "react-icons/fa";

export default function Header() {
  return (
    <div className="text-3xl lg:text-5xl text-white bg-blue-600 py-12 px-3 flex flex-row flex-wrap items-center justify-between space-y-3">
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
