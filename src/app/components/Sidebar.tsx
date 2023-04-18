import { HomeIcon, Search, Library } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <nav className="space-y-5 mt-10">
        <a href="" className="flex items-center gap-3 text-md font-semibold text-zinc-200">
          <HomeIcon />
          Home
        </a>
        <a href="" className="flex items-center gap-3 text-md font-semibold text-zinc-200">
          <Search /> 
          Search
        </a>
        <a href="" className="flex items-center gap-3 text-md font-semibold text-zinc-200">
          <Library /> 
          Your Library
        </a>
      </nav>

      <nav className="mt-10 pt-10 border-t border-t-zinc-800 flex flex-col gap-3">
        <a href="" className="tex-sm text-zinc-400 hover:text-zinc-100">
          Aniversário
        </a>
        <a href="" className="tex-sm text-zinc-400 hover:text-zinc-100">
          Estudos
        </a>
        <a href="" className="tex-sm text-zinc-400 hover:text-zinc-100">
          Lo-Fi
        </a>
        <a href="" className="tex-sm text-zinc-400 hover:text-zinc-100">
          Festa
        </a>
        <a href="" className="tex-sm text-zinc-400 hover:text-zinc-100">
          Pagode
        </a>
        <a href="" className="tex-sm text-zinc-400 hover:text-zinc-100">
          Hip-Hop
        </a>
      </nav>
    </aside>
  )
}