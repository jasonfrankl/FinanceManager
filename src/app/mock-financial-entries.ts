import { FinancialEntry } from './financial-entry';

export const ENTRIES: FinancialEntry[] = [
  { id: 1, type: 'income', amount: 12000, name: 'Paycheck', description: 'My super cool job paid me' },
  { id: 2, type: 'expense', amount: 200, name: 'Groceries', description: 'Weekly grocery shopping' },
  { id: 3, type: 'expense', amount: 150, name: 'Electric Bill', description: 'Monthly electric bill' },
  { id: 4, type: 'income', amount: 500, name: 'Freelance Work', description: 'Side project payment' },
  { id: 5, type: 'debt', amount: 300, name: 'Credit Card Payment', description: 'Monthly credit card bill' },
  { id: 6, type: 'expense', amount: 75, name: 'Internet Bill', description: 'Monthly internet subscription' },
  { id: 7, type: 'income', amount: 2000, name: 'Bonus', description: 'Year-end bonus' },
  { id: 8, type: 'debt', amount: 400, name: 'Car Loan', description: 'Monthly car loan payment' },
  { id: 9, type: 'expense', amount: 100, name: 'Gas', description: 'Fuel for car' },
  { id: 10, type: 'income', amount: 1000, name: 'Stock Dividends', description: 'Quarterly dividends from stocks' },
  { id: 11, type: 'expense', amount: 50, name: 'Gym Membership', description: 'Monthly gym fee' }
];
