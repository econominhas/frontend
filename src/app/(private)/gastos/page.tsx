"use client";

import { budget } from "assets/data";
import { BudgetsCarousel } from "components/StoresCarousel";
import { getMonthId } from "utils/date";

export default function Documents() {
	return (
		<main className="min-h-[100dvh] w-full">
			<section className="flex justify-center container-padding">
				<h1 className="font-black text-xl">Gastos de Maio</h1>
			</section>

			<BudgetsCarousel budget={budget.budgets[getMonthId()]!} />
		</main>
	);
}
