/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { colors } from "assets/colors";
import { bankAccounts, cards, categories as categoriesData } from "assets/data";
import { DateInput } from "components/Inputs/Date";
import { MoneyInput } from "components/Inputs/Money";
import { Select } from "components/Inputs/Select";
import { TextInput } from "components/Inputs/Text";
import { Space } from "components/Space";
import { useAddTransaction } from "contexts/add-transaction";
import { TransactionTypeEnum } from "types/enums/transaction-type";

const categories = Object.values(categoriesData);

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
				<Select
					label="Tipo de transação"
					toBeSelectedLabel="Selecione o tipo de transação"
					selectedId={data.type}
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
						<Select
							label="Categoria"
							toBeSelectedLabel="Selecione a categoria"
							selectedId={data.categoryId}
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
							label="Valor"
							value={data.value}
							onChange={(val) => setData("value", val)}
						/>

						<Space />

						<Select
							label="Método de pagamento"
							toBeSelectedLabel="Selecione o método de pagamento"
							selectedId={data.paymentMethodId}
							data={Object.values(cards)}
							fieldNames={{
								id: "cardId",
								color: "color",
								label: "name",
								iconUrl: "iconUrl",
							}}
							onChange={(val) => setData("paymentMethodId", val)}
						/>

						<Space />

						<TextInput
							label="Nome"
							value={data.name}
							onChange={(val) => setData("name", val)}
						/>
					</>
				)}

				{data.type === TransactionTypeEnum.TRANSFER && (
					<>
						<MoneyInput
							label="Valor"
							value={data.value}
							onChange={(val) => setData("value", val)}
						/>

						<Space />

						<TextInput
							label="Nome"
							value={data.name}
							onChange={(val) => setData("name", val)}
						/>

						<Space />

						<Select
							label="Conta de origem"
							toBeSelectedLabel="Selecione a conta de origem"
							selectedId={data.bankAccountFromId}
							data={Object.values(bankAccounts)}
							fieldNames={{
								id: "bankAccountId",
								color: "color",
								label: "name",
								iconUrl: "iconUrl",
							}}
							onChange={(val) => setData("bankAccountFromId", val)}
						/>

						<Space />

						<Select
							label="Conta de destino"
							toBeSelectedLabel="Selecione a conta de destino"
							selectedId={data.bankAccountToId}
							data={Object.values(bankAccounts)}
							fieldNames={{
								id: "bankAccountId",
								color: "color",
								label: "name",
								iconUrl: "iconUrl",
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
						label="Data de criação"
						mode="time"
						value={data.createdAt}
					/>

					<Space />

					<TextInput
						label="Descrição"
						placeholder="Máximo de 300 caracteres"
						textarea
						value={data.description}
						onChange={(val) => setData("description", val)}
					/>

					<Space />

					<DateInput
						label="Entrar no orçamento do mês"
						mode="month"
						value={data.budget}
					/>
				</div>

				<div className="flex flex-col justify-center w-full">
					<button
						type="submit"
						className="mt-4 underline btn btn-primary"
						disabled={!readyToCreate}
					>
						Cadastrar transação
					</button>

					<button
						type="button"
						className="mt-4 underline btn btn-error"
						onClick={() => close()}
					>
						Cancelar
					</button>
				</div>
			</form>
		</div>
	);
};
