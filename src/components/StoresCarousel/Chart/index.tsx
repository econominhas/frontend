import { Icon } from "components/Icon";
import { formatMoney } from "utils/format";

interface Props {
	budget: number;
	spent: number;
	color: string;
	icon: string;
}

const percentage = (total: number, partial: number) => {
	const percentage = (100 * partial) / total;

	if (percentage > 100) return 100;

	if (percentage <= 0) return 0;

	if (percentage < 2) return 2;

	return percentage;
};

export const Chart = ({ budget, spent, color, icon }: Props) => {
	return (
		<div className="flex flex-col items-center gap-2">
			<div className="w-12 h-28 relative">
				<div
					className="w-full absolute bottom-0 rounded"
					style={{
						height: `${percentage(budget, spent)}%`,
						backgroundColor: color,
					}}
				/>
			</div>
			<span className="font-bold text-sm" style={{ color }}>
				{formatMoney(spent)}
			</span>
			<Icon icon={icon} color={color} size={8} />
		</div>
	);
};
