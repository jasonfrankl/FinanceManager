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
    RouterModule],
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'] // Corrected to styleUrls
})
export class IncomeComponent implements OnInit {
  financialEntries: FinancialEntry[] = [];
  showForm: boolean = false;

  newEntry: FinancialEntry = {
    id: 0,
    type: 'income',
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
  }

  addNewEntry(): void {
    this.newEntry.id = this.financialEntries.length + 1;
    this.financialEntries.push(this.newEntry);

    this.newEntry = {
      id: 0,
      type: 'income',
      amount: 0,
      name: '',
      description: ''
    };
    this.showForm = false;
  }
}
