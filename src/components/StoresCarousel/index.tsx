"use client";

import { categories, expenses } from "assets/data";
import { MonthBudget } from "types/budget";

import { Chart } from "./Chart";

interface Props {
	budget: MonthBudget;
}

export const BudgetsCarousel = ({ budget }: Props) => {
	const categoriesBudgets = Object.entries(budget);

	return (
		<section className="max-w-full space-x-6 carousel carousel-center px-4">
			{categoriesBudgets.map(([categoryId, categoryBudget]) => {
				const category = categories[categoryId];

				return (
					<div key={categoryId} className="carousel-item">
						<Chart
							budget={categoryBudget}
							spent={expenses[categoryId]}
							color={category.color}
							icon={category.icon}
						/>
					</div>
				);
			})}
		</section>
	);
};
