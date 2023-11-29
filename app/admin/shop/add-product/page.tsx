import UploadImage from "./UploadImage";
import { getShopProduct } from "@/lib/getShopProduct";

export default async function Page() {
  const products = await getShopProduct();

  return (
    <div className="relative">
      <UploadImage products={products} />
    </div>
  );
}
