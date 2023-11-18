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
import { HiMiniEyeSlash } from "react-icons/hi2";
import { ImClock2 } from "react-icons/im";
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

const icons = {
	house: BsFillHouseFill,
	"shopping-cart": FaShoppingCart,
	baby: PiBabyFill,
	tv: FaWifi,
	medkit: FaMedkit,
	kiss: FaKissWinkHeart,
	suitcase: FaSuitcase,
	beach: FaUmbrellaBeach,
	question: FaQuestionCircle,
	upload: MdUpload,
	download: MdDownload,
	transfer: MdCompareArrows,
	ad: FaAudioDescription,
	crown: FaCrown,
	pencil: BsPencilFill,
	logout: MdLogout,
	trashcan: BsFillTrashFill,
	pluscircle: PiPlusCircleBold,
	google: FcGoogle,
	email: MdEmail,
	phone: MdLocalPhone,
	invoice: FaFileInvoiceDollar,
	plus: FaPlus,
	wallet: PiWalletFill,
	gear: BsFillGearFill,
	"arrow-left": FaArrowLeft,
	"less-than": MdKeyboardArrowLeft,
	"more-than": MdKeyboardArrowRight,
	"triangle-down": BsFillCaretDownFill,
	info: MdOutlineInfo,
	bank: BsBank2,
	card: BsFillCreditCardFill,
	ticket: BsTicketFill,
	category: MdCategory,
	pdf: BsFileEarmarkPdfFill,
	tag: AiFillTag,
	bell: BsBellFill,
	connect: GrConnect,
	profile: BsFillPersonFill,
	"eye-slash": HiMiniEyeSlash,
	clock: ImClock2,
};

export type IconType = keyof typeof icons;

export const iconsArray = Object.keys(icons) as Array<IconType>;

interface Props {
	icon: IconType;
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
	if (size === 7) {
		props.style.width = "1.75rem";
		props.style.height = "1.75rem";
	}
	if (size === 8) {
		props.style.width = "2rem";
		props.style.height = "2rem";
	}
	if (size === 10) {
		props.style.width = "2.5rem";
		props.style.height = "2.5rem";
	}
	if (size === 14) {
		props.style.width = "3.5rem";
		props.style.height = "3.5rem";
	}

	const IconToRender = icons[icon];

	return <IconToRender {...props} />;
};
