import Link from 'next/link';
import { Home, Users, BarChart3, Settings, PieChart, Layers } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 bg-black h-screen sticky top-0 flex flex-col hidden md:flex">
      <div className="h-16 flex items-center px-6 border-b border-zinc-800">
        <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
          <Layers className="w-6 h-6 text-purple-500" />
          LeadPulse
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4 mt-2 px-2">Menu Principal</div>
        
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-zinc-900 text-white font-medium transition-all shadow-sm shadow-black">
          <Home className="w-5 h-5 text-purple-500" />
          Dashboard
        </Link>
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors">
          <Users className="w-5 h-5" />
          Leads
        </Link>
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors">
          <BarChart3 className="w-5 h-5" />
          Campanhas
        </Link>
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors">
          <PieChart className="w-5 h-5" />
          Relatórios
        </Link>
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors">
          <Settings className="w-5 h-5" />
          Configurações
        </Link>
      </div>
    </aside>
  );
}
