import { budget as budgetData, expenses } from "assets/data";
import { BudgetCard } from "components/BudgetCard";
import { ExpensesPerCategory } from "components/ExpensesPerCategory";
import { MonthIndicator } from "components/MonthIndicator";
import { Space } from "components/Space";
import Link from "next/link";
import { getMonthId } from "utils/date";

const budget = budgetData.budgets[getMonthId()]!;

const Home = () => {
	return (
		<>
			<section>
				<div className="bg-primary container-padding text-center">
					<h1 className="font-black text-xl">Econominhas</h1>
				</div>

				<MonthIndicator />
			</section>

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
			</main>
		</>
	);
};

export default Home;
