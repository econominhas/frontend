import { Icon } from "components/Icon";
import Link from "next/link";

interface Props {
	redirectTo: string;
	iconUrl: string;
	name: string;
	label: string;
	valueLabel: string;
	value: string;
}

export const WalletItem = ({
	redirectTo,
	iconUrl,
	name,
	label,
	valueLabel,
	value,
}: Props) => {
	return (
		<Link
			href={redirectTo}
			className="relative grid grid-cols-7 gap-2 items-center bg-accent text-accent-content container-padding rounded"
		>
			<img src={iconUrl} alt={label} className="max-w-12 max-h-12 rounded" />

			<div className="flex flex-col col-span-3">
				<span className="font-semibold">{name}</span>
				<span className="text-sm">{label}</span>
			</div>

			<div className="flex flex-col col-span-3">
				<span className="text-sm">{valueLabel}</span>
				<span>{value}</span>
			</div>

			<button className="absolute right-2 top-7 text-2xl flex justify-end">
				<Icon icon="more-than" />
			</button>
		</Link>
	);
};
