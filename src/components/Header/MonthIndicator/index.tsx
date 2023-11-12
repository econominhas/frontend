"use client";

import { useCurrentBudget } from "contexts/current-budget";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { getMonthNameAndYear } from "utils/date";

export const MonthIndicator = () => {
	const { currentBudgetDate, setPrevBudget, setNextBudget } =
		useCurrentBudget();

	return (
		<div className="flex flex-row justify-between bg-gray text-center items-center relative">
			<button className="min-w-8 pl-2" onClick={() => setPrevBudget()}>
				<MdKeyboardArrowLeft />
			</button>
			<div className="p-2">
				<h2 className="font-bold text-sm">
					{getMonthNameAndYear(currentBudgetDate)}
				</h2>
			</div>
			<button className="min-w-8 px-2" onClick={() => setNextBudget()}>
				<MdKeyboardArrowRight />
			</button>
		</div>
	);
};
