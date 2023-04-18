import { ChevronLeft, ChevronRight, HomeIcon, Laptop2, Library, List, Maximize, Maximize2, Mic2, Play, Repeat, Search, Shuffle, SkipBack, SkipForward, Volume2 } from "lucide-react";
import Image from "next/image";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-5">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
              </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
              </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors ">
              <Image src="/favicon.png" width={120} height={120} alt="Playlist total" />
              <strong>Playlist 1</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="black" />
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors ">
              <Image src="/favicon.png" width={120} height={120} alt="Playlist total" />
              <strong>Playlist 1</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="black" />
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors ">
              <Image src="/favicon.png" width={120} height={120} alt="Playlist total" />
              <strong>Playlist 1</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="black" />
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors ">
              <Image src="/favicon.png" width={120} height={120} alt="Playlist total" />
              <strong>Playlist 1</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="black" />
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors ">
              <Image src="/favicon.png" width={120} height={120} alt="Playlist total" />
              <strong>Playlist 1</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="black" />
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors ">
              <Image src="/favicon.png" width={120} height={120} alt="Playlist total" />
              <strong>Playlist 1</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="black" />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-3xl mt-10">Made for Natanael Silva....</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src="/favicon.png" className="w-full" width={120} height={120} alt="Capa do album" />
              <strong className="font-semibold">Mix 1</strong>
              <span className="text-sm text-zinc-500">Artissta 1</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src="/favicon.png" className="w-full" width={120} height={120} alt="Capa do album" />
              <strong className="font-semibold">Mix 1</strong>
              <span className="text-sm text-zinc-500">Artissta 1</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src="/favicon.png" className="w-full" width={120} height={120} alt="Capa do album" />
              <strong className="font-semibold">Mix 1</strong>
              <span className="text-sm text-zinc-500">Artissta 1</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src="/favicon.png" className="w-full" width={120} height={120} alt="Capa do album" />
              <strong className="font-semibold">Mix 1</strong>
              <span className="text-sm text-zinc-500">Artissta 1</span>
            </a>
            <a className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image src="/favicon.png" className="w-full" width={120} height={120} alt="Capa do album" />
              <strong className="font-semibold">Mix 1</strong>
              <span className="text-sm text-zinc-500">Artissta 1</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
