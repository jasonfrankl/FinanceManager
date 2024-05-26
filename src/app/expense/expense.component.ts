import { Component, OnInit } from '@angular/core';
import { FinancialEntry } from '../financial-entry';
import { OverviewService } from '../overview.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [CommonModule,
    NgIf,
    NgFor,
    FormsModule,
    RouterModule,],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {
  financialEntries: FinancialEntry[] = [];
  constructor(private overviewService: OverviewService) { }
  getEntries(): void {
    this.overviewService.getEntries().subscribe(financialEntries => this.financialEntries = financialEntries);
  }

  ngOnInit(): void {
    this.getEntries();
  }
}
