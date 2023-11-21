"use client";

import { bankAccounts, cards, categories, plans } from "assets/data";
import { Header } from "components/Header";
import { Icon, IconType } from "components/Icon";
import { SelectInput } from "components/Inputs/Select";
import { Space } from "components/Space";
import Link from "next/link";
import { CardTypeEnum, isPrepaid } from "types/enums/card-type";
import { TimezoneEnum } from "types/enums/timezone";

interface PremiumBenefit {
	title: string;
	description: string;
	icon: IconType;
}

const premiumBenefits: Array<PremiumBenefit> = [
	{
		title: "Contas bancárias ilimitadas",
		description: "Adicione quantas contas bancárias quiser",
		icon: "bank",
	},
	{
		title: "Cartões de crédito ilimitados",
		description: "Adicione quantos cartões de crédito quiser",
		icon: "card",
	},
	{
		title: "Vales ilimitados",
		description: "Adicione quantos vales quiser",
		icon: "ticket",
	},
	{
		title: "Categorias ilimitadas",
		description: "Adicione quantas categorias quiser",
		icon: "category",
	},
	{
		title: "(Em breve) Transações recorrentes ilimitadas",
		description: "Adicione quantas transações recorrentes quiser",
		icon: "clock",
	},
	{
		title: "(Em breve) Orçamentos ilimitados",
		description:
			"Altere entre multiplos orçamentos sem perder os dados de nenhum deles, faça comparações entre os orçamentos e veja o que é melhor para sua vida financeira",
		icon: "money-bag",
	},
	{
		title: "(Em breve) Acesso a versão desktop",
		description: "Tenha controle das suas finanças no seu computador",
		icon: "computer",
	},
	{
		title: "(Em breve) Gere relatórios",
		description:
			"Gere relatórios dos seus gastos, orçamentos e muito mais, em diversos formatos",
		icon: "pdf",
	},
	{
		title: "Controle seus orçamentos por mês",
		description:
			"Altere livremente o orçamento de apenas 1 mês, ao inves de todos os meses do ano",
		icon: "calendar",
	},
	{
		title: "(Em breve) Tags",
		description: "Adicione tags as suas transações",
		icon: "tag",
	},
	{
		title: "(Em breve) Lembretes",
		description: "Receba lembretes para pagar suas contas",
		icon: "bell",
	},
	{
		title: "(Em breve) Integração com bancos",
		description:
			"Integre suas contas bancárias para anotar seus gastos automaticamente",
		icon: "connect",
	},
];

const GOOGLE_LINK_AUTH = process.env["GOOGLE_LINK_AUTH"];

interface LimitItemProp {
	label: string;
	curAmount: number;
	limit: number;
}

const LimitItem = ({ label, curAmount, limit }: LimitItemProp) => {
	return (
		<div className="container-padding rounded border flex flex-col items-center">
			<div className="text-xs">{label}</div>
			<div className="text-3xl font-bold">
				{curAmount}/{limit}
			</div>
		</div>
	);
};

const Account = () => {
	return (
		<>
			<Header title="Conta" />

			<main className="min-h-[100dvh] w-full flex flex-col container-padding">
				<section>
					<h2 className="font-bold text-lg text-center">Resumo da sua conta</h2>

					<div className="grid grid-cols-2 gap-2">
						<LimitItem
							label="Contas bancárias"
							curAmount={Object.keys(bankAccounts).length}
							limit={plans.free.limits.bankAccounts}
						/>
						<LimitItem
							label="Cartões de crédito"
							curAmount={
								Object.values(cards).filter(
									(c) => c.type === CardTypeEnum.CREDIT,
								).length
							}
							limit={plans.free.limits.postpaidCard}
						/>
						<LimitItem
							label="Vales"
							curAmount={
								Object.values(cards).filter((c) => isPrepaid(c.type)).length
							}
							limit={plans.free.limits.prepaidCard}
						/>
						<LimitItem
							label="Categorias"
							curAmount={Object.keys(categories).length}
							limit={plans.free.limits.categories}
						/>
						<LimitItem
							label="Transações recorrentes"
							curAmount={Object.keys(categories).length}
							limit={plans.free.limits.recurrentTransactions}
						/>
					</div>
				</section>

				<Space />

				<section>
					<h2 className="font-bold text-lg text-center">
						Desbloqueie os benefícios premium
					</h2>

					<Space />

					<div className="flex flex-col gap-2">
						{premiumBenefits.map(({ title, description, icon }) => (
							<div key={title} className="grid grid-cols-5 items-center gap-2">
								<div className="col-span-1 flex justify-center">
									<Icon icon={icon} size={6} />
								</div>

								<div className="col-span-4">
									<span className="font-bold">{title}</span>
									<p className="text-sm">{description}</p>
								</div>
							</div>
						))}
					</div>

					<Space />

					<Link
						href="/premium"
						className="btn btn-secondary w-full pointer-events-none"
					>
						<Icon icon="crown" className="text-yellow" />
						Seja premium
					</Link>
				</section>

				<div className="divider" />

				<section>
					<Link
						type="button"
						title="Logar com google"
						className="btn btn-google disabled w-full normal-case"
						href={GOOGLE_LINK_AUTH || "#"}
					>
						<Icon icon="google" className="mr-2" />
						Vincular conta ao Google
					</Link>

					<Space />

					<SelectInput
						id="timezone"
						label="Usar horario de"
						toBeSelectedLabel="Selecionar cartão"
						data={Object.values(TimezoneEnum).map((t) => ({
							title: t.split("/").pop()!.replace(/_/g, " "),
							value: t,
						}))}
						fieldNames={{
							id: "value",
							label: "title",
						}}
						value={TimezoneEnum["America/Sao_Paulo"]}
						onChange={() => {}}
					/>
				</section>

				<div className="divider" />

				<section className="flex flex-col gap-2">
					<Link
						href="/logout"
						className="btn btn-error w-full pointer-events-none"
					>
						<Icon icon="logout" />
						Logout
					</Link>
					<Link
						href="/termos-de-uso"
						className="btn btn-ghost w-full pointer-events-none"
					>
						Termos de uso
					</Link>
					<Link
						href="/politica-de-privacidade"
						className="btn btn-ghost w-full pointer-events-none"
					>
						Politica de privacidade
					</Link>
				</section>

				<Space />
				<Space />
				<Space />
			</main>
		</>
	);
};

export default Account;
