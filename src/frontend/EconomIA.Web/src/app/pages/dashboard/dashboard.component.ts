
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: User | null = null;
  currentSection = 'dashboard';
  sidebarCollapsed = false;

  // Dados demo para o dashboard
  financialSummary = {
    totalReceitas: 8500.00,
    totalDespesas: 3250.00,
    saldoAtual: 5250.00,
    percentualEconomia: 38.2
  };

  recentTransactions = [
    { id: 1, tipo: 'receita', descricao: 'Salário', valor: 4500.00, data: '2024-01-15', categoria: 'Trabalho' },
    { id: 2, tipo: 'despesa', descricao: 'Supermercado', valor: -320.50, data: '2024-01-14', categoria: 'Alimentação' },
    { id: 3, tipo: 'despesa', descricao: 'Gasolina', valor: -180.00, data: '2024-01-13', categoria: 'Transporte' },
    { id: 4, tipo: 'receita', descricao: 'Freelance', valor: 800.00, data: '2024-01-12', categoria: 'Extra' },
    { id: 5, tipo: 'despesa', descricao: 'Internet', valor: -99.90, data: '2024-01-10', categoria: 'Contas' }
  ];

  monthlyGoals = [
    { id: 1, titulo: 'Economizar R$ 1.000', progresso: 75, valorAtual: 750, valorMeta: 1000 },
    { id: 2, titulo: 'Reduzir gastos em 20%', progresso: 60, valorAtual: 12, valorMeta: 20 },
    { id: 3, titulo: 'Investir R$ 500', progresso: 40, valorAtual: 200, valorMeta: 500 }
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Obter usuário atual
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    // Observar mudanças na rota para determinar seção atual
    this.route.params.subscribe(params => {
      this.currentSection = params['section'] || 'dashboard';
    });
  }

  onSectionChange(section: string) {
    this.currentSection = section;
    
    if (section === 'sair') {
      this.logout();
      return;
    }
    
    // Navegar para a seção específica
    if (section === 'dashboard') {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/dashboard', section]);
    }
  }

  onSidebarToggle(collapsed: boolean) {
    this.sidebarCollapsed = collapsed;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  // Métodos utilitários para formatação
  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('pt-BR');
  }

  getTransactionClass(tipo: string): string {
    return tipo === 'receita' ? 'transaction-income' : 'transaction-expense';
  }

  getTransactionIcon(tipo: string): string {
    return tipo === 'receita' ? '↗️' : '↙️';
  }

  getAbsoluteValue(value: number): number {
    return Math.abs(value);
  }

  // Métodos para seções dinâmicas
  getSectionTitle(): string {
    const sectionTitles: { [key: string]: string } = {
      'dashboard': 'Dashboard',
      'receitas': 'Receitas',
      'despesas': 'Despesas',
      'relatorios': 'Relatórios',
      'metas': 'Metas Financeiras',
      'configuracoes': 'Configurações',
      'termos': 'Termos de Uso'
    };
    return sectionTitles[this.currentSection] || 'Dashboard';
  }

  getSectionIcon(): string {
    const sectionIcons: { [key: string]: string } = {
      'dashboard': '🏠',
      'receitas': '💰',
      'despesas': '💸',
      'relatorios': '📊',
      'metas': '🎯',
      'configuracoes': '⚙️',
      'termos': '📄'
    };
    return sectionIcons[this.currentSection] || '🏠';
  }

  getSectionFeatures(): string[] {
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
    return features[this.currentSection] || [];
  }
}
