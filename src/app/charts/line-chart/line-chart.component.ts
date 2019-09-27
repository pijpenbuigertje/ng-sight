import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors'

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [32, 42, 58, 69, 3, 30], label: 'Bier' },
  { data: [42, 65, 32, 65, 46, 21], label: 'Patat' },
  { data: [65, 23, 87, 43, 45, 2], label: 'CHICKENNNNUGGETSSS' }
];

const LINE_CHART_LABELS: string[] = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };

  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit() {
  }
  
}
