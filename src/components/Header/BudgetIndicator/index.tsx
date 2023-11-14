"use client";

import { Icon } from "components/Icon";
import { useCurrentBudget } from "contexts/current-budget";
import { getMonthNameAndYear, getYear } from "utils/date";

interface Props {
	yearly?: boolean;
}

export const BudgetIndicator = ({ yearly }: Props) => {
	const {
		currentBudgetDate,
		setPrevBudget,
		setNextBudget,
		setPrevYearBudget,
		setNextYearBudget,
	} = useCurrentBudget();

	return (
		<div className="flex flex-row justify-between bg-gray text-center items-center relative">
			<button
				className="min-w-8 pl-2"
				onClick={() => {
					if (yearly) {
						setPrevYearBudget();
					} else {
						setPrevBudget();
					}
				}}
			>
				<Icon icon="less-than" />
			</button>
			<div className="p-2">
				<h2 className="font-bold text-sm">
					{yearly
						? getYear(currentBudgetDate)
						: getMonthNameAndYear(currentBudgetDate)}
				</h2>
			</div>
			<button
				className="min-w-8 px-2"
				onClick={() => {
					if (yearly) {
						setNextYearBudget();
					} else {
						setNextBudget();
					}
				}}
			>
				<Icon icon="more-than" />
			</button>
		</div>
	);
};
