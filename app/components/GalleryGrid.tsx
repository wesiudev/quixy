import Image from "next/image";

import Link from "next/link";

async function getBlogData() {
  const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog`);
  const data = req.json();
  return data;
}

export const GalleryGrid = () => {
  const topImages = [
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
  ];
  const middleImages = [
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img1,
    img2,
    img3,
    img5,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
  ];
  const bottomImages = [
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];

  const videoImages = [
    { src: vid1img, length: "0:09" },
    { src: vid2img, length: "0:06" },
    { src: vid3img, length: "0:59" },
    { src: vid4img, length: "0:20" },
    { src: vid5img, length: "0:19" },
  ];
  function generateRandomDescription() {
    const themes = [
      "Manicure Hybrydowy Zdjęcie ManicureGrudziadz",
      "Manicure Grudziądz Zdjęcie Pedicure",
      "Najlepsze Paznokcie Grudziadz ManicureGrudziadz",
      "Stylowe Wzory Paznokci ManicureGrudziadz",
      "Paznokcie Grudziadz Zdjecie",
      "Paznokcie Hybrydowe Grudziadz ManicureGrudziadz",
      "Paznokcie Francuskie Grudziadz ManicureGrudziadz",
      "Zdjęcie Paznokci Grudziadz ManicureGrudziadz",
      "Paznokcie Grudziadz ManicureGrudziadz",
      "Pedicure Grudziadz ManicureGrudziadz",
      "Najlepszy Manicure Najlepsze Paznokcie Grudziadz ManicureGrudziadz",
      "Salon Paznokci Grudziadz ManicureGrudziadz",
      // Dodaj więcej tematów manicure, jeśli chcesz.
    ];
    const randomIndex = Math.floor(Math.random() * themes.length);
    return themes[randomIndex];
  }

  // Tworzenie obiektów dla tablicy topImages
  const topImagesWithDescriptions = topImages.map((img) => ({
    src: img,
    desc: generateRandomDescription(),
  }));

  // Tworzenie obiektów dla tablicy middleImages
  const middleImagesWithDescriptions = middleImages.map((img) => ({
    src: img,
    desc: generateRandomDescription(),
  }));

  // Tworzenie obiektów dla tablicy bottomImages
  const bottomImagesWithDescriptions = bottomImages.map((img) => ({
    src: img,
    desc: generateRandomDescription(),
  }));
  const videoImagesWithDescriptions = videoImages.map((img) => ({
    src: img.src,
    length: img.length,
    desc: generateRandomDescription(),
  }));

  return (
    <div className="bg-gradient-to-b from-rose-300 via-rose-200 to-rose-300 w-full">
      <div className="w-full h-max flex justify-center py-12 ">
        <div className="h-max w-[90vw] flex flex-col md:flex-row justify-center relative">
          <div className="flex flex-col md:w-3/5 lg:w-full">
            <h1 className="text-3xl text-center font-sans text-gray-50 sm:py-3 drop-shadow-lg shadow-black py-3 mb-6 bg-rose-500 rounded-lg">
              Paznokcie Klientek
            </h1>

            <div className="w-full flex flex-col h-max relative rounded-xl overflow-hidden">
              <div className="absolute right-0 w-4 h-full backdrop-blur-sm blur-sm z-50" />
              <div className="absolute left-0 w-4 h-full backdrop-blur-sm blur-sm z-50" />
              <div className="relative w-auto flex flex-row items-center justify-center gap-3 animate-translate-x-100 sm:animate-translate-x-100-sm">
                {topImagesWithDescriptions.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.src}
                    width={124}
                    height={124}
                    alt={img.desc}
                    className="w-full h-full rounded-lg"
                  />
                ))}
              </div>
              <div className="w-auto flex flex-row items-center justify-center gap-3 pt-6 animate-minus-translate-x-100 sm:animate-minus-translate-x-100-sm">
                {middleImagesWithDescriptions.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.src}
                    width={124}
                    height={124}
                    alt={img.desc}
                    className="w-full h-full rounded-lg"
                  />
                ))}
              </div>
              <div className="w-auto flex flex-row items-center justify-center gap-3 pt-6 animate-translate-x-100 sm:animate-translate-x-100-sm">
                {bottomImagesWithDescriptions.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.src}
                    width={124}
                    height={124}
                    alt={img.desc}
                    className="w-full h-full rounded-lg"
                  />
                ))}
              </div>
            </div>
            <h1 className="text-3xl text-center font-sans text-gray-50 sm:py-3 drop-shadow-lg shadow-black py-3 mb-6 bg-rose-500 my-6 rounded-lg">
              Zobacz inspiracje
            </h1>

            <VideoGallery videos={videoImagesWithDescriptions} />
          </div>
          <div className="flex flex-col-reverse md:flex-col">
            <div className="md:ml-6 w-full h-max font-sans mt-6 md:mt-0 flex flex-col">
              <h1 className="text-3xl text-center font-sans text-gray-50 sm:py-3 drop-shadow-lg shadow-black py-3 mb-6 bg-rose-500 rounded-lg">
                Manicure Media
              </h1>
              <div className="flex flex-col">
                <Link
                  href="/"
                  className="flex flex-row items-center text-2xl w-full hover:bg-rose-300 rounded-md p-1 relative"
                >
                  <div className="absolute right-3  top-[50%] -translate-y-[50%]">
                    <FaLink />
                  </div>
                  <FaFacebook className="h-12 w-12 text-blue-400 mr-3" />
                  Facebook
                </Link>
                <Link
                  href="/"
                  className="flex flex-row items-center text-2xl mt-3 w-full hover:bg-rose-300 rounded-md p-1 relative"
                >
                  <div className="absolute right-3  top-[50%] -translate-y-[50%]">
                    <FaLink />
                  </div>
                  <FaInstagram className="h-12 w-12 mr-3 bg-gradient-to-b from-rose-400 via-purple-400 to-rose-400 bg-opacity-75 rounded-full p-2" />
                  Instagram
                </Link>
                <Link
                  href="/"
                  className="flex flex-row items-center text-2xl mt-3 w-full hover:bg-rose-300 rounded-md p-1 relative"
                >
                  <div className="absolute right-3 top-[50%] -translate-y-[50%]">
                    <FaLink />
                  </div>
                  <FaPinterestP className="h-12 w-12 text-white mr-3 bg-red-500 rounded-full p-2" />
                  Pinterest
                </Link>
              </div>
            </div>
            <div className="md:ml-6 w-full h-full font-sans mt-6 flex flex-col">
              <h1 className="text-3xl text-center font-sans text-gray-50 sm:py-3 drop-shadow-lg shadow-black py-3 mb-6 bg-rose-500 rounded-lg hidden md:block">
                Rezerwacje
              </h1>
              <div className="overflow-hidden w-full relative">
                <Link
                  href="/rezerwacje"
                  className="absolute w-full h-full left-0 top-0 z-50"
                />
                <video
                  className="rounded-xl w-full h-full"
                  autoPlay
                  muted
                  loop
                  src="/video.mp4"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import vid1img from "@/public/videos/vid1.jpg";
import vid2img from "@/public/videos/vid2.jpg";
import vid3img from "@/public/videos/vid3.jpg";
import vid4img from "@/public/videos/vid4.jpg";
import vid5img from "@/public/videos/vid5.jpg";

import img1 from "@/public/images/img1.jpg";
import img2 from "@/public/images/img2.jpg";
import img3 from "@/public/images/img3.jpg";
import img5 from "@/public/images/img5.jpg";
import img6 from "@/public/images/img6.jpg";
import img7 from "@/public/images/img7.jpg";
import img8 from "@/public/images/img8.jpg";
import img9 from "@/public/images/img9.jpg";
import img10 from "@/public/images/img10.jpg";
import img11 from "@/public/images/img11.jpg";
import img12 from "@/public/images/img12.jpg";
import img13 from "@/public/images/img13.jpg";
import img14 from "@/public/images/img14.jpg";
import img15 from "@/public/images/img15.jpg";
import img16 from "@/public/images/img16.jpg";
import img17 from "@/public/images/img17.jpg";
import img18 from "@/public/images/img18.jpg";
import img19 from "@/public/images/img19.jpg";
import img20 from "@/public/images/img20.jpg";
import img21 from "@/public/images/img21.jpg";
import img22 from "@/public/images/img22.jpg";
import img23 from "@/public/images/img23.jpg";
import img24 from "@/public/images/img24.jpg";
import img25 from "@/public/images/img25.jpg";
import img26 from "@/public/images/img26.jpg";
import img27 from "@/public/images/img27.jpg";
import img28 from "@/public/images/img28.jpg";
import VideoGallery from "./VideoGallery";
import { FaFacebook, FaInstagram, FaLink, FaPinterestP } from "react-icons/fa";
