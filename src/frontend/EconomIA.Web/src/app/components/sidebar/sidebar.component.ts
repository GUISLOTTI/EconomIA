
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  badge?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() currentSection = 'dashboard';
  @Output() sectionChange = new EventEmitter<string>();
  @Output() sidebarToggle = new EventEmitter<boolean>();

  isCollapsed = false;

  menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'receitas', label: 'Receitas', icon: '💰', badge: '+' },
    { id: 'despesas', label: 'Despesas', icon: '💸', badge: '-' },
    { id: 'relatorios', label: 'Relatórios', icon: '📊' },
    { id: 'metas', label: 'Metas', icon: '🎯' },
    { id: 'configuracoes', label: 'Configurações', icon: '⚙️' },
    { id: 'termos', label: 'Termos de Uso', icon: '📄' },
    { id: 'sair', label: 'Sair', icon: '🚪' }
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.sidebarToggle.emit(this.isCollapsed);
  }

  selectSection(sectionId: string) {
    this.sectionChange.emit(sectionId);
  }

  getSectionTitle(sectionId: string): string {
    const sectionTitles: { [key: string]: string } = {
      'dashboard': 'Dashboard',
      'receitas': 'Receitas',
      'despesas': 'Despesas',
      'relatorios': 'Relatórios',
      'metas': 'Metas Financeiras',
      'configuracoes': 'Configurações',
      'termos': 'Termos de Uso'
    };
    return sectionTitles[sectionId] || 'Dashboard';
  }

  getSectionIcon(sectionId: string): string {
    const item = this.menuItems.find(item => item.id === sectionId);
    return item?.icon || '🏠';
  }

  getSectionFeatures(sectionId: string): string[] {
    const features: { [key: string]: string[] } = {
      'receitas': [
        'Cadastro de receitas fixas e variáveis',
        'Categorização automática',
        'Histórico completo de recebimentos',
        'Previsão de receitas futuras'
      ],
      'despesas': [
        'Controle de gastos por categoria',
        'Alertas de limite de gastos',
        'Análise de padrões de consumo',
        'Comparativo mensal de despesas'
      ],
      'relatorios': [
        'Gráficos interativos de receitas x despesas',
        'Relatórios mensais e anuais',
        'Exportação para PDF e Excel',
        'Análise de tendências financeiras'
      ],
      'metas': [
        'Definição de metas de economia',
        'Acompanhamento de progresso',
        'Alertas de aproximação das metas',
        'Sugestões de otimização'
      ],
      'configuracoes': [
        'Personalização de categorias',
        'Configuração de notificações',
        'Backup automático de dados',
        'Preferências de visualização'
      ],
      'termos': [
        'Termos de uso atualizados',
        'Política de privacidade',
        'Direitos e responsabilidades',
        'Informações sobre cookies'
      ]
    };
    return features[sectionId] || [];
  }
}
