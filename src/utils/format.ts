const formatter = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
});

export const formatMoney = (price: number) => formatter.format(price / 100);

export const formatBankAccount = (bankAccount: string) =>
	`${bankAccount.substring(0, bankAccount.length - 1)}-${bankAccount.substring(
		bankAccount.length - 1,
	)}`;
