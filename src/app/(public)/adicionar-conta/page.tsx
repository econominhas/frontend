"use client";

import { bankProviders as bankProvidersData } from "assets/data";
import { Header } from "components/Header";
import { makeSetData } from "components/Inputs/helpers";
import { MoneyInput } from "components/Inputs/Money";
import { SelectInput } from "components/Inputs/Select";
import { TextInput } from "components/Inputs/Text";
import { Space } from "components/Space";
import { useState } from "react";

const bankProviders = Object.values(bankProvidersData);

interface NewAccountForm {
	bankId?: string;
	accountNumber: string;
	branch: string;
	balance: number;
	name: string;
}

const AddAccount = () => {
	const [state, setState] = useState<NewAccountForm>({
		accountNumber: "",
		branch: "",
		balance: 0,
		name: "",
	});

	const setData = makeSetData<NewAccountForm>({
		setState,
	});

	return (
		<>
			<Header title="Adicionar nova conta" hasBackBtn />

			<main className="min-h-[100dvh] w-full flex flex-col pt-2 container-padding">
				<form className="flex justify-center flex-col">
					<SelectInput
						label="Instituição financeira"
						toBeSelectedLabel="Selecionar instituição financeira"
						data={bankProviders}
						fieldNames={{
							id: "bankId",
							label: "name",
							color: "color",
							iconUrl: "iconUrl",
						}}
						onChange={(val) => setData("bankId", val)}
					/>

					<Space />

					<TextInput
						label="Número da conta"
						numeric
						mask="99999-9"
						maxLength={6}
						value={state.accountNumber}
						onChange={(val) => setData("accountNumber", val)}
					/>

					<Space />

					<TextInput
						label="Agência"
						numeric
						maxLength={3}
						value={state.branch}
						onChange={(val) => setData("branch", val)}
					/>

					<Space />

					<MoneyInput
						label="Saldo"
						value={state.balance}
						onChange={(val) => setData("balance", val)}
					/>

					<Space />

					<TextInput
						label="Nome"
						placeholder={
							state.bankId ? bankProvidersData[state.bankId].name : undefined
						}
						value={state.name}
						onChange={(val) => setData("name", val)}
					/>

					<Space />

					<button type="submit" className="mt-4 btn btn-primary">
						Adicionar conta bancária
					</button>
				</form>
			</main>
		</>
	);
};

export default AddAccount;
