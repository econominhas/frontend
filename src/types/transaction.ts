import { BankAccount } from "./bank";
import { Card } from "./card";
import { Category } from "./category";
import { TransactionTypeEnum } from "./enums/transaction-type";

export interface TransactionInOut {
	transactionId: string;
	accountId: string;
	type: TransactionTypeEnum.IN | TransactionTypeEnum.OUT;
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

	categoryId: string;
	category: Category;

	cardId?: string; // Required if bankAccountId not present
	card?: Card;

	bankAccountId?: string; // Required if cardId not present
	bankAccount?: BankAccount;
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
	bankAccountFrom: BankAccount;

	bankAccountToId: string;
	bankAccountTo: BankAccount;
}

export type Transaction = TransactionInOut | TransactionTransfer;
