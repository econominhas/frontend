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
import { CardTypeEnum } from "types/enums/card-type";
import { formatBankAccount } from "utils/format";
import { formatMoney } from "utils/format";

const bankAccounts = Object.values(bankAccountsData);
const cards = Object.values(cardsData);

const Wallet = () => {
	const hasVA = cards.find((c) => c.type === CardTypeEnum.VA);
	const hasVR = cards.find((c) => c.type === CardTypeEnum.VR);
	const hasVT = cards.find((c) => c.type === CardTypeEnum.VT);

	return (
		<>
			<Header title="Carteira" />

			<main className="min-h-[100dvh] w-full flex flex-col pt-2 container-padding">
				<section>
					<h2 className="font-bold text-lg">Resumo</h2>

					<div>
						<div className="flex flex-row justify-between">
							<span>Saldo total</span>
							<span>
								{formatMoney(
									bankAccounts.reduce((acc, cur) => acc + cur.balance, 0) +
										cards.reduce((acc, cur) => acc + (cur.balance || 0), 0),
								)}
							</span>
						</div>
						{(hasVA || hasVA || hasVT) && (
							<div className="pl-3 text-sm">
								<div className="flex flex-row justify-between">
									<span>Bancos</span>
									<span>
										{formatMoney(
											bankAccounts.reduce((acc, cur) => acc + cur.balance, 0),
										)}
									</span>
								</div>

								{hasVA && (
									<div className="flex flex-row justify-between">
										<span>Vale Alimentação</span>
										<span>
											{formatMoney(
												cards.reduce((acc, cur) => {
													if (cur.type === CardTypeEnum.VA) {
														return acc + (cur.balance || 0);
													}

													return acc;
												}, 0),
											)}
										</span>
									</div>
								)}

								{hasVR && (
									<div className="flex flex-row justify-between">
										<span>Vale Refeição</span>
										<span>
											{formatMoney(
												cards.reduce((acc, cur) => {
													if (cur.type === CardTypeEnum.VR) {
														return acc + (cur.balance || 0);
													}

													return acc;
												}, 0),
											)}
										</span>
									</div>
								)}

								{hasVT && (
									<div className="flex flex-row justify-between">
										<span>Vale Transporte</span>
										<span>
											{formatMoney(
												cards.reduce((acc, cur) => {
													if (cur.type === CardTypeEnum.VT) {
														return acc + (cur.balance || 0);
													}

													return acc;
												}, 0),
											)}
										</span>
									</div>
								)}
							</div>
						)}

						<div className="flex flex-row justify-between">
							<span>Fatura total</span>
							<span>
								{formatMoney(
									cards.reduce((acc, cur) => {
										if (cur.type === CardTypeEnum.CREDIT) {
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
								iconUrl={ba.iconUrl}
								label={formatBankAccount(ba.accountNumber)}
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
					<h2 className="font-bold text-lg">Cartões</h2>

					<div className="flex flex-col gap-1">
						{cards.map((c) => (
							<WalletItem
								key={c.cardId}
								iconUrl={c.iconUrl}
								label={`**** ${c.lastFourDigits}`}
								name={c.name}
								valueLabel={c.type === CardTypeEnum.CREDIT ? "Fatura" : "Saldo"}
								value={formatMoney(0)}
							/>
						))}

						<Link href="/adicionar-cartao" className="btn">
							<PiPlusCircleBold /> Adicionar novo cartão
						</Link>
					</div>
				</section>
			</main>
		</>
	);
};

export default Wallet;
