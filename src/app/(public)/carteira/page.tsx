"use client";

import {
	bankAccounts as bankAccountsData,
	cards as cardsData,
} from "assets/data";
import { Header } from "components/Header";
import { Space } from "components/Space";
import { WalletItem } from "components/WalletItem";
import Link from "next/link";
import { PiPlusCircleBold } from "react-icons/pi";
import { PostpaidCard, PrepaidCard } from "types/card";
import { CardTypeEnum } from "types/enums/card-type";
import { formatBankAccountNumber } from "utils/format";
import { formatMoney } from "utils/format";

const bankAccounts = Object.values(bankAccountsData);
const cards = Object.values(cardsData);

const Wallet = () => {
	return (
		<>
			<Header title="Carteira" />

			<main className="min-h-[100dvh] w-full flex flex-col pt-2 container-padding">
				<section>
					<h2 className="font-bold text-lg">Resumo</h2>

					<div>
						<div className="flex flex-row justify-between">
							<span>Saldo bancário</span>
							<span>
								{formatMoney(
									bankAccounts.reduce((acc, cur) => acc + cur.balance, 0),
								)}
							</span>
						</div>

						<div className="flex flex-row justify-between">
							<span>Fatura</span>
							<span>
								{formatMoney(
									cards.reduce((acc, cur) => {
										if (cur.type === CardTypeEnum.POSTPAID) {
											return acc + 0;
										}

										return acc;
									}, 0),
								)}
							</span>
						</div>
					</div>
				</section>

				<Space />

				<section>
					<h2 className="font-bold text-lg">Contas</h2>

					<div className="flex flex-col gap-1">
						{bankAccounts.map((ba) => (
							<WalletItem
								key={ba.bankAccountId}
								redirectTo={`/conta-bancaria/${ba.bankAccountId}`}
								iconUrl={ba.iconUrl}
								label={formatBankAccountNumber(ba.accountNumber)}
								name={ba.name}
								valueLabel="Saldo"
								value={formatMoney(ba.balance)}
							/>
						))}

						<Link href="/adicionar-conta" className="btn">
							<PiPlusCircleBold /> Adicionar nova conta
						</Link>
					</div>
				</section>

				<Space />

				<section>
					<h2 className="font-bold text-lg">Cartões de crédito</h2>

					<div className="flex flex-col gap-1">
						{(
							cards.filter(
								(c) => c.type === CardTypeEnum.POSTPAID,
							) as Array<PostpaidCard>
						).map((c) => (
							<WalletItem
								key={c.cardId}
								redirectTo={`/cartao/${c.cardId}`}
								iconUrl={c.iconUrl}
								label={`**** ${c.lastFourDigits}`}
								name={c.name}
								valueLabel="Fatura"
								value={formatMoney(0)}
							/>
						))}

						<Link
							href={`/adicionar-cartao?type=${CardTypeEnum.POSTPAID}`}
							className="btn"
						>
							<PiPlusCircleBold /> Adicionar novo cartão
						</Link>
					</div>
				</section>

				<Space />

				<section>
					<h2 className="font-bold text-lg">Vales</h2>

					<div className="flex flex-col gap-1">
						{(
							cards.filter(
								(c) => c.type === CardTypeEnum.PREPAID,
							) as Array<PrepaidCard>
						).map((c) => (
							<WalletItem
								key={c.cardId}
								redirectTo={`/cartao/${c.cardId}`}
								iconUrl={c.iconUrl}
								label={`**** ${c.lastFourDigits}`}
								name={c.name}
								valueLabel="Saldo"
								value={formatMoney(c.balance)}
							/>
						))}

						<Link
							href={`/adicionar-cartao?type=${CardTypeEnum.PREPAID}`}
							className="btn"
						>
							<PiPlusCircleBold /> Adicionar novo vale
						</Link>
					</div>
				</section>
			</main>
		</>
	);
};

export default Wallet;
