export interface FinancialEntry {
  id: number;
  type: 'expense' | 'income' | 'debt';
  amount: number;
  name: string;
  description: string;
}
