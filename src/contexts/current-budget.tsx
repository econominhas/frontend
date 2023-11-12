"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { MonthID } from "types/budget";
import { getMonthAndYear } from "utils/date";

interface CurrentBudgetContextType {
	currentBudget: string;
	currentBudgetDate: Date;
	setNextBudget: () => void;
	setPrevBudget: () => void;
	getCurrentBudgetMonthId: () => MonthID;
}

interface Props {
	children: ReactNode;
}

export const CurrentBudgetContext = createContext<CurrentBudgetContextType>(
	{} as CurrentBudgetContextType,
);

export const CurrentBudgetProvider: FC<Props> = ({ children }) => {
	const [currentBudget, setCurrentBudget] = useState<string>(getMonthAndYear());

	const setPrevBudget = (): void => {
		const [year, month] = currentBudget.split("-");

		if (month === "01") {
			setCurrentBudget(`${parseInt(year) - 1}-12`);
		} else {
			setCurrentBudget(
				`${year}-${(parseInt(month) - 1).toString().padStart(2, "0")}`,
			);
		}
	};

	const setNextBudget = (): void => {
		const [year, month] = currentBudget.split("-");

		if (month === "12") {
			setCurrentBudget(`${parseInt(year) + 1}-01`);
		} else {
			setCurrentBudget(
				`${year}-${(parseInt(month) + 1).toString().padStart(2, "0")}`,
			);
		}
	};

	const getCurrentBudgetMonthId = (): MonthID => {
		return currentBudget.split("-").pop()! as MonthID;
	};

	return (
		<CurrentBudgetContext.Provider
			value={{
				currentBudget,
				currentBudgetDate: new Date(`${currentBudget}-01`),
				setNextBudget,
				setPrevBudget,
				getCurrentBudgetMonthId,
			}}
		>
			{children}
		</CurrentBudgetContext.Provider>
	);
};

export const useCurrentBudget = () => {
	const context = useContext(CurrentBudgetContext);

	if (!context)
		throw new Error(
			"useCurrentBudget must be used within a CurrentBudgetProvider",
		);

	return context;
};
