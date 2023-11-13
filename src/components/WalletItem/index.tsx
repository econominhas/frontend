import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
	iconUrl: string;
	name: string;
	label: string;
	valueLabel: string;
	value: string;
}

export const WalletItem = ({
	iconUrl,
	name,
	label,
	valueLabel,
	value,
}: Props) => {
	return (
		<div className="relative grid grid-cols-7 gap-1 items-center bg-accent text-accent-content container-padding rounded">
			<Image src={iconUrl} alt={label} className="w-12 h-full rounded" />

			<div className="flex flex-col col-span-3">
				<span className="font-semibold">{name}</span>
				<span className="text-sm">{label}</span>
			</div>

			<div className="flex flex-col col-span-3">
				<span className="text-sm">{valueLabel}</span>
				<span>{value}</span>
			</div>

			<button className="absolute right-2 top-7 text-2xl flex justify-end">
				<MdKeyboardArrowRight />
			</button>
		</div>
	);
};
