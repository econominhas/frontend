"use client";

import { Icon } from "components/Icon";
import { useRouter } from "next/navigation";

import { BudgetIndicator } from "./BudgetIndicator";

export interface HeaderProps {
	title: string;
	subtitle?: string;
	hasBackBtn?: boolean;
	hasMonthIndicator?: boolean;
	hasYearlyIndicator?: boolean;
}

export const Header = ({
	title,
	subtitle,
	hasBackBtn,
	hasMonthIndicator,
	hasYearlyIndicator,
}: HeaderProps) => {
	const router = useRouter();

	return (
		<section className="sticky top-0 z-40 shadow">
			<div className="bg-primary container-padding text-center items-center relative">
				{hasBackBtn && (
					<button
						className="rounded-full bg-secondary text-secondary-content p-2 absolute top-1/4 left-4"
						onClick={() => router.back()}
					>
						<Icon icon="arrow-left" />
					</button>
				)}
				<div className="w-full">
					<h1 className="font-black text-xl">{title}</h1>
					{subtitle && <h2 className="font-bold text-sm">{subtitle}</h2>}
				</div>
			</div>

			{(hasMonthIndicator || hasYearlyIndicator) && (
				<BudgetIndicator yearly={hasYearlyIndicator} />
			)}
		</section>
	);
};
