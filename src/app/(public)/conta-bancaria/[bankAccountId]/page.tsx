import { bankAccounts } from "assets/data";
import { Header } from "components/Header";
import { Icon } from "components/Icon";
import { formatBankAccountNumber, formatMoney } from "utils/format";

interface Props {
	params: {
		bankAccountId: string;
	};
}

const BankAccount = ({ params }: Props) => {
	const bankAccount = bankAccounts[params.bankAccountId];

	return (
		<>
			<Header title="Conta bancária" hasBackBtn />

			<main className="min-h-[100dvh] w-full flex flex-col items-center container-padding gap-2">
				<img
					className="rounded-full max-w-24 max-h-24"
					src={bankAccount.iconUrl}
					alt={bankAccount.name}
				/>

				<h2 className="font-bold text-2xl">{bankAccount.name}</h2>

				<div className="flex flex-col w-full">
					<span>
						Conta: {formatBankAccountNumber(bankAccount.accountNumber)}
					</span>
					<span>Agencia: {bankAccount.branch}</span>
					<span>Saldo: {formatMoney(bankAccount.balance)}</span>
				</div>

				<button className="w-full btn">
					<Icon icon="pencil" />
					Editar conta bancária
				</button>
				<button className="w-full btn btn-error">
					<Icon icon="trashcan" />
					Excluir
				</button>
			</main>
		</>
	);
};

export function generateStaticParams() {
	return Object.values(bankAccounts);
}

export default BankAccount;
