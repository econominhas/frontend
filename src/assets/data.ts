import { Budget } from "types/budget";
import { Category } from "types/category";
import { TransactionTypeEnum } from "types/enums/transaction-type";
import { TransactionInOut, TransactionTransfer } from "types/transaction";

export const transactions: Array<TransactionInOut | TransactionTransfer> = [
	{
		transactionId: "foo1",
		accountId: "foo",
		type: TransactionTypeEnum.OUT,
		categoryId: "foo1",
		name: "Potes de feijao",
		description: "foo1",
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
		cardId: "foo1",
	} as TransactionInOut,

	{
		transactionId: "foo2",
		accountId: "foo",
		type: TransactionTypeEnum.OUT,
		categoryId: "foo2",
		name: "Depilacao corpo todo",
		description: "foo1",
		value: 15059,
		budget: {
			month: new Date().getUTCMonth().toString().padStart(2, "0"),
			year: new Date().getUTCFullYear().toString(),
		},
		createdAt: new Date(2023, 10, 10, 15),
		cardId: "foo1",
	} as TransactionInOut,

	{
		transactionId: "foo3",
		accountId: "foo",
		type: TransactionTypeEnum.OUT,
		categoryId: "foo3",
		name: "Depilacao corpo todo",
		description: "foo1",
		value: 7189,
		budget: {
			month: new Date().getUTCMonth().toString().padStart(2, "0"),
			year: new Date().getUTCFullYear().toString(),
		},
		createdAt: new Date(2023, 10, 11, 15),
		cardId: "foo1",
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
