import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Quixy Admin Dashboard",
};
export default function Admin() {
  return (
    <div className="grid grid-cols-4">
      <Link
        href="/admin/new-post"
        className="flex items-center justify-center aspect-square bg-blue-500 text-white text-3xl lg:text-5xl hover:bg-blue-400 duration-200"
      >
        NOWY POST
      </Link>
      <Link
        href="/admin/new-product"
        className="flex items-center justify-center aspect-square bg-green-500 text-white text-3xl lg:text-5xl hover:bg-green-400 duration-200"
      >
        NOWY PRODUKT
      </Link>
    </div>
  );
}
