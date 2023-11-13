"use client";

import { budget, cards, categories } from "assets/data";
import { Icon } from "components/Icon";
import { useCurrentBudget } from "contexts/current-budget";
import { CardTypeEnum } from "types/enums/card-type";
import { TransactionInOut as TransactionInOutType } from "types/transaction";
import { formatFullDate } from "utils/date";
import { formatMoney } from "utils/format";

interface Props {
	transaction: TransactionInOutType;
}

const getCardType = (type: CardTypeEnum) => {
	switch (type) {
		case CardTypeEnum.CREDIT:
		default:
			return "Crédito";
		case CardTypeEnum.DEBIT:
			return "Débito";
		case CardTypeEnum.VA:
			return "Vale Alimentacao";
		case CardTypeEnum.VR:
			return "Vale Refeicao";
	}
};

const Card = ({ cardId }: { cardId: string }) => {
	const card = cards[cardId];

	return (
		<section className="flex flex-col gap-1 w-full">
			<span className="text-sm text-content-t">Cartao</span>

			<div className="flex flex-row gap-2 items-center">
				<img src={card.iconUrl} className="w-12 h-full rounded" />

				<div className="flex flex-col">
					<span>{card.name}</span>
					<span>
						{getCardType(card.type)} - {card.network}
					</span>
					<span>**** {card.lastFourDigits}</span>
				</div>
			</div>
		</section>
	);
};

export const TransactionInOut = ({ transaction }: Props) => {
	const { getCurrentBudgetMonthId } = useCurrentBudget();

	const category = categories[transaction.categoryId];

	const categoryBudget =
		budget.budgets[getCurrentBudgetMonthId()]?.[transaction.categoryId] || 0;
	const percentage = ((100 * transaction.value) / categoryBudget).toFixed(2);

	return (
		<main className="min-h-[100dvh] w-full container-padding flex flex-col items-center gap-12">
			<section className="flex flex-col  justify-center items-center gap-1 w-full min-h-72">
				<div
					className="rounded-full w-24 h-24 flex justify-center items-center"
					style={{
						border: `2px solid ${category.color}`,
					}}
				>
					<Icon
						icon={category.icon}
						color={category.color}
						size={0} // Irrelevant because of bug
						style={{
							width: "3.5rem",
							height: "3.5rem",
						}}
					/>
				</div>

				<span className="text-2xl">{transaction.name}</span>
				<span className="text-sm text-content-t">
					{formatFullDate(transaction.createdAt)}
				</span>
				<span className="">{transaction.description}</span>
			</section>

			<section className="flex flex-col gap-1 w-full">
				<span className="text-sm text-content-t">Pagamento</span>

				{transaction.installments ? (
					<>
						<span className="text-3xl font-bold">
							{transaction.installments.total}x de{" "}
							{formatMoney(transaction.value)}
						</span>
						<span className="text-sm text-content-t">
							Total de{" "}
							{formatMoney(transaction.installments.total * transaction.value)}
						</span>
					</>
				) : (
					<span className="text-3xl font-bold">
						{formatMoney(transaction.value)}
					</span>
				)}

				<span className="text-sm text-content-t">
					Está compra representa <strong>{percentage}%</strong> do seu
					orcamento.
				</span>
			</section>

			{transaction.cardId && <Card cardId={transaction.cardId} />}

			{transaction.bankAccountId && (
				<section className="flex flex-col gap-1 w-full">
					<span className="text-sm text-content-t">Conta bancária</span>
					{/* <p>{categories[transaction.categoryId].name}</p> */}
				</section>
			)}
		</main>
	);
};
