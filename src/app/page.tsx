"use client";

import { budget as budgetData, expenses } from "assets/data";
import { BudgetCard } from "components/BudgetCard";
import { ExpensesPerCategory } from "components/ExpensesPerCategory";
import { Header } from "components/Header";
import { NoBudget } from "components/NoBudget";
import { Space } from "components/Space";
import { useCurrentBudget } from "contexts/current-budget";
import Link from "next/link";

const Home = () => {
	const { getCurrentBudgetMonthId } = useCurrentBudget();

	const budget = budgetData.budgets[getCurrentBudgetMonthId()]!;

	if (!budget) {
		return <NoBudget title="Econominhas" hasMonthIndicator />;
	}

	return (
		<>
			<Header title="Econominhas" hasMonthIndicator />

			<main className="min-h-[100dvh] w-full container-padding">
				<BudgetCard budget={budget} expenses={expenses} />

				<Space />

				<ExpensesPerCategory budget={budget} expenses={expenses} />

				<Space />

				<section>
					<h2 className="font-bold text-lg text-center mb-2">Transações</h2>

					<Link href="/transacoes" className="btn btn-primary w-full">
						Ver transações
					</Link>
				</section>

				<Space />
				<Space />
			</main>
		</>
	);
};

export default Home;
