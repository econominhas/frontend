"use client";

import {
	bankAccounts as bankAccountsData,
	cardProviders as cardProvidersData,
} from "assets/data";
import { Header } from "components/Header";
import { makeSetData } from "components/Inputs/helpers";
import { MoneyInput } from "components/Inputs/Money";
import { SelectInput } from "components/Inputs/Select";
import { TextInput } from "components/Inputs/Text";
import { Space } from "components/Space";
import { useState } from "react";
import { CardTypeEnum } from "types/enums/card-type";
import { PayAtEnum } from "types/enums/pay-at";

const bankAccounts = Object.values(bankAccountsData);

interface NewCardForm {
	cardType?: CardTypeEnum;
	cardProviderId?: string;
	lastFourDigits: string;

	// Credit cards
	dueDay?: string;
	limit?: number;
	payAt?: PayAtEnum;
	payWithBankAccountId?: string;

	// Debit cards
	bankAccountId?: string;

	// VA, VR, VT
	balance?: number;
}

const AddCard = () => {
	const [state, setState] = useState<NewCardForm>({
		lastFourDigits: "",
	});

	const setData = makeSetData<NewCardForm>({
		setState,
	});

	const cardProviders = Object.values(cardProvidersData).filter(
		(p) => p.type === state.cardType,
	);

	return (
		<>
			<Header title="Adicionar novo cartão" hasBackBtn />

			<main className="min-h-[100dvh] w-full flex flex-col pt-2 container-padding">
				<form className="flex justify-center flex-col">
					<SelectInput
						label="Tipo de cartão"
						data={[
							{
								id: CardTypeEnum.CREDIT,
								label: "Crédito",
							},
							{
								id: CardTypeEnum.DEBIT,
								label: "Débito",
							},
							{
								id: CardTypeEnum.VA,
								label: "Vale Alimentação",
							},
							{
								id: CardTypeEnum.VR,
								label: "Vale Refeição",
							},
							{
								id: CardTypeEnum.VT,
								label: "Vale Transporte",
							},
						]}
						fieldNames={{
							id: "id",
							label: "label",
						}}
						value={state.cardType}
						onChange={(val) => setData("cardType", val)}
					/>

					{state.cardType && (
						<>
							<SelectInput
								label="Cartão"
								toBeSelectedLabel="Selecionar cartão"
								data={cardProviders}
								fieldNames={{
									id: "cardProviderId",
									label: "name",
									color: "color",
									iconUrl: "iconUrl",
								}}
								value={state.cardProviderId}
								onChange={(val) => setData("cardProviderId", val)}
							/>

							<Space />

							<TextInput
								label="Últimos 4 digitos"
								numeric
								maxLength={4}
								value={state.lastFourDigits}
								onChange={(val) => setData("lastFourDigits", val)}
							/>

							<Space />
						</>
					)}

					{state.cardType === CardTypeEnum.CREDIT && state.cardProviderId && (
						<>
							<SelectInput
								label="Dia de vencimento"
								data={cardProvidersData[
									state.cardProviderId
								].availableDueDates!.map((d) => ({ id: d }))}
								fieldNames={{
									id: "id",
									label: "id",
								}}
								value={state.dueDay}
								onChange={(val) => setData("dueDay", val)}
							/>

							<Space />

							<MoneyInput
								label="Limite"
								value={state.limit}
								onChange={(val) => setData("limit", val)}
							/>

							<Space />

							<SelectInput
								label="Pagar no"
								data={[
									{
										id: PayAtEnum.DUE,
										label: "Vencimento",
									},
									{
										id: PayAtEnum.STATEMENT,
										label: "Fechamento",
									},
								]}
								fieldNames={{
									id: "id",
									label: "label",
								}}
								value={state.payAt}
								onChange={(val) => setData("payAt", val)}
							/>

							<Space />

							<SelectInput
								label="Pagar com a conta"
								data={bankAccounts}
								fieldNames={{
									id: "bankAccountId",
									label: "name",
									color: "color",
									iconUrl: "iconUrl",
								}}
								value={state.payWithBankAccountId}
								onChange={(val) => setData("payWithBankAccountId", val)}
							/>
						</>
					)}

					{state.cardType === CardTypeEnum.DEBIT && state.cardProviderId && (
						<>
							<SelectInput
								label="Vinculado com a conta"
								data={bankAccounts}
								fieldNames={{
									id: "bankAccountId",
									label: "name",
									color: "color",
									iconUrl: "iconUrl",
								}}
								value={state.payWithBankAccountId}
								onChange={(val) => setData("bankAccountId", val)}
							/>
						</>
					)}

					{[CardTypeEnum.VA, CardTypeEnum.VR, CardTypeEnum.VT].includes(
						state.cardType as any,
					) &&
						state.cardProviderId && (
							<>
								<MoneyInput
									label="Saldo"
									value={state.balance}
									onChange={(val) => setData("balance", val)}
								/>
							</>
						)}

					<Space />

					<button className="mt-4 btn btn-primary">Adicionar cartão</button>
				</form>
			</main>
		</>
	);
};

export default AddCard;
