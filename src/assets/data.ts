/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Bank, BankAccount } from "types/bank";
import { Budget } from "types/budget";
import { Card, CardProvider } from "types/card";
import { Category } from "types/category";
import { CardTypeEnum } from "types/enums/card-type";
import { NetworkEnum } from "types/enums/network";
import { PayAtEnum } from "types/enums/pay-at";
import { TransactionTypeEnum } from "types/enums/transaction-type";
import { Plan } from "types/plan";
import { TransactionInOut, TransactionTransfer } from "types/transaction";

import { colors } from "./colors";

export const categories: Record<string, Category> = {
	foo1: {
		categoryId: "foo1",
		accountId: "foo",
		name: "Moradia",
		icon: "house",
		color: colors.majorelleBlue,
		active: true,
	},
	foo2: {
		categoryId: "foo2",
		accountId: "foo",
		name: "Família / Filhos",
		icon: "baby",
		color: colors.skobeloff,
		active: true,
	},
	foo3: {
		categoryId: "foo3",
		accountId: "foo",
		name: "Mercado",
		icon: "shopping-cart",
		color: colors.burntSienna,
		active: true,
	},
	foo4: {
		categoryId: "foo4",
		accountId: "foo",
		name: "Outros Gastos",
		icon: "question",
		color: colors.amber,
		active: true,
	},
	foo5: {
		categoryId: "foo5",
		accountId: "foo",
		name: "TV / Internet / Telefone",
		icon: "tv",
		color: colors.lightMossGreen,
		active: true,
	},
	foo6: {
		categoryId: "foo6",
		accountId: "foo",
		name: "Saúde",
		icon: "medkit",
		color: colors.carminePink,
		active: true,
	},
	foo7: {
		categoryId: "foo7",
		accountId: "foo",
		name: "Cuidados Pessoais",
		icon: "kiss",
		color: colors.orchid,
		active: true,
	},
	foo8: {
		categoryId: "foo8",
		accountId: "foo",
		name: "Despesas do Trabalho",
		icon: "suitcase",
		color: colors.vividViolet,
		active: true,
	},
	foo9: {
		categoryId: "foo9",
		accountId: "foo",
		name: "Viagens",
		icon: "beach",
		color: colors.seaSerpent,
		active: true,
	},
};

export const bankProviders: Record<string, Bank> = {
	bradesco: {
		bankId: "bradesco",
		name: "Bradesco",
		code: "123",
		iconUrl:
			"https://logospng.org/download/bradesco/logo-bradesco-escudo-1024.png",
		color: colors.bradesco,
	},
	nubank: {
		bankId: "nubank",
		name: "Nubank",
		code: "321",
		iconUrl:
			"https://seucreditodigital.com.br/wp-content/uploads/2021/05/nova-logomarca-do-Nubank-721x720.jpg",
		color: colors.nubank,
	},
};

export const bankAccounts: Record<string, BankAccount> = {
	nubank: {
		bankAccountId: "nubank",
		accountId: "foo1",
		bankId: bankProviders.nubank.bankId,
		bank: bankProviders.nubank,
		accountNumber: "337420",
		branch: "1234",
		balance: 1000000,
		name: "Nubank",
	},
	bradesco: {
		bankAccountId: "bradesco",
		accountId: "foo1",
		bankId: bankProviders.bradesco.bankId,
		bank: bankProviders.bradesco,
		accountNumber: "123456",
		branch: "1234",
		balance: 1000000,
		name: "Bradesco",
	},
};

export const cardProviders: Record<string, CardProvider> = {
	xpInfinityOne: {
		cardProviderId: "xpInfinityOne",
		name: "Xp Infinity One",
		iconUrl:
			"https://logodownload.org/wp-content/uploads/2019/07/xp-investimentos-logo-8.png",
		color: colors.xpInvestimentos,
		type: CardTypeEnum.POSTPAID,
		network: NetworkEnum.VISA,
		statementDays: 14,
		availableDueDates: ["05", "10", "15"],
	},
	nubank: {
		cardProviderId: "nubank",
		name: "Nubank",
		iconUrl: bankProviders.nubank.iconUrl,
		color: bankProviders.nubank.color,
		type: CardTypeEnum.POSTPAID,
		network: NetworkEnum.MASTERCARD,
		statementDays: 14,
		availableDueDates: ["05", "10", "15"],
	},
	aleloRefeicao: {
		cardProviderId: "aleloRefeicao",
		name: "Alelo Refeicao",
		iconUrl:
			"https://logodownload.org/wp-content/uploads/2017/09/alelo-logo-1-599x393.png",
		color: colors.aleloRefeicao,
		type: CardTypeEnum.PREPAID,
		network: NetworkEnum.ELO,
	},
};

export const cards: Record<string, Card> = {
	xp: {
		cardId: "xp",
		accountId: "foo1",
		cardProviderId: "xpInfinityOne",
		cardProvider: cardProviders["xpInfinityOne"],
		type: CardTypeEnum.POSTPAID,
		name: "Xp Investimentos",

		// Credit cards
		lastFourDigits: "1234",
		dueDay: 10,
		limit: 3500000,
		payAt: PayAtEnum.DUE,
		payWithBankAccountId: bankAccounts["nubank"].bankAccountId,
	},
	nubank: {
		cardId: "nubank",
		accountId: "foo1",
		cardProviderId: "nubank",
		cardProvider: cardProviders["nubank"],
		type: CardTypeEnum.POSTPAID,
		name: "Nubank",

		// Credit cards
		lastFourDigits: "1234",
		dueDay: 10,
		limit: 3500000,
		payAt: PayAtEnum.DUE,
		payWithBankAccountId: bankAccounts["nubank"].bankAccountId,
	},
	aleloVa: {
		cardId: "aleloVa",
		accountId: "foo1",
		cardProviderId: "aleloRefeicao",
		cardProvider: cardProviders["aleloRefeicao"],
		type: CardTypeEnum.PREPAID,
		name: "Alelo VR",
		lastFourDigits: "1234",

		// VA, VR, VT
		balance: 1000,
	},
};

export const transactions: Array<TransactionInOut | TransactionTransfer> = [
	{
		transactionId: "4a1ec10c-5189-465e-8c32-554258cfa0d8",
		accountId: "foo",
		type: TransactionTypeEnum.OUT,
		categoryId: "foo1",
		category: categories["foo1"],
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
		card: cards["xp"],
	} as TransactionInOut,

	{
		transactionId: "e4363fad-875c-4ebd-a62d-985f34887f40",
		accountId: "foo",
		type: TransactionTypeEnum.OUT,
		categoryId: "foo2",
		category: categories["foo2"],
		name: "Uber ida habbib's errado",
		description: "foo1",
		value: 15059,
		budget: {
			month: new Date().getUTCMonth().toString().padStart(2, "0"),
			year: new Date().getUTCFullYear().toString(),
		},
		createdAt: new Date(2023, 10, 10, 15),
		cardId: "nubank",
		card: cards["nubank"],
	} as TransactionInOut,

	{
		transactionId: "f834ab76-2f28-4528-bb70-c369d0402847",
		accountId: "foo",
		type: TransactionTypeEnum.OUT,
		categoryId: "foo3",
		category: categories["foo3"],
		name: "Depilacao corpo todo",
		description: "",
		value: 7189,
		budget: {
			month: new Date().getUTCMonth().toString().padStart(2, "0"),
			year: new Date().getUTCFullYear().toString(),
		},
		createdAt: new Date(2023, 10, 11, 15),
		cardId: "xp",
		card: cards["xp"],
	} as TransactionInOut,
];

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
	name: "Padrão - 2023",
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

export const plans: Record<string, Plan> = {
	free: {
		planId: "free",
		name: "Gratuito",
		// @ts-ignore
		icon: "ad",
		limits: {
			bankAccounts: 1,
			postpaidCard: 1,
			prepaidCard: 0,
			categories: 10,
			transactionsPerMonth: 100,
			recurrentTransactions: 0,
		},
	},
	premium: {
		planId: "premium",
		name: "Premium",
		// @ts-ignore
		icon: "crown",
		limits: {
			bankAccounts: 1,
			postpaidCard: 1,
			prepaidCard: 0,
			categories: 10,
			transactionsPerMonth: 100,
			recurrentTransactions: 0,
		},
	},
};
