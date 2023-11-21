export enum CardTypeEnum {
	"CREDIT" = "CREDIT",
	"VA" = "VA",
	"VR" = "VR",
	"VT" = "VT",
}

export const isPrepaid = (type: CardTypeEnum) => {
	if ([CardTypeEnum.VA, CardTypeEnum.VR, CardTypeEnum.VT].includes(type)) {
		return true;
	}

	return false;
};

export const isPostpaid = (type: CardTypeEnum) => {
	return CardTypeEnum.CREDIT === type;
};
