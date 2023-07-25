"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

interface IVideo {
  src: any;
  length: string;
  desc: string;
}

export default function VideoGallery({ videos }: { videos: IVideo[] }) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMuted, setMuted] = useState(true);

  useEffect(() => {
    // Add or remove a class to the body element to disable scrolling
    if (currentVideo !== 0) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Clean up: Remove the class when the component is unmounted
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [currentVideo]);

  function handleWheel(e: number) {
    if (e > 0) {
      if (currentVideo < videos.length) {
        setCurrentVideo(currentVideo + 1);
      } else {
        setCurrentVideo(1);
      }
    } else if (e < 0) {
      if (currentVideo === 1) {
        setCurrentVideo(videos.length);
      } else {
        setCurrentVideo(currentVideo - 1);
      }
    }
  }

  useEffect(() => {
    // Attach or detach the scroll event listener based on the `currentVideo` value

    const handleScroll = (e: any) => {
      handleWheel(e.deltaY);
    };

    if (currentVideo !== 0) {
      window.addEventListener("wheel", handleScroll);
    } else {
      window.removeEventListener("wheel", handleScroll);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentVideo]);

  return (
    <div>
      {currentVideo !== 0 && (
        <div
          onClick={() => setCurrentVideo(0)}
          className="fixed w-full h-[101vh] overflow-visible flex items-center justify-center left-0 top-0 bg-black bg-opacity-50 z-[1200]"
        >
          <div style={{ height: "2000px" }}>
            {/* Content to make the container scrollable */}
          </div>
          <div className="h-[90%] relative">
            <div className="fixed bottom-24 left-[50%] -translate-x-[50%] flex flex-row w-[200px] justify-between z-[1201]">
              <button
                onClick={() => setCurrentVideo(0)}
                className="bg-black  rounded-full p-2 sm:p-3 lg:p-4 bg-opacity-70 hover:bg-opacity-80 text-white font-bold text-2xl border border-white"
              >
                <AiOutlineClose />
              </button>

              <div className="group">
                <button
                  onClick={(e: any) => {
                    setMuted(!isMuted);
                    e.stopPropagation();
                  }}
                  className="bg-black bg-opacity-70 group-hover:bg-opacity-80 rounded-full p-2 sm:p-3 lg:p-4 border border-white"
                >
                  {isMuted && <FaVolumeMute className="w-6 h-6" />}
                  {!isMuted && <FaVolumeUp className="w-6 h-6" />}
                </button>
              </div>
            </div>

            <video
              autoPlay
              onClick={(e: any) => {
                setMuted(!isMuted);
                e.stopPropagation();
              }}
              className={`h-full my-auto w-full  rounded-xl`}
              muted={isMuted}
              loop
              src={`/videos/vid${currentVideo}.mp4`}
            ></video>
          </div>
        </div>
      )}
      <div className="flex flex-row gap-3">
        {videos.map((img, idx) => (
          <div key={idx} className="w-[124px] h-auto relative group">
            <Image
              key={idx}
              src={img.src}
              width={124}
              height={124}
              alt={img.desc}
              className="h-auto w-full rounded-lg block group-hover:hidden group-hover:bg-white"
            />

            <video
              onClick={() => setCurrentVideo(idx + 1)}
              width={124}
              height={124}
              className="h-auto w-full rounded-lg absolute left-0 top-0 hidden group-hover:block"
              autoPlay
              muted
              loop
              src={`/videos/vid${idx + 1}.mp4`}
            ></video>
          </div>
        ))}
      </div>
    </div>
  );
}
