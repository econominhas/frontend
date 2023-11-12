"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "contexts/auth";
import { CurrentBudgetProvider } from "contexts/current-budget";
import { PwaProvider } from "contexts/pwa-popup";
import React from "react";
import { ToastContainer } from "react-toastify";

import { AddTransactionProvider } from "./add-transaction";

function Providers({ children }: React.PropsWithChildren) {
	const [client] = React.useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					staleTime: 100 * 60 * 60 * 4, // 4 hours
					refetchOnWindowFocus: false,
					refetchOnReconnect: false,
					refetchOnMount: false,
				},
			},
		}),
	);

	return (
		<AuthProvider>
			<QueryClientProvider client={client}>
				<AddTransactionProvider>
					<CurrentBudgetProvider>
						<PwaProvider>{children}</PwaProvider>
					</CurrentBudgetProvider>
				</AddTransactionProvider>
				<ReactQueryDevtools initialIsOpen={false} />
				<ToastContainer />
			</QueryClientProvider>
		</AuthProvider>
	);
}

export default Providers;
