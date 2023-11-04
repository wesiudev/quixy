import Image from "next/image";
import Link from "next/link";

export default function ImageComponent({
  imageUrl,
  altText,
}: {
  imageUrl: string;
  altText: string;
}) {
  return (
    <Image
      key={imageUrl}
      width={800}
      height={800}
      className="mx-auto max-w-full flex flex-col"
      src={imageUrl}
      alt={altText}
    />
  );
}
