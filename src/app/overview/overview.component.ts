import { Component, OnInit } from '@angular/core';
import { FinancialEntry } from '../financial-entry';
import { OverviewService } from '../overview.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule,
    NgIf,
    NgFor,
    FormsModule,],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  financialEntries: FinancialEntry[] = [];
  constructor(private overviewService: OverviewService) { }
  getEntries(): void {
    this.overviewService.getEntries().subscribe(financialEntries => this.financialEntries = financialEntries);
  }

  ngOnInit(): void {
    this.getEntries();
  }
}
