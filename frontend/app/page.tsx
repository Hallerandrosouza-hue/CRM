"use client";

import { useEffect, useState } from "react";
import { DashboardStats } from "@/components/DashboardStats";
import { RecentLeadsTable } from "@/components/RecentLeadsTable";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca os dados do backend mockado
    fetch('http://127.0.0.1:3333/dashboard')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar dados do backend:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
          <p className="text-zinc-400 mt-1">Bem-vindo ao LeadPulse. Aqui está o resumo do seu tráfego hoje.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors text-sm">
            Baixar Relatório
          </button>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-purple-500/20 text-sm">
            Nova Campanha
          </button>
        </div>
      </div>

      {loading ? (
        <div className="w-full h-64 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-zinc-800 border-t-purple-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <DashboardStats data={data?.stats} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentLeadsTable leads={data?.recentLeads || []} />
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-white mb-4">Fontes de Tráfego</h2>
              <div className="space-y-4">
                {[
                  { name: 'Google Ads', value: '45%', color: 'bg-blue-500' },
                  { name: 'Meta Ads', value: '30%', color: 'bg-purple-500' },
                  { name: 'Orgânico', value: '15%', color: 'bg-emerald-500' },
                  { name: 'Direto', value: '10%', color: 'bg-zinc-500' },
                ].map((source, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-zinc-300 font-medium">{source.name}</span>
                      <span className="text-zinc-500">{source.value}</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div className={`h-full ${source.color} rounded-full`} style={{ width: source.value }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
