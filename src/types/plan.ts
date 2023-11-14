export interface Plan {
	planId: string;
	name: string;
	icon: string;
	limits: {
		bankAccounts: number;
		postpaidCard: number;
		prepaidCard: number;
		categories: number;
		transactionsPerMonth: number;
		recurrentTransactions: number;
	};
}
