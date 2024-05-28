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

  income: number = 0;
  expense: number = 0;
  debt: number = 0;

  constructor(private overviewService: OverviewService) { }
  getEntries(): void {
    this.overviewService.getEntries().subscribe(financialEntries => this.financialEntries = financialEntries);
  }

  ngOnInit(): void {
      this.getEntries();
      for(let entry of this.financialEntries) {
        if (entry.type == 'income') {
          this.income += entry.amount;
        } else if (entry.type == 'expense') {
          this.expense += entry.amount;
        }
        else if (entry.type == 'debt') {
          this.debt += entry.amount;
        }

    }
  }
  

  getIncome(): number {
    return this.income;
  }
  getExpense(): number {
    return this.expense;
  }
  getDebt(): number {
    return this.debt;
  }

}
