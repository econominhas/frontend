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

interface BaseCard {
	cardId: string;
	accountId: string;
	cardProviderId: string;
	iconUrl: string;
	color: string;
	type: CardTypeEnum;
	network: NetworkEnum;
	name: string;
	lastFourDigits: string;
}

// Credit cards
export interface PostpaidCard extends BaseCard {
	type: CardTypeEnum.POSTPAID;
	dueDay: number;
	statementDays: number;
	limit: number;
	payAt: PayAtEnum;
	payWithBankAccountId: string;
}

// VA, VR, VT
export interface PrepaidCard extends BaseCard {
	type: CardTypeEnum.PREPAID;
	balance: number;
}

export type Card = PostpaidCard | PrepaidCard;
