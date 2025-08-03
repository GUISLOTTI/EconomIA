
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  features = [
    {
      icon: '💰',
      title: 'Controle Total',
      description: 'Monitore receitas e despesas com facilidade'
    },
    {
      icon: '📊',
      title: 'Relatórios Inteligentes',
      description: 'Visualize seus dados financeiros com gráficos interativos'
    },
    {
      icon: '🎯',
      title: 'Metas Financeiras',
      description: 'Defina e acompanhe suas metas de economia'
    },
    {
      icon: '🤖',
      title: 'Inteligência Artificial',
      description: 'Insights automáticos para melhorar suas finanças'
    },
    {
  icon: '📷',
  title: 'Leitura de Nota Fiscal',
  description: 'Tire uma foto da sua nota e integre automaticamente seus dados no sistema'
  },
  {
  icon: '🔔',
  title: 'Notificações Inteligentes',
  description: 'Receba alertas sobre vencimento de contas baseadas nos seus hábitos.'
}
  ];

  //{
//  icon: '🤖',
//  title: 'Assistente Virtual Financeiro',
//  description: 'Tenha um assistente financeiro que te guia em decisões importantes e ajusta seu orçamento automaticamente.'
//}

  testimonials = [
    {
      name: 'Maria Silva',
      text: 'O EconomIA revolucionou minha gestão financeira!',
      avatar: '👩‍💼'
    },
    {
      name: 'João Santos',
      text: 'Interface simples e recursos poderosos.',
      avatar: '👨‍💻'
    },
    {
      name: 'Ana Costa',
      text: 'Finalmente consegui controlar meus gastos!',
      avatar: '👩‍🎓'
    }
  ];
}
