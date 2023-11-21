"use client";

import { colors } from "assets/colors";
import {
	bankAccounts as bankAccountsData,
	cards as cardsData,
} from "assets/data";
import { Header } from "components/Header";
import { Icon } from "components/Icon";
import { Space } from "components/Space";
import { WalletItem } from "components/WalletItem";
import Link from "next/link";
import { Card, PostpaidCard, PrepaidCard } from "types/card";
import { CardTypeEnum } from "types/enums/card-type";
import { formatBankAccountNumber } from "utils/format";
import { formatMoney } from "utils/format";

interface CardGroup {
	title: string;
	items: Array<Card>;
	valueKey: keyof PostpaidCard | keyof PrepaidCard;
	valueLabel: string;
	newCardLabel: string;
	cardType: CardTypeEnum;
}

const bankAccounts = Object.values(bankAccountsData);
const cards = Object.values(cardsData);

const Wallet = () => {
	return (
		<>
			<Header title="Carteira" />

			<main className="min-h-[100dvh] w-full flex flex-col pt-2 container-padding">
				<section>
					<h2 className="font-bold text-lg">Saldos</h2>

					<div className="flex flex-col gap-1">
						{[
							{
								title: "Bancário",
								value: formatMoney(
									bankAccounts.reduce((acc, cur) => acc + cur.balance, 0),
								),
							},
							{
								title: "Vale alimentação",
								value: formatMoney(
									cards.reduce((acc, cur) => {
										if (cur.type === CardTypeEnum.VA) {
											acc + cur.balance;
										}

										return acc;
									}, 0),
								),
							},
							{
								title: "Vale refeição",
								value: formatMoney(
									cards.reduce((acc, cur) => {
										if (cur.type === CardTypeEnum.VR) {
											acc + cur.balance;
										}

										return acc;
									}, 0),
								),
							},
							{
								title: "Vale transporte",
								value: formatMoney(
									cards.reduce((acc, cur) => {
										if (cur.type === CardTypeEnum.VT) {
											acc + cur.balance;
										}

										return acc;
									}, 0),
								),
							},
							// {
							// 	title: "Faturas",
							// 	value: formatMoney(
							// 		cards.reduce((acc, cur) => {
							// 			if (isPostpaid(cur.type)) {
							// 				return acc + 0;
							// 			}

							// 			return acc;
							// 		}, 0),
							// 	),
							// },
						].map(({ title, value }) => (
							<div key={title} className="flex font-bold text-sm rounded">
								<div
									className="flex flex-row gap-2 w-3/4 items-center p-2 rounded-l"
									style={{
										backgroundColor: colors.gray,
									}}
								>
									<span>{title}</span>
								</div>

								<div
									className="w-2/5 flex flex-row items-center justify-end p-2 rounded-r"
									style={{
										backgroundColor: `${colors.gray}75`,
									}}
								>
									<span>{value}</span>
								</div>
							</div>
						))}
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
								iconUrl={ba.bank.iconUrl}
								label={formatBankAccountNumber(ba.accountNumber)}
								name={ba.name}
								valueLabel="Saldo"
								value={formatMoney(ba.balance)}
							/>
						))}

						<Link href="/adicionar-conta" className="btn">
							<Icon icon="pluscircle" /> Adicionar nova conta
						</Link>
					</div>
				</section>

				<Space />

				{(
					[
						{
							title: "Cartões de crédito",
							items: cards.filter((c) => c.type === CardTypeEnum.CREDIT),
							valueKey: "limit", // TODO Fix
							valueLabel: "Fatura",
							newCardLabel: "Adicionar novo cartão",
							cardType: CardTypeEnum.CREDIT,
						},
						{
							title: "Vales Alimentação",
							items: cards.filter((c) => c.type === CardTypeEnum.VA),
							valueKey: "balance",
							valueLabel: "Saldo",
							newCardLabel: "Adicionar vale alimentação",
							cardType: CardTypeEnum.VA,
						},
						{
							title: "Vales Refeição",
							items: cards.filter((c) => c.type === CardTypeEnum.VR),
							valueKey: "balance",
							valueLabel: "Saldo",
							newCardLabel: "Adicionar vale refeição",
							cardType: CardTypeEnum.VR,
						},
						{
							title: "Vales Transporte",
							items: cards.filter((c) => c.type === CardTypeEnum.VT),
							valueKey: "balance",
							valueLabel: "Saldo",
							newCardLabel: "Adicionar vale transporte",
							cardType: CardTypeEnum.VT,
						},
					] as Array<CardGroup>
				).map(
					({ title, items, valueKey, valueLabel, newCardLabel, cardType }) => (
						<>
							<section>
								<h2 className="font-bold text-lg">{title}</h2>

								<div className="flex flex-col gap-1">
									{items.map((c) => (
										<WalletItem
											key={c.cardId}
											redirectTo={`/cartao/${c.cardId}`}
											iconUrl={c.cardProvider.iconUrl}
											label={`**** ${c.lastFourDigits}`}
											name={c.name}
											valueLabel={valueLabel}
											value={formatMoney(
												c[valueKey as keyof (typeof items)[0]] as any,
											)}
										/>
									))}

									<Link
										href={`/adicionar-cartao?type=${cardType}`}
										className="btn"
									>
										<Icon icon="pluscircle" /> {newCardLabel}
									</Link>
								</div>
							</section>

							<Space />
						</>
					),
				)}
			</main>
		</>
	);
};

export default Wallet;
