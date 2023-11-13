import { CSSProperties } from "react";
import { BsFillHouseFill } from "react-icons/bs";
import {
	FaKissWinkHeart,
	FaMedkit,
	FaQuestionCircle,
	FaShoppingCart,
	FaSuitcase,
	FaUmbrellaBeach,
	FaWifi,
} from "react-icons/fa";
import { MdCompareArrows, MdDownload, MdUpload } from "react-icons/md";
import { PiBabyFill } from "react-icons/pi";

interface Props {
	icon: string;
	color?: string;
	size: number;
	style?: CSSProperties;
}

export const Icon = ({ icon, color, size, style, ...propsToPass }: Props) => {
	const props = {
		className: `w-${size} h-${size}`,
		style: { color, ...(style || {}) },
		...propsToPass,
	};

	// We have to set it manually due a bug
	if (size === 6) {
		props.style.width = "1.5rem";
		props.style.height = "1.5rem";
	}
	if (size === 8) {
		props.style.width = "2rem";
		props.style.height = "2rem";
	}
	if (size === 10) {
		props.style.width = "2.5rem";
		props.style.height = "2.5rem";
	}

	switch (icon) {
		case "house":
			return <BsFillHouseFill {...props} />;
		case "shopping-cart":
			return <FaShoppingCart {...props} />;
		case "baby":
			return <PiBabyFill {...props} />;
		case "tv":
			return <FaWifi {...props} />;
		case "medkit":
			return <FaMedkit {...props} />;
		case "kiss":
			return <FaKissWinkHeart {...props} />;
		case "suitcase":
			return <FaSuitcase {...props} />;
		case "beach":
			return <FaUmbrellaBeach {...props} />;
		case "question":
			return <FaQuestionCircle {...props} />;
		case "upload":
			return <MdUpload {...props} />;
		case "download":
			return <MdDownload {...props} />;
		case "transfer":
			return <MdCompareArrows {...props} />;

		default:
			return <></>;
	}
};
