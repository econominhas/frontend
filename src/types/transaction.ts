import { TransactionTypeEnum } from "./enums/transaction-type";

export interface TransactionInOut {
	transactionId: string;
	accountId: string;
	type: TransactionTypeEnum.IN | TransactionTypeEnum.OUT;
	categoryId: string;
	name: string;
	description: string;
	value: number;
	installments: {
		groupId: string;
		total: number;
		current: number;
	};
	budget: {
		month: string;
		year: string;
	};
	createdAt: Date;
	cardId?: string; // Required if bankAccountId not present
	bankAccountId?: string; // Required if cardId not present
}

export interface TransactionTransfer {
	transactionId: string;
	accountId: string;
	type: TransactionTypeEnum.TRANSFER;
	name: string;
	description: string;
	value: number;
	budget: {
		month: string;
		year: string;
	};
	createdAt: Date;
	bankAccountFromId: string;
	bankAccountToId: string;
}

export type Transaction = TransactionInOut | TransactionTransfer;
