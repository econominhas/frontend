"use client";

import { AddTransaction } from "components/AddTransaction";
import { Footer } from "components/Footer";
import { useAddTransaction } from "contexts/add-transaction";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export const Container: FC<Props> = ({ children }) => {
	const { active } = useAddTransaction();

	return (
		<div
			className={`${roboto.className} relative h-[100dvh] ${
				active ? "overflow-hidden" : ""
			}`}
		>
			{children}
			<Footer />
			<AddTransaction />
		</div>
	);
};
