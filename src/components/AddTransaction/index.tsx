/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { colors } from "assets/colors";
import { bankAccounts, cards, categories as categoriesData } from "assets/data";
import { DateInput } from "components/Inputs/Date";
import { MoneyInput } from "components/Inputs/Money";
import { SelectInput } from "components/Inputs/Select";
import { TextInput } from "components/Inputs/Text";
import { TextareaInput } from "components/Inputs/Textarea";
import { Space } from "components/Space";
import { useAddTransaction } from "contexts/add-transaction";
import { CardTypeEnum } from "types/enums/card-type";
import { TransactionTypeEnum } from "types/enums/transaction-type";

const categories = Object.values(categoriesData);
const paymentMethods = [
	...Object.values(bankAccounts).map((b) => ({
		id: `${b.bankAccountId}#BANK`,
		color: b.bank.color,
		name: b.bank.name,
		iconUrl: b.bank.iconUrl,
		groupLabel: "Contas bancárias",
	})),
	...Object.values(cards)
		.filter((c) => c.type === CardTypeEnum.CREDIT)
		.map((c) => ({
			id: `${c.cardId}#CARD`,
			color: c.cardProvider.color,
			name: c.cardProvider.name,
			iconUrl: c.cardProvider.iconUrl,
			groupLabel: "Cartões de crédito",
		})),
	...Object.values(cards)
		.filter((c) => c.type === CardTypeEnum.VA)
		.map((c) => ({
			id: `${c.cardId}#CARD`,
			color: c.cardProvider.color,
			name: c.cardProvider.name,
			iconUrl: c.cardProvider.iconUrl,
			groupLabel: "Vales Alimentação",
		})),
	...Object.values(cards)
		.filter((c) => c.type === CardTypeEnum.VR)
		.map((c) => ({
			id: `${c.cardId}#CARD`,
			color: c.cardProvider.color,
			name: c.cardProvider.name,
			iconUrl: c.cardProvider.iconUrl,
			groupLabel: "Vales Refeição",
		})),
	...Object.values(cards)
		.filter((c) => c.type === CardTypeEnum.VT)
		.map((c) => ({
			id: `${c.cardId}#CARD`,
			color: c.cardProvider.color,
			name: c.cardProvider.name,
			iconUrl: c.cardProvider.iconUrl,
			groupLabel: "Vales Transporte",
		})),
];

export const AddTransaction = () => {
	const {
		data,
		setData,

		active,
		setActive,

		showAdvancedConfig,
		setShowAdvancedConfig,

		readyToCreate,
	} = useAddTransaction();

	const close = () => {
		setActive(false);
		setShowAdvancedConfig(false);
	};

	return (
		<div
			className={`absolute bottom-0 z-50 h-[100dvh] w-full overflow-auto ${
				active ? "" : "hidden"
			}`}
		>
			<div
				className="absolute top-0 w-full bg-shadow min-h-[100dvh]"
				onClick={() => close()}
			/>
			<form className="absolute bottom-0 max-h-[90dvh] z-50 w-full bg-base-100 rounded-t-lg container-padding overflow-auto">
				<SelectInput
					id="type"
					label="Tipo de transação"
					toBeSelectedLabel="Selecione o tipo de transação"
					value={data.type}
					fieldNames={{
						id: "value",
						color: "color",
						label: "label",
						icon: "icon",
					}}
					data={[
						{
							color: colors.red,
							value: TransactionTypeEnum.OUT,
							label: "Saída",
							icon: "upload",
						},
						{
							color: colors.green,
							value: TransactionTypeEnum.IN,
							label: "Entrada",
							icon: "download",
						},
						{
							color: colors.yellow,
							value: TransactionTypeEnum.TRANSFER,
							label: "Transferência",
							icon: "transfer",
						},
					]}
					onChange={(val) => setData("type", val)}
				/>

				<Space />

				{[TransactionTypeEnum.IN, TransactionTypeEnum.OUT].includes(
					data.type as any,
				) && (
					<>
						<SelectInput
							id="categoryId"
							label="Categoria"
							toBeSelectedLabel="Selecione a categoria"
							value={data.categoryId}
							data={categories}
							fieldNames={{
								id: "categoryId",
								color: "color",
								label: "name",
								icon: "icon",
							}}
							onChange={(val) => setData("categoryId", val)}
						/>

						<Space />

						<MoneyInput
							id="value"
							label="Valor"
							value={data.value}
							onChange={(val) => setData("value", val)}
						/>

						<Space />

						<SelectInput
							id="paymentMethodId"
							label="Método de pagamento"
							toBeSelectedLabel="Selecione o método de pagamento"
							value={data.paymentMethodId}
							data={paymentMethods}
							fieldNames={{
								id: "id",
								color: "color",
								label: "name",
								iconUrl: "iconUrl",
								groupLabel: "groupLabel",
							}}
							onChange={(val) => setData("paymentMethodId", val)}
						/>

						<Space />

						<TextInput
							id="name"
							label="Nome"
							value={data.name}
							onChange={(val) => setData("name", val)}
						/>
					</>
				)}

				{data.type === TransactionTypeEnum.TRANSFER && (
					<>
						<MoneyInput
							id="value"
							label="Valor"
							value={data.value}
							onChange={(val) => setData("value", val)}
						/>

						<Space />

						<TextInput
							id="name"
							label="Nome"
							value={data.name}
							onChange={(val) => setData("name", val)}
						/>

						<Space />

						<SelectInput
							id="bankAccountFromId"
							label="Conta de origem"
							toBeSelectedLabel="Selecione a conta de origem"
							value={data.bankAccountFromId}
							data={Object.values(bankAccounts)}
							fieldNames={{
								id: "bankAccountId",
								color: "bank.color",
								label: "name",
								iconUrl: "bank.iconUrl",
							}}
							onChange={(val) => setData("bankAccountFromId", val)}
						/>

						<Space />

						<SelectInput
							id="bankAccountToId"
							label="Conta de destino"
							toBeSelectedLabel="Selecione a conta de destino"
							value={data.bankAccountToId}
							data={Object.values(bankAccounts)}
							fieldNames={{
								id: "bankAccountId",
								color: "bank.color",
								label: "name",
								iconUrl: "bank.iconUrl",
							}}
							onChange={(val) => setData("bankAccountToId", val)}
						/>
					</>
				)}

				<div className="flex flex-row justify-center w-full">
					<button
						type="button"
						className="mt-4 underline btn btn-ghost"
						onClick={() => setShowAdvancedConfig((prevState) => !prevState)}
					>
						Configurações avançadas
					</button>
				</div>

				<div className={showAdvancedConfig ? "" : "hidden"}>
					<DateInput
						id="createdAt"
						label="Data de criação"
						mode="time"
						value={data.createdAt}
						onChange={(val) => setData("createdAt", val as Date)}
					/>

					<Space />

					<TextareaInput
						id="description"
						label="Descrição"
						placeholder="Máximo de 300 caracteres"
						value={data.description}
						onChange={(val) => setData("description", val)}
					/>

					<Space />

					<DateInput
						id="budget"
						label="Entrar no orçamento do mês"
						mode="month"
						value={data.budget}
						onChange={(val) => setData("budget", val as Date)}
					/>
				</div>

				<div className="flex flex-col justify-center w-full">
					<button
						type="submit"
						className="mt-4 btn btn-primary"
						disabled={!readyToCreate}
					>
						Cadastrar transação
					</button>

					<button
						type="button"
						className="mt-4 btn btn-error"
						onClick={() => close()}
					>
						Cancelar
					</button>
				</div>
			</form>
		</div>
	);
};
