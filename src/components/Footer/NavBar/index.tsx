"use client";

import { Icon } from "components/Icon";
import { useAddTransaction } from "contexts/add-transaction";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
	const pathname = usePathname();
	const { setActive } = useAddTransaction();

	return (
		<div className="navbar bg-primary flex justify-around text-3xl">
			<Link
				className={`tooltip flex flex-col justify-center ${
					pathname === "/orcamento" ? "text-white" : ""
				}`}
				data-tip="Orçamento"
				href="/orcamento"
			>
				<Icon icon="invoice" />
				<span className="text-xs mt-1">Orçamento</span>
			</Link>

			<Link
				className={`tooltip flex flex-col justify-center ${
					pathname === "/" ? "text-white" : ""
				}`}
				data-tip="Home"
				href="/"
			>
				<Icon icon="house" />
				<span className="text-xs mt-1">Home</span>
			</Link>

			<button
				className="tooltip rounded-full bg-secondary text-secondary-content w-16 h-16 flex justify-center align-center"
				data-tip="Adicionar transação"
				style={{
					marginTop: "-2rem",
					fontSize: "2rem",
				}}
				onClick={() => setActive(true)}
			>
				<Icon icon="plus" />
			</button>

			<Link
				className={`tooltip flex flex-col justify-center ${
					pathname === "/carteira" ? "text-white" : ""
				}`}
				data-tip="Carteira"
				href="/carteira"
			>
				<Icon icon="wallet" />
				<span className="text-xs mt-1">Carteira</span>
			</Link>

			<Link
				className={`tooltip flex flex-col justify-center ${
					pathname === "/conta" ? "text-white" : ""
				}`}
				data-tip="Conta"
				href="/conta"
			>
				<Icon icon="profile" />
				<span className="text-xs mt-1">Conta</span>
			</Link>
		</div>
	);
};
