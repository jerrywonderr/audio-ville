"use client";

import useBoolean from "@/lib/hooks/use-boolean";
import Image from "next/image";
import { FaPause, FaPlay } from "react-icons/fa6";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";

const Page = () => {
  const [isPlaying, { toggle: togglePlay }] = useBoolean();

  return (
    <div className="flex flex-col h-full justify-center">
      {/* <p>Play controls</p> */}
      <div className="my-4">
        <h3 className="text-center text-2xl font-bold">Title</h3>
        <h6 className="text-center text-sm">Artiste</h6>
      </div>
      <div className="h-full flex items-center justify-center mx-auto">
        <Image
          src="/assets/music-1.png"
          alt="Music 1 on AudioVille"
          width={1600}
          height={1600}
          className="w-full max-h-[50vh] sm:max-h-[55vh] object-contain"
          priority
        />
      </div>
      <div className="flex justify-center items-center gap-x-12 sm:gap-x-16 mx-4 my-6 sm:my-8">
        <div>
          <button className="sm:scale-110">
            <IoPlaySkipBack size={32} />
          </button>
        </div>
        <div>
          <button
            className="bg-fuchsia-500 px-4 py-4 rounded-full sm:scale-110 text-background"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <FaPause size={48} />
            ) : (
              <FaPlay
                size={48}
                className="translate-x-[8%] duration-1000  transition-all"
              />
            )}
          </button>
        </div>
        <div>
          <button className="sm:scale-110">
            <IoPlaySkipForward size={32} />
          </button>
        </div>
      </div>
      {/* <div className="mt-auto"></div> */}
    </div>
  );
};
export default Page;
