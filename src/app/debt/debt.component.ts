import { Component, OnInit } from '@angular/core';
import { FinancialEntry } from '../financial-entry';
import { OverviewService } from '../overview.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-debt',
  standalone: true,
  imports: [CommonModule,
    NgIf,
    NgFor,
    FormsModule,
    RouterModule,],
  templateUrl: './debt.component.html',
  styleUrl: './debt.component.css'
})
export class DebtComponent {
  financialEntries: FinancialEntry[] = [];
  totalDebt: number = 0;

  showForm: boolean = false;
  newEntry: FinancialEntry = {
    id: 0,
    type: 'debt',
    amount: 0,
    name: '',
    description: ''
  };

  constructor(private overviewService: OverviewService) { }

  getEntries(): void {
    this.overviewService.getEntries().subscribe(financialEntries => this.financialEntries = financialEntries);
  }

  ngOnInit(): void {
    this.getEntries();
    for (let entries of this.financialEntries) {
      if (entries.type == 'debt') {
        this.addToTotalDebt(entries.amount);
      }
    }
  }

  getTotalDebt(): number {
    this.totalDebt = 0;
    
    return this.totalDebt;
  }

  addToTotalDebt(amount: number): void {
    this.totalDebt += amount;
  }
  addNewEntry(): void {
    this.newEntry.id = this.financialEntries.length + 1;
    this.financialEntries.push(this.newEntry);

    this.newEntry = {
      id: 0,
      type: 'debt',
      amount: 0,
      name: '',
      description: ''
    };
    this.showForm = false;
  }
}
