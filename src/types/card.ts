import { CardTypeEnum } from "./enums/card-type";
import { NetworkEnum } from "./enums/network";
import { PayAtEnum } from "./enums/pay-at";

export interface CardProvider {
	cardProviderId: string;
	bankId: string;
	name: string;
	iconUrl: string;
	color: string;
	type: CardTypeEnum;
	network: NetworkEnum;

	statementDays?: number;
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

	// Credit cards
	lastFourDigits?: string;
	dueDay?: number;
	statementDays?: number;
	limit?: number;
	payAt?: PayAtEnum;
	payWithBankAccountId?: string;

	// Debit, VA, VR
	bankAccountId?: string;
}
