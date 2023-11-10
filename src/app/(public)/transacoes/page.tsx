"use client";

import { budget, categories, transactions } from "assets/data";
import { MonthIndicator } from "components/MonthIndicator";
import { BudgetsCarousel } from "components/StoresCarousel";
import { TransactionInOut } from "components/TransactionInOut";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { MonthID } from "types/budget";
import { TransactionTypeEnum } from "types/enums/transaction-type";
import { Transaction } from "types/transaction";
import {
	getDay,
	getMonthId,
	getMonthShortName,
	sortDateDDMM,
} from "utils/date";

type TransactionsByDate = Record<string, Array<Transaction>>;
type TransactionsByDateArray = Array<[string, Array<Transaction>]>;

const getTransactionsByDate = (): TransactionsByDateArray => {
	const temp: TransactionsByDate = {};

	transactions.forEach((t) => {
		const day = `${getDay(t.createdAt)}-${getMonthId(
			t.createdAt,
		)}-${t.createdAt.getUTCFullYear()}`;

		if (!temp[day]) {
			temp[day] = [];
		}

		temp[day].push(t);
	});

	for (const date in temp) {
		temp[date] = temp[date].sort((a, b) =>
			a.createdAt.getTime() < b.createdAt.getTime() ? 1 : -1,
		);
	}

	return Object.entries(temp).sort(([a], [b]) => sortDateDDMM(a, b));
};

const transactionsByDate = getTransactionsByDate();

const Transactions = () => {
	const router = useRouter();

	return (
		<>
			<section>
				<div className="bg-primary container-padding text-center items-center relative">
					<button
						className="rounded-full bg-secondary text-secondary-content p-2 absolute top-1/4 left-4"
						onClick={() => router.back()}
					>
						<FaArrowLeft />
					</button>
					<div className="w-full">
						<h1 className="font-black text-xl">Transações</h1>
					</div>
				</div>

				<MonthIndicator />
			</section>

			<main className="min-h-[100dvh] w-full flex flex-col pt-2">
				<BudgetsCarousel budget={budget.budgets[getMonthId()]!} />

				<section className="container-padding flex flex-col gap-2">
					{transactionsByDate.map(([date, dateTransactions]) => {
						return (
							<div key={date}>
								<div className="mb-2 flex flex-row items-center gap-4 text-content-t">
									<div className="flex flex-col items-center uppercase font-bold">
										<h3 className="text-xl">{date.split("-").shift()!}</h3>
										<h3 className="text-sm">
											{
												getMonthShortName(
													date.split("-")[1]! as MonthID,
												) as MonthID
											}
										</h3>
									</div>

									<div className="h-1 w-full bg-content-t rounded" />
								</div>

								<div className="flex flex-col gap-2">
									{dateTransactions.map((t) => {
										if (t.type === TransactionTypeEnum.TRANSFER) {
											return <></>;
										}

										return (
											<TransactionInOut
												key={t.transactionId}
												transaction={t}
												category={categories[t.categoryId]}
											/>
										);
									})}
								</div>
							</div>
						);
					})}
				</section>
			</main>
		</>
	);
};

export default Transactions;
