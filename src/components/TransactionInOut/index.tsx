"use client";

import { Icon } from "components/Icon";
import Link from "next/link";
import { Category } from "types/category";
import { TransactionTypeEnum } from "types/enums/transaction-type";
import { TransactionInOut as TransactionInOutType } from "types/transaction";
import { formatMoney } from "utils/format";

interface Props {
	transaction: TransactionInOutType;
	category: Category;
}

export const TransactionInOut = ({ transaction, category }: Props) => {
	return (
		<Link
			className="flex flex-row gap-2 justify-between"
			href={`/transacao/${transaction.transactionId}`}
		>
			<div className="flex flex-row gap-2">
				<div
					className="rounded-full w-12 h-12 flex justify-center items-center"
					style={{
						border: `1px solid ${category.color}`,
					}}
				>
					<Icon
						icon={category.icon}
						color={category.color}
						size={0} // Irrelevant because of bug
						style={{
							width: "1.75rem",
							height: "1.75rem",
						}}
					/>
				</div>

				<div className="flex flex-col justify-center">
					<span className="text-lg">{transaction.name}</span>
					{transaction.installments && (
						<span className="text-sm">
							{`${transaction.installments.current} / ${transaction.installments.total}`}{" "}
							parcelas
						</span>
					)}
				</div>
			</div>

			<div className="text-lg font-bold flex justify-center items-center">
				<span>
					{transaction.type === TransactionTypeEnum.IN
						? formatMoney(transaction.value)
						: formatMoney(transaction.value * -1)}
				</span>
			</div>
		</Link>
	);
};
