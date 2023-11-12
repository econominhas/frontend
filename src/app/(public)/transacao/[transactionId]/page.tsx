import { transactions } from "assets/data";
import { Header } from "components/Header";
import { TransactionTypeEnum } from "types/enums/transaction-type";

import { TransactionInOut } from "./TransactionInOut";

interface Props {
	params: {
		transactionId: string;
	};
}

const TransactionPage = ({ params }: Props) => {
	const transaction = transactions.find(
		(p) => p.transactionId === params.transactionId,
	)!;

	return (
		<>
			<Header title="Detalhes da transação" hasBackBtn />

			{transaction.type === TransactionTypeEnum.TRANSFER ? (
				<></>
			) : (
				<TransactionInOut transaction={transaction} />
			)}
		</>
	);
};

export function generateStaticParams() {
	return transactions;
}

export default TransactionPage;
