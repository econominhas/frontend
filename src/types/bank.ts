export interface Bank {
	bankId: string;
	name: string;
	code: string;
	iconUrl: string;
	color: string;
}

export interface BankAccount {
	bankAccountId: string;
	accountId: string;
	bankId: string;
	iconUrl: string;
	color: string;
	includeOnBalance: boolean;
	isSystemManaged: boolean;
	accountNumber: string;
	branch: string;
	balance: number;
	name: string;
}
