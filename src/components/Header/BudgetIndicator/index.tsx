"use client";

import { useCurrentBudget } from "contexts/current-budget";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
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
				<MdKeyboardArrowLeft />
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
				<MdKeyboardArrowRight />
			</button>
		</div>
	);
};
