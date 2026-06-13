import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

interface StatsProps {
  data?: {
    totalLeads: number;
    activeCampaigns: number;
    conversionRate: number;
    costPerLead: number;
  }
}

export function DashboardStats({ data }: StatsProps) {
  const stats = data || {
    totalLeads: 0,
    activeCampaigns: 0,
    conversionRate: 0,
    costPerLead: 0,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Total Leads */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-zinc-400">Total de Leads</h3>
          <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
            <Users className="w-4 h-4 text-blue-500" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white">{stats.totalLeads}</span>
          <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +12%
          </span>
        </div>
      </div>

      {/* Campanhas Ativas */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-zinc-400">Campanhas Ativas</h3>
          <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
            <Target className="w-4 h-4 text-purple-500" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white">{stats.activeCampaigns}</span>
        </div>
      </div>

      {/* Taxa de Conversão */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-zinc-400">Taxa de Conversão</h3>
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white">{stats.conversionRate}%</span>
          <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +2.4%
          </span>
        </div>
      </div>

      {/* Custo por Lead */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-zinc-400">Custo por Lead (CPL)</h3>
          <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-rose-500" />
          </div>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(stats.costPerLead)}
          </span>
          <span className="text-xs font-medium text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +5%
          </span>
        </div>
      </div>
    </div>
  );
}
