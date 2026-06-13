import { Bell, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-black/50 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-6">
      <div className="flex items-center gap-2 flex-1">
        <div className="relative w-full max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Buscar leads, campanhas..." 
            className="w-full bg-zinc-900/50 border border-zinc-800 text-sm text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-zinc-600"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-500 rounded-full border-2 border-black"></span>
        </button>
        <div className="h-8 w-px bg-zinc-800"></div>
        <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-medium text-sm shadow-lg shadow-purple-500/20">
            US
          </div>
          <span className="text-sm font-medium text-white hidden sm:block">Usuário</span>
        </button>
      </div>
    </header>
  );
}
