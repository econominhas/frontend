import { CardTypeEnum } from "./enums/card-type";
import { NetworkEnum } from "./enums/network";
import { PayAtEnum } from "./enums/pay-at";

export interface CardProvider {
	cardProviderId: string;
	name: string;
	iconUrl: string;
	color: string;
	type: CardTypeEnum;
	network: NetworkEnum;

	statementDays?: number;
	availableDueDates?: Array<string>;
}

export interface Card {
	cardId: string;
	accountId: string;
	cardProviderId: string;
	iconUrl: string;
	color: string;
	type: CardTypeEnum;
	network: NetworkEnum;
	name: string;
	lastFourDigits: string;

	// Credit cards
	dueDay?: number;
	statementDays?: number;
	limit?: number;
	payAt?: PayAtEnum;
	payWithBankAccountId?: string;

	// Debit cards
	bankAccountId?: string;

	// VA, VR, VT
	balance?: number;
}
