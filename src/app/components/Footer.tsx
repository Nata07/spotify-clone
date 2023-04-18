import { Laptop2, List, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume2 } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-t-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/favicon.png" width={72} height={72} alt="Capa do album" />
          <div className="flex flex-col">
            <strong className="font-normal">Name Music</strong>
            <strong className="text-sm text-zinc-500">Artist</strong>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle className="text-zinc-200" />
            <SkipBack fill="white" className="text-zinc-200" />
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play fill="black" />
            </button>
            <SkipForward fill="white" className="text-zinc-200" />
            <Repeat className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-400">00:32</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="h-1 rounded-full w-40 bg-white"></div>
            </div>
            <span className="text-xs text-zinc-400">00:32</span>
          </div>
        </div>
        <div className="flex item-center gap-3">
          <Mic2 />
          <List />
          <Laptop2/>
          <div className="flex items-center gap-4">
            <Volume2 />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="h-1 rounded-full w-10 bg-white"></div>
            </div>
          </div>
          <Maximize2 />
        </div>
      </footer>
  )
}