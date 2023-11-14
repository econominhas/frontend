"use client";

import { budget, categories as categoriesData } from "assets/data";
import { Header } from "components/Header";
import { Icon } from "components/Icon";
import { NoBudget } from "components/NoBudget";
import { Space } from "components/Space";
import { useCurrentBudget } from "contexts/current-budget";
import Link from "next/link";
import { useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { getTextColor } from "utils/color";
import { getMonthsArray, getYear } from "utils/date";
import { formatMoney } from "utils/format";

const categories = Object.values(categoriesData);
const months = getMonthsArray();
const budgetsByCategory = Object.values(
	Object.values(budget.budgets).reduce(
		(acc, cur) => {
			for (const categoryId in cur) {
				if (!acc[categoryId]) {
					acc[categoryId] = {
						id: categoryId,
						name: categoriesData[categoryId].name,
						color: categoriesData[categoryId].color,
						icon: categoriesData[categoryId].icon,
						budget: 0,
					};
				}

				acc[categoryId].budget += cur[categoryId];
			}

			return acc;
		},
		{} as Record<
			string,
			{ id: string; name: string; color: string; icon: string; budget: number }
		>,
	),
);

const totalBudget = budgetsByCategory.reduce((acc, cur) => acc + cur.budget, 0);

const getBudgetPercentage = (budget: number) =>
	((budget * 100) / totalBudget).toFixed(2);

interface TableCellProps {
	money?: boolean;
	content?: string | number;
	bgGray?: boolean;

	header?: {
		color: string;
		icon: string;
	};
}

const TableCell = ({
	header,
	money,
	bgGray,
	content: contentRaw,
}: TableCellProps) => {
	const classes = "container-padding border border-solid border-gray-900";
	const content = money ? formatMoney(contentRaw as number) : contentRaw;

	if (header) {
		return (
			<th
				className={`${classes} text-left flex flex-row gap-1 items-center justify-center sticky left-0`}
				style={{
					backgroundColor: header.color,
					color: getTextColor(header.color),
				}}
			>
				<Icon icon={header.icon} size={6} />
				{content && <span>{content}</span>}
			</th>
		);
	}

	return (
		<td className={`${classes} ${bgGray ? "bg-gray w-28 font-bold" : ""}`}>
			{content}
		</td>
	);
};

const Budget = () => {
	const [tab, setTab] = useState<"table" | "pie-chart" | "categories">("table");

	const { currentBudgetDate } = useCurrentBudget();

	if (budget.year.toString() !== getYear(currentBudgetDate)) {
		return <NoBudget title="Orçamento" hasYearlyIndicator />;
	}

	return (
		<>
			<Header title="Orçamento" hasYearlyIndicator />

			<main className="min-h-[100dvh] max-w-[100dvw] w-full flex flex-col container-padding">
				<div className="tabs tabs-boxed grid grid-cols-3">
					<button
						className={`tab ${tab === "table" ? "tab-active" : ""}`}
						onClick={() => setTab("table")}
					>
						Tabela
					</button>
					<button
						className={`tab ${tab === "pie-chart" ? "tab-active" : ""}`}
						onClick={() => setTab("pie-chart")}
					>
						Gráfico
					</button>
					<button
						className={`tab ${tab === "categories" ? "tab-active" : ""}`}
						onClick={() => setTab("categories")}
					>
						Categorias
					</button>
				</div>

				<Space />

				{tab === "table" && (
					<section>
						<h2 className="font-bold text-lg text-center">
							Tabela de gastos planejados
						</h2>

						<Space />

						<div className="grid grid-cols-1 overflow-auto whitespace-nowrap">
							<table className="table-fixed w-full border-separate">
								<tbody>
									<tr>
										<td className="w-12 sticky left-0 bg-white border border-solid border-white" />
										{months.map((m) => (
											<TableCell key={m.name} content={m.name} bgGray />
										))}
									</tr>

									{categories.map((c, idx) => (
										<tr key={`${c.categoryId}-${idx}`}>
											<TableCell
												header={{
													color: c.color,
													icon: c.icon,
												}}
											/>
											{months.map((m) => (
												<TableCell
													key={`${m.id}-${c.categoryId}-${idx}`}
													money
													content={budget.budgets[m.id]?.[c.categoryId] || 0}
												/>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</section>
				)}

				{tab === "pie-chart" && (
					<section className="flex flex-col items-center">
						<h2 className="font-bold text-lg text-center">Gráfico</h2>

						<PieChart width={400} height={400}>
							<Pie
								isAnimationActive={false}
								data={budgetsByCategory.map((b) => ({
									name: getBudgetPercentage(b.budget),
									value: b.budget,
								}))}
								width={250}
								height={250}
								startAngle={89}
								endAngle={360 + 89}
								outerRadius={100}
								dataKey="value"
								label={(p) => `${p.name}%`}
							>
								{budgetsByCategory.map((b) => (
									<Cell key={b.id} fill={b.color} />
								))}
							</Pie>
							<Legend
								payload={budgetsByCategory.map((c) => ({
									value: c.name,
									color: c.color,
								}))}
							/>
						</PieChart>
					</section>
				)}

				{tab === "categories" && (
					<section>
						<h2 className="font-bold text-lg text-center">Gasto total</h2>

						<table className="table-fixed w-full border-separate">
							<thead>
								<tr>
									<td className="bg-gray font-bold container-padding border border-solid border-gray-900">
										Categoria
									</td>
									<td className="bg-gray font-bold container-padding border border-solid border-gray-900">
										Gasto total no ano
									</td>
								</tr>
							</thead>
							<tbody>
								{budgetsByCategory.map((b, idx) => (
									<tr key={`${b.id}-${idx}`}>
										<th
											className="container-padding border border-solid border-gray-900 text-left flex flex-row gap-2 items-center"
											style={{
												backgroundColor: b.color,
												color: getTextColor(b.color),
											}}
										>
											<Icon icon={b.icon} size={6} />
											<span>{b.name}</span>
										</th>

										<td className="container-padding border border-solid border-gray-900 text-right">
											{formatMoney(b.budget)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</section>
				)}

				<div className="divider" />

				<section className="flex flex-col gap-2">
					<Link href="/categorias" className="btn w-full">
						<Icon icon="category" />
						Editar categorias
					</Link>

					<Link href="/editar-orcamento" className="btn w-full">
						<Icon icon="pencil" />
						Editar orçamento
					</Link>
				</section>

				<Space />
				<Space />
				<Space />
			</main>
		</>
	);
};

export default Budget;
