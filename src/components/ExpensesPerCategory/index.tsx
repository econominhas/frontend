"use client";

import { categories } from "assets/data";
import { Icon } from "components/Icon";
import { MonthBudget } from "types/budget";
import { getTextColor } from "utils/color";
import { formatMoney } from "utils/money";

interface Props {
	budget: MonthBudget;
	expenses: Record<string, number>;
}

export const ExpensesPerCategory = ({ budget, expenses }: Props) => {
	const budgets = Object.entries(budget);

	return (
		<section className="max-w-full">
			<h2 className="font-bold text-lg text-center">Saldo por Categoria</h2>

			<div className="flex flex-col gap-2 my-2">
				{budgets.map(([categoryId, categoryBudget]) => {
					const category = categories[categoryId]!;
					const remainingBudget = categoryBudget - expenses[categoryId];

					return (
						<div key={categoryId} className="flex rounded font-bold">
							<div
								className="flex flex-row gap-2 w-3/4 items-center p-2 rounded-l"
								style={{
									backgroundColor: category.color,
									color: getTextColor(category.color),
								}}
							>
								<Icon icon={category.icon} size={4} />
								<span>{category.name}</span>
							</div>

							<div
								className="w-2/5 flex flex-row items-center justify-end p-2 rounded-r"
								style={{
									backgroundColor: `${category.color}75`,
									color: remainingBudget < 0 ? "red" : undefined,
								}}
							>
								<span>{formatMoney(remainingBudget)}</span>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
