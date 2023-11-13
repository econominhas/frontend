import { CountryEnum } from "types/enums/country";

/**
 *
 * Helpers
 *
 */

const removeFromEnd = (val: string, size: number) =>
	val.substring(0, val.length - size);

const getFromEnd = (val: string, size: number) =>
	val.substring(val.length - size);

const removeFromStart = (val: string, size: number) => val.substring(size);

const getFromStart = (val: string, size: number) => val.substring(0, size);

/**
 *
 * Money
 *
 */

const formatter = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
});

export const formatMoney = (price?: number) =>
	formatter.format((price || 0) / 100);

export const formatBankAccount = (bankAccount: string) => {
	if (bankAccount.length <= 5) {
		return bankAccount;
	}

	return `${removeFromEnd(bankAccount, 1)}-${getFromEnd(bankAccount, 1)}`;
};

/**
 *
 * Phone
 *
 */

const formatBRPhone = (phone: string) => {
	switch (true) {
		case phone.length < 1:
			return "";

		case phone.length < 7:
			return `(${getFromStart(phone, 2)}) ${phone.substring(2)}`;

		case phone.length < 11:
			return `(${getFromStart(phone, 2)}) ${phone.substring(
				2,
				6,
			)}-${phone.substring(6)}`;

		default:
			return `(${getFromStart(phone, 2)}) ${removeFromEnd(
				removeFromStart(phone, 2),
				4,
			)}-${getFromEnd(phone, 4)}`;
	}
};

export const formatPhone = (phone: string, country: CountryEnum) => {
	switch (country) {
		case CountryEnum.BR:
		default:
			return formatBRPhone(phone);
	}
};
