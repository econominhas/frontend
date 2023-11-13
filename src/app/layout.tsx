import { Container } from "components/Container";
import Providers from "contexts/providers";
import type { Metadata } from "next";
import Head from "next/head";
import { ReactNode } from "react";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

interface Props {
	children: ReactNode;
}

export const metadata: Metadata = {
	title: "Econominhas",
	description: "Controle suas finanças",
};

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<html lang="pt-br" data-theme="econominhas">
			<Head>
				<link rel="manifest" href="/frontend/manifest.json" />
				<link rel="canonical" href="https://econominhas.github.io/frontend/" />
				<link rel="apple-touch-icon" href="/frontend/icon-192x192.png" />
				<meta name="theme-color" content="#00c9fe" />
			</Head>

			<body>
				<Providers>
					<Container>{children}</Container>
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
