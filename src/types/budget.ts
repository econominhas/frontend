export type MonthID =
	| "01"
	| "02"
	| "03"
	| "04"
	| "05"
	| "06"
	| "07"
	| "08"
	| "09"
	| "10"
	| "11"
	| "12";

export type MonthBudget = Record<string, number>;

export interface Budget {
	budgetId: string;
	accountId: string;
	name: string;
	year: number;
	budgets: Partial<Record<MonthID, MonthBudget>>;
}
