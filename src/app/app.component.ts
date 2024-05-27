import { Component } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { DebtComponent } from './debt/debt.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, 
  OverviewComponent, IncomeComponent, DebtComponent, ExpenseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Financial Manager';
  selectedOption: string = '';
  onSelectionChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedOption = target.value;
  }
}
