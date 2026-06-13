import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('dashboard')
  getDashboardData() {
    return {
      stats: {
        totalLeads: 1248,
        activeCampaigns: 12,
        conversionRate: 4.8,
        costPerLead: 12.50
      },
      recentLeads: [
        { id: '1', name: 'João Silva', email: 'joao.silva@exemplo.com', status: 'Novo', source: 'Google Ads', date: '2026-06-11T10:00:00Z' },
        { id: '2', name: 'Maria Souza', email: 'maria@exemplo.com', status: 'Em contato', source: 'Meta Ads', date: '2026-06-10T14:30:00Z' },
        { id: '3', name: 'Carlos Oliveira', email: 'carlos@empresa.com', status: 'Convertido', source: 'Orgânico', date: '2026-06-09T09:15:00Z' },
        { id: '4', name: 'Ana Costa', email: 'ana.costa@exemplo.com', status: 'Novo', source: 'Direto', date: '2026-06-08T16:45:00Z' }
      ]
    };
  }
}
