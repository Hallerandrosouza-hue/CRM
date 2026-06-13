import { MoreHorizontal } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  status: string;
  source: string;
  date: string;
}

interface TableProps {
  leads: Lead[];
}

export function RecentLeadsTable({ leads }: TableProps) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Leads Recentes</h2>
        <button className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
          Ver todos
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-zinc-400 uppercase bg-zinc-900/30 border-b border-zinc-800">
            <tr>
              <th className="px-6 py-4 font-medium">Nome / Email</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Origem</th>
              <th className="px-6 py-4 font-medium">Data</th>
              <th className="px-6 py-4 font-medium text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-white">{lead.name}</div>
                  <div className="text-zinc-500">{lead.email}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    lead.status === 'Novo' ? 'bg-blue-500/10 text-blue-500' :
                    lead.status === 'Em contato' ? 'bg-purple-500/10 text-purple-500' :
                    lead.status === 'Convertido' ? 'bg-emerald-500/10 text-emerald-500' :
                    'bg-zinc-500/10 text-zinc-400'
                  }`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-zinc-300">
                  {lead.source}
                </td>
                <td className="px-6 py-4 text-zinc-400">
                  {new Date(lead.date).toLocaleDateString('pt-BR')}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 text-zinc-500 hover:text-white transition-colors rounded-md hover:bg-zinc-800">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
            
            {leads.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-zinc-500">
                  Nenhum lead encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
