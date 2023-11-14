import { IconType } from "react-icons";

export interface Plan {
	planId: string;
	name: string;
	icon: IconType;
	limits: {
		bankAccounts: number;
		postpaidCard: number;
		prepaidCard: number;
		categories: number;
		transactionsPerMonth: number;
		recurrentTransactions: number;
	};
}
