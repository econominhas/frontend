"use client";

import { useAddTransaction } from "contexts/add-transaction";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillGearFill, BsFillHouseFill } from "react-icons/bs";
import { FaFileInvoiceDollar, FaPlus } from "react-icons/fa";
import { PiWalletFill } from "react-icons/pi";

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
				<FaFileInvoiceDollar />
				<span className="text-xs mt-1">Orçamento</span>
			</Link>

			<Link
				className={`tooltip flex flex-col justify-center ${
					pathname === "/" ? "text-white" : ""
				}`}
				data-tip="Home"
				href="/"
			>
				<BsFillHouseFill />
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
				<FaPlus />
			</button>

			<Link
				className={`tooltip flex flex-col justify-center ${
					pathname === "/carteira" ? "text-white" : ""
				}`}
				data-tip="Carteira"
				href="/carteira"
			>
				<PiWalletFill />
				<span className="text-xs mt-1">Carteira</span>
			</Link>

			<Link
				className={`tooltip flex flex-col justify-center ${
					pathname === "/ajustes" ? "text-white" : ""
				}`}
				data-tip="Ajustes"
				href="/ajustes"
			>
				<BsFillGearFill />
				<span className="text-xs mt-1">Ajustes</span>
			</Link>
		</div>
	);
};
