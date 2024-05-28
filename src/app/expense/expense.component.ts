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
  showForm: boolean = false;

  totalExpense: number = 0;

  newEntry: FinancialEntry = {
    id: 0,
    type: 'expense',
    amount: 0,
    name: '',
    description: ''
  };

  constructor(private overviewService: OverviewService) { }

  getEntries(): void {
    this.overviewService.getEntries().subscribe(financialEntries => this.financialEntries = financialEntries);
  }


  getTotalExpense(): number {
    return this.totalExpense;
  }
  ngOnInit(): void {
    this.getEntries();
    for (let entry of this.financialEntries) {
      if (entry.type == 'expense') {
        this.totalExpense += entry.amount;
      }
    }
  }

  addToExpense(amount: number): void {
    this.totalExpense += amount;
  }

  addNewEntry(): void {
    this.newEntry.id = this.financialEntries.length + 1;
    this.financialEntries.push(this.newEntry);

    this.newEntry = {
      id: 0,
      type: 'expense',
      amount: 0,
      name: '',
      description: ''
    };
    this.showForm = false;
  
  }
}
