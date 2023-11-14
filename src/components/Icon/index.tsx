import { CSSProperties } from "react";
import { AiFillTag } from "react-icons/ai";
import {
	BsFillHouseFill,
	BsFillTrashFill,
	BsPencilFill,
	BsFillGearFill,
	BsFillCaretDownFill,
	BsBank2,
	BsFillCreditCardFill,
	BsTicketFill,
	BsFileEarmarkPdfFill,
	BsBellFill,
	BsFillPersonFill,
} from "react-icons/bs";
import {
	FaAudioDescription,
	FaCrown,
	FaKissWinkHeart,
	FaMedkit,
	FaQuestionCircle,
	FaShoppingCart,
	FaSuitcase,
	FaUmbrellaBeach,
	FaWifi,
	FaFileInvoiceDollar,
	FaPlus,
	FaArrowLeft,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrConnect } from "react-icons/gr";
import {
	MdCompareArrows,
	MdDownload,
	MdLogout,
	MdUpload,
	MdEmail,
	MdLocalPhone,
	MdKeyboardArrowLeft,
	MdKeyboardArrowRight,
	MdOutlineInfo,
	MdCategory,
} from "react-icons/md";
import { PiBabyFill, PiPlusCircleBold, PiWalletFill } from "react-icons/pi";

interface Props {
	icon: string;
	color?: string;
	size?: number;
	style?: CSSProperties;
	className?: string;
}

export const Icon = ({
	icon,
	color,
	size,
	style,
	className,
	...propsToPass
}: Props) => {
	const props = {
		className: `w-${size} h-${size} ${className || ""}`,
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
		case "ad":
			return <FaAudioDescription {...props} />;
		case "crown":
			return <FaCrown {...props} />;
		case "pencil":
			return <BsPencilFill {...props} />;
		case "logout":
			return <MdLogout {...props} />;
		case "trashcan":
			return <BsFillTrashFill {...props} />;
		case "pluscircle":
			return <PiPlusCircleBold {...props} />;
		case "google":
			return <FcGoogle {...props} />;
		case "email":
			return <MdEmail {...props} />;
		case "phone":
			return <MdLocalPhone {...props} />;
		case "invoice":
			return <FaFileInvoiceDollar {...props} />;
		case "plus":
			return <FaPlus {...props} />;
		case "wallet":
			return <PiWalletFill {...props} />;
		case "gear":
			return <BsFillGearFill {...props} />;
		case "arrow-left":
			return <FaArrowLeft {...props} />;
		case "less-than":
			return <MdKeyboardArrowLeft {...props} />;
		case "more-than":
			return <MdKeyboardArrowRight {...props} />;
		case "triangle-down":
			return <BsFillCaretDownFill {...props} />;
		case "info":
			return <MdOutlineInfo {...props} />;
		case "bank":
			return <BsBank2 {...props} />;
		case "card":
			return <BsFillCreditCardFill {...props} />;
		case "ticket":
			return <BsTicketFill {...props} />;
		case "category":
			return <MdCategory {...props} />;
		case "pdf":
			return <BsFileEarmarkPdfFill {...props} />;
		case "tag":
			return <AiFillTag {...props} />;
		case "bell":
			return <BsBellFill {...props} />;
		case "connect":
			return <GrConnect {...props} />;
		case "profile":
			return <BsFillPersonFill {...props} />;

		default:
			return <></>;
	}
};
