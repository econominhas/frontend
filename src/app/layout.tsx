import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { ReactNode } from "react";
import Providers from "utils/providers";
import { NavBar } from "components/NavBar";

interface Props {
	children: ReactNode;
}

const roboto = Roboto({
	weight: ["100", "300", "400", "500", "700", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Econominhas",
	description: "Controle suas finanças",
};

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<html lang="pt-br" data-theme="econominhas">
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icon-192x192.png" />
				<meta name="theme-color" content="#00c9fe" />
			</Head>
			<body className={`${roboto.className} relative`}>
				<Providers>
					{children}
					<NavBar />
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
