"use client";

import cn from "@/lib/utils/cn";
import { IoPhonePortrait } from "react-icons/io5";

const DEVICES = [
  { model: "V2025", location: "Lagos, Nigeria", online: true, os: "Android" },
  {
    model: "iPhone16 Pro",
    location: "New York, Nigeria",
    online: true,
    os: "iOS",
  },
  { model: "Pendora", location: "Lagos, Nigeria", online: false, os: "MacOS" },
  { model: "V2025", location: "Lagos, Nigeria", online: true, os: "Android" },
  { model: "V2025", location: "Lagos, Nigeria", online: false, os: "Android" },
  { model: "V2025", location: "Lagos, Nigeria", online: true, os: "Android" },
  { model: "Pendora", location: "Lagos, Nigeria", online: false, os: "MacOS" },
  { model: "V2025", location: "Lagos, Nigeria", online: true, os: "Android" },
  { model: "V2025", location: "Lagos, Nigeria", online: false, os: "Android" },
  { model: "V2025", location: "Lagos, Nigeria", online: true, os: "Android" },
];

const Page = () => {
  return (
    <div className="flex flex-col h-full gap-y-8 my-4 px-4 ">
      {/* <p>Play controls</p> */}
      {DEVICES.map((device, index) => (
        <div key={index} className="flex pb-4 border-b-fuchsia-200 border-b-2 ">
          <div className="px-4">
            <IoPhonePortrait
              size={64}
              className={device.online ? "text-foreground" : "text-slate-300"}
            />
          </div>
          <div className="h-full flex flex-col justify-between">
            <div className="flex items-center gap-x-2">
              <h4 className="font-semibold">{device.model}</h4>
              <div
                className={cn(
                  "h-3 w-3 rounded-full ",
                  device.online ? "bg-green-600" : "bg-red-600"
                )}
              />
            </div>
            <div className="flex items-center text-sm gap-x-2">
              <p>{device.location}</p>
              <div className="h-2 w-2 rounded-full bg-slate-700" />
              <p>{device.os}</p>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="my-4">
        <h3 className="text-center text-2xl font-bold">Devices</h3>
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
      </div> */}
      {/* <div className="mt-auto"></div> */}
    </div>
  );
};
export default Page;
