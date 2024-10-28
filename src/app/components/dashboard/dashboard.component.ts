import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Output() settingsEvent = new EventEmitter<void>();
  ngAfterViewInit(): void {
    this.initializeCharts();
  }
  initializeCharts() {
    this.createSalesChart();
    this.createPerformanceChart();
  }
  createSalesChart() {
    const ctx = (document.getElementById('salesChart') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
  createPerformanceChart() {
    const ctx = (document.getElementById('performanceChart') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Nuevos cursos', 'Usuarios', 'Cursos totales', 'Registro Pendientes'],
          datasets: [{
            label: '',
            data: [2, 50, 4, 5],
            backgroundColor: ['#28a745', '#ffc107', '#17a2b8', '#dc3545'],
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true
        }
      });
    }
  }
  emitSettingsEvent() {
    this.settingsEvent.emit();
  }
}
