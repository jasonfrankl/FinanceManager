import { Routes } from '@angular/router';
import { IncomeComponent } from './income/income.component';
import { DebtComponent } from './debt/debt.component';
import { ExpenseComponent } from './expense/expense.component';
import { OverviewComponent } from './overview/overview.component';

export const routes: Routes = [
  { path: 'income', component: IncomeComponent },
  { path: 'debt', component: DebtComponent },
  { path: 'expense', component: ExpenseComponent },
  { path: 'overview', component: OverviewComponent },
];
