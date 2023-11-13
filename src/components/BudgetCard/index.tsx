"use client";

import { colors } from "assets/colors";
import { Cell, Pie, PieChart } from "recharts";
import { MonthBudget } from "types/budget";
import { formatMoney } from "utils/format";

interface Props {
	budget: MonthBudget;
	expenses: Record<string, number>;
}

const percentage = (total: number, partial: number) => {
	const percentage = (100 * partial) / total;

	if (percentage > 100) return 100;

	if (percentage <= 0) return 0;

	return percentage;
};

const color = (expensesPercentage: number) => {
	if (expensesPercentage === 100) {
		return colors.red;
	}

	if (expensesPercentage >= 80) {
		return colors.yellow;
	}

	return colors.green;
};

export const BudgetCard = ({ budget, expenses }: Props) => {
	const totalBudget = Object.values(budget).reduce((acc, cur) => acc + cur);
	const totalExpenses = Object.values(expenses).reduce((acc, cur) => acc + cur);
	const remainingBudget = totalBudget - totalExpenses;

	const expensesPercentage = percentage(totalBudget, totalExpenses);

	return (
		<section className="max-w-full">
			<h2 className="font-bold text-lg text-center">Orçamento</h2>

			<div className="flex flex-col items-center">
				<PieChart width={250} height={250}>
					<Pie
						data={[
							{
								name: "expenses",
								value: expensesPercentage,
							},
							{
								name: "budget",
								value: 100 - expensesPercentage,
							},
						]}
						width={250}
						height={250}
						cx="50%"
						cy="50%"
						labelLine={false}
						outerRadius={100}
						fill="#8884d8"
						dataKey="value"
					>
						<Cell fill={color(expensesPercentage)} />
						<Cell fill="#DCDCDC" />
					</Pie>
				</PieChart>

				<div className="flex flex-col gap-2 my-2 w-full">
					<div className="flex font-bold rounded">
						<div
							className="flex flex-row gap-2 w-3/4 items-center p-2 rounded-l"
							style={{
								backgroundColor: "#DCDCDC",
							}}
						>
							<span>Gasto total</span>
						</div>

						<div
							className="w-2/5 flex flex-row items-center justify-end p-2 rounded-r"
							style={{
								backgroundColor: "#DCDCDC75",
							}}
						>
							<span>{formatMoney(totalExpenses)}</span>
						</div>
					</div>

					<div className="flex font-bold rounded">
						<div
							className="flex flex-row gap-2 w-3/4 items-center p-2 rounded-l"
							style={{
								backgroundColor: "#DCDCDC",
							}}
						>
							<span>Gasto planejado</span>
						</div>

						<div
							className="w-2/5 flex flex-row items-center justify-end p-2 rounded-r"
							style={{
								backgroundColor: "#DCDCDC75",
							}}
						>
							<span>{formatMoney(totalBudget)}</span>
						</div>
					</div>

					<div className="flex font-bold rounded">
						<div
							className="flex flex-row gap-2 w-3/4 items-center p-2 rounded-l"
							style={{
								backgroundColor: "#DCDCDC",
							}}
						>
							<span>Saldo</span>
						</div>

						<div
							className="w-2/5 flex flex-row items-center justify-end p-2 rounded-r"
							style={{
								backgroundColor: `${color(expensesPercentage)}80`,
							}}
						>
							<span>{formatMoney(remainingBudget)}</span>
						</div>
					</div>
				</div>

				{remainingBudget < 0 && (
					<div className="alert alert-info mt-2 text-sm">
						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="w-16 h-16 mx-2 stroke-current"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
							<label>
								Suas <u>finanças e orçamentos</u> serão{" "}
								<strong>automaticamente</strong> ajustados ao final do mês, o
								valor negativo é apenas para registro.
							</label>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};
