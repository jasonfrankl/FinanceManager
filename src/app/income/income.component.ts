import { Component, OnInit } from '@angular/core';
import { FinancialEntry } from '../financial-entry';
import { OverviewService } from '../overview.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-income',
  standalone: true,
  imports: [CommonModule,
    NgIf,
    NgFor,
    FormsModule,
    RouterModule,],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
  financialEntries: FinancialEntry[] = [];
  constructor(private overviewService: OverviewService) { }
  getEntries(): void {
    this.overviewService.getEntries().subscribe(financialEntries => this.financialEntries = financialEntries);
  }

  ngOnInit(): void {
    this.getEntries();
  }
}
