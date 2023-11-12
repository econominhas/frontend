import { BankAccount } from "types/bank";
import { Budget } from "types/budget";
import { Card } from "types/card";
import { Category } from "types/category";
import { CardTypeEnum } from "types/enums/card-type";
import { NetworkEnum } from "types/enums/network";
import { PayAtEnum } from "types/enums/pay-at";
import { TransactionTypeEnum } from "types/enums/transaction-type";
import { TransactionInOut, TransactionTransfer } from "types/transaction";

export const transactions: Array<TransactionInOut | TransactionTransfer> = [
	{
		transactionId: "4a1ec10c-5189-465e-8c32-554258cfa0d8",
		accountId: "foo",
		type: TransactionTypeEnum.OUT,
		categoryId: "foo1",
		name: "Potes de feijao",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill.",
		value: 1000,
		installments: {
			groupId: "foo1",
			total: 3,
			current: 1,
		},
		budget: {
			month: new Date().getUTCMonth().toString().padStart(2, "0"),
			year: new Date().getUTCFullYear().toString(),
		},
		createdAt: new Date(2023, 10, 10, 16),
		cardId: "xp",
	} as TransactionInOut,

	{
		transactionId: "e4363fad-875c-4ebd-a62d-985f34887f40",
		accountId: "foo",
		type: TransactionTypeEnum.OUT,
		categoryId: "foo2",
		name: "Uber ida habbib's errado",
		description: "foo1",
		value: 15059,
		budget: {
			month: new Date().getUTCMonth().toString().padStart(2, "0"),
			year: new Date().getUTCFullYear().toString(),
		},
		createdAt: new Date(2023, 10, 10, 15),
		cardId: "nubank",
	} as TransactionInOut,

	{
		transactionId: "f834ab76-2f28-4528-bb70-c369d0402847",
		accountId: "foo",
		type: TransactionTypeEnum.OUT,
		categoryId: "foo3",
		name: "Depilacao corpo todo",
		description: "",
		value: 7189,
		budget: {
			month: new Date().getUTCMonth().toString().padStart(2, "0"),
			year: new Date().getUTCFullYear().toString(),
		},
		createdAt: new Date(2023, 10, 11, 15),
		cardId: "xp",
	} as TransactionInOut,
];

export const categories: Record<string, Category> = {
	foo1: {
		categoryId: "foo1",
		accountId: "foo",
		name: "Moradia",
		icon: "house",
		color: "#5C64DE",
		active: true,
	},
	foo2: {
		categoryId: "foo2",
		accountId: "foo",
		name: "Família / Filhos",
		icon: "baby",
		color: "#007472",
		active: true,
	},
	foo3: {
		categoryId: "foo3",
		accountId: "foo",
		name: "Mercado",
		icon: "shopping-cart",
		color: "#EA744C",
		active: true,
	},
	foo4: {
		categoryId: "foo4",
		accountId: "foo",
		name: "Outros Gastos",
		icon: "question",
		color: "#FEC100",
		active: true,
	},
	foo5: {
		categoryId: "foo5",
		accountId: "foo",
		name: "TV / Internet / Telefone",
		icon: "tv",
		color: "#B6D6A8",
		active: true,
	},
	foo6: {
		categoryId: "foo6",
		accountId: "foo",
		name: "Saúde",
		icon: "medkit",
		color: "#EC4B4B",
		active: true,
	},
	foo7: {
		categoryId: "foo7",
		accountId: "foo",
		name: "Cuidados Pessoais",
		icon: "kiss",
		color: "#E060CE",
		active: true,
	},
	foo8: {
		categoryId: "foo8",
		accountId: "foo",
		name: "Despesas do Trabalho",
		icon: "suitcase",
		color: "#9901FE",
		active: true,
	},
	foo9: {
		categoryId: "foo9",
		accountId: "foo",
		name: "Viagens",
		icon: "beach",
		color: "#46BDC7",
		active: true,
	},
};

export const expenses: Record<string, number> = {
	[categories.foo1.categoryId]: 375000,
	[categories.foo2.categoryId]: 10100,
	[categories.foo3.categoryId]: 13400,
	[categories.foo4.categoryId]: 30000,
	[categories.foo5.categoryId]: 10098,
	[categories.foo6.categoryId]: 3000,
	[categories.foo7.categoryId]: 50000,
	[categories.foo8.categoryId]: 0,
	[categories.foo9.categoryId]: 0,
};

export const budget: Budget = {
	budgetId: "foo",
	accountId: "foo",
	name: "Default - 2023",
	year: 2023,
	budgets: {
		"11": {
			[categories.foo1.categoryId]: 400000,
			[categories.foo2.categoryId]: 100000,
			[categories.foo3.categoryId]: 20000,
			[categories.foo4.categoryId]: 37500,
			[categories.foo5.categoryId]: 18498,
			[categories.foo6.categoryId]: 53000,
			[categories.foo7.categoryId]: 43611,
			[categories.foo8.categoryId]: 0,
			[categories.foo9.categoryId]: 0,
		},
	},
};

export const bankAccounts: Record<string, BankAccount> = {
	nubank: {
		bankAccountId: "nubank",
		accountId: "foo1",
		bankId: "nubank",
		iconUrl:
			"https://seucreditodigital.com.br/wp-content/uploads/2021/05/nova-logomarca-do-Nubank-721x720.jpg",
		color: "#820BD1",
		includeOnBalance: true,
		isSystemManaged: false,
		accountNumber: "337420",
		branch: "1234",
		balance: 1000000,
		name: "Nubank",
	},
	bradesco: {
		bankAccountId: "bradesco",
		accountId: "foo1",
		bankId: "bradesco",
		iconUrl:
			"https://logospng.org/download/bradesco/logo-bradesco-escudo-1024.png",
		color: "#F0152D",
		includeOnBalance: true,
		isSystemManaged: false,
		accountNumber: "123456",
		branch: "1234",
		balance: 1000000,
		name: "Bradesco",
	},
};

export const cards: Record<string, Card> = {
	xp: {
		cardId: "xp",
		accountId: "foo1",
		cardProviderId: "xp-infinity-one",
		iconUrl:
			"https://logodownload.org/wp-content/uploads/2019/07/xp-investimentos-logo-8.png",
		color: "#1B1A1D",
		type: CardTypeEnum.CREDIT,
		network: NetworkEnum.VISA,
		name: "Xp Investimentos",

		// Credit cards
		lastFourDigits: "1234",
		dueDay: 10,
		statementDays: 14,
		limit: 3500000,
		payAt: PayAtEnum.DUE,
		payWithBankAccountId: bankAccounts["nubank"].bankAccountId,
	},
	nubank: {
		cardId: "nubank",
		accountId: "foo1",
		cardProviderId: "nubank",
		iconUrl:
			"https://seucreditodigital.com.br/wp-content/uploads/2021/05/nova-logomarca-do-Nubank-721x720.jpg",
		color: "#820BD1",
		type: CardTypeEnum.CREDIT,
		network: NetworkEnum.MASTERCARD,
		name: "Nubank",

		// Credit cards
		lastFourDigits: "1234",
		dueDay: 10,
		statementDays: 14,
		limit: 3500000,
		payAt: PayAtEnum.DUE,
		payWithBankAccountId: bankAccounts["nubank"].bankAccountId,
	},
};
