import { IconType } from "components/Icon";

export interface Category {
	categoryId: string;
	accountId: string;
	name: string;
	icon: IconType;
	color: string;
	active: boolean;
}
