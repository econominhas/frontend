import {
	bankAccounts,
	cards,
	categories,
	plans,
	transactions,
} from "assets/data";
import { Header } from "components/Header";
import { Icon } from "components/Icon";
import { Space } from "components/Space";
import Link from "next/link";
import { CardTypeEnum } from "types/enums/card-type";

const premiumBenefits = [
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
		title: "Categorias ilimitados",
		description: "Adicione quantas categorias quiser",
		icon: "category",
	},
	{
		title: "Gere relatórios",
		description:
			"Gere relatórios dos seus gastos, orçamentos e muito mais, em diversos formatos",
		icon: "pdf",
	},
	{
		title: "Tags",
		description: "Adicione tags as suas transações",
		icon: "tag",
	},
	{
		title: "Lembretes",
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

const Account = () => {
	return (
		<>
			<Header title="Conta" />

			<main className="min-h-[100dvh] w-full flex flex-col container-padding">
				<section>
					<h2 className="font-bold text-lg text-center">Resumo da sua conta</h2>

					<div className="flex flex-col gap-1 px-4">
						<span>
							Contas: {Object.keys(bankAccounts).length}/
							{plans.free.limits.bankAccounts}
						</span>
						<span>
							Cartões de crédito:{" "}
							{
								Object.values(cards).filter(
									(c) => c.type === CardTypeEnum.POSTPAID,
								).length
							}
							/{plans.free.limits.postpaidCard}
						</span>
						<span>
							Vales:{" "}
							{
								Object.values(cards).filter(
									(c) => c.type === CardTypeEnum.PREPAID,
								).length
							}
							/{plans.free.limits.prepaidCard}
						</span>
						<span>
							Categorias: {Object.keys(categories).length}/
							{plans.free.limits.categories}
						</span>
						<span>
							Transações: {transactions.length}/
							{plans.free.limits.transactionsPerMonth}
						</span>
						<span>
							Transações recorrentes: {0}/
							{plans.free.limits.recurrentTransactions}
						</span>
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
							<div key={title} className="flex flex-row items-center gap-2">
								<Icon icon={icon} size={6} className="mx-4" />

								<div>
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
