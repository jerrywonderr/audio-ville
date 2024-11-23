import SideBar from "@/lib/components/SideBar";
import Link from "next/link";
import { BsFileEarmarkMusic } from "react-icons/bs";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col">
      <div className="relative">
        <div className="bg-fuchsia-500 blur-sm absolute h-full w-full  -z-20" />
        <Link
          href="/"
          className="font-bold px-4 py-6 text-background text-xl inline-flex items-baseline"
        >
          <BsFileEarmarkMusic size={24} strokeWidth={0.6} />
          AudioVille
        </Link>
      </div>
      <div
        className="flex w-full flex-col sm:flex-row h-full "
        // style={{ gridTemplateColumns: "2fr 10fr" }}
      >
        <SideBar />
        <div className="h-full w-full overflow-auto">{children}</div>
      </div>
      <div className="mt-auto py-6 px-4 bg-fuchsia-500">
        <p className="text-center text-background italic">Powered by Spotify</p>
      </div>
    </div>
  );
}
