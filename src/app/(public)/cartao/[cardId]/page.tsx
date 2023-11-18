import { cards } from "assets/data";
import { Header } from "components/Header";
import { Icon } from "components/Icon";
import { CardTypeEnum } from "types/enums/card-type";
import { formatMoney } from "utils/format";

interface Props {
	params: {
		cardId: string;
	};
}

const Card = ({ params }: Props) => {
	const card = cards[params.cardId];

	return (
		<>
			<Header title="Cartão" hasBackBtn />

			<main className="min-h-[100dvh] w-full flex flex-col items-center container-padding gap-2">
				<img
					className="rounded-full max-w-24 max-h-24"
					src={card.cardProvider.iconUrl}
					alt={card.name}
				/>

				<h2 className="font-bold text-2xl">{card.name}</h2>

				<div className="flex flex-col w-full">
					<span>Número: **** {card.lastFourDigits}</span>
					<span>Bandeira: {card.cardProvider.network}</span>
					{card.type === CardTypeEnum.POSTPAID && (
						<>
							<span>Dia de vencimento: {card.dueDay}</span>
							<span>
								Fecha: {card.cardProvider.statementDays} dias antes do
								vencimento
							</span>
							<span>Limite: {formatMoney(card.limit)}</span>
							<span>Pago no: {card.payAt}</span>
							<span>Pago com: {card.payWithBankAccountId}</span>
						</>
					)}
					{card.type === CardTypeEnum.PREPAID && (
						<>
							<span>Saldo: {formatMoney(card.balance)}</span>
						</>
					)}
				</div>

				<button className="w-full btn">
					<Icon icon="pencil" />
					Editar cartão
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
	return Object.values(cards);
}

export default Card;
