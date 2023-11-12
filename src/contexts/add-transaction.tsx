"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { TransactionTypeEnum } from "types/enums/transaction-type";
import { getMonthAndYear } from "utils/date";

interface FormData {
	type: TransactionTypeEnum;
	categoryId?: string;
	value: number;
	paymentMethodId?: string;
	name: string;
	createdAt: Date;
	description: string;
	budget: Date;

	bankAccountFromId?: string;
	bankAccountToId?: string;
}

interface AddTransactionContextType {
	active: boolean;
	setActive: (active: boolean) => void;

	showAdvancedConfig: boolean;
	setShowAdvancedConfig: (
		showAdvancedConfig: boolean | ((prevState: boolean) => boolean),
	) => void;

	data: FormData;
	setData: <T extends keyof FormData>(field: T, value: FormData[T]) => void;

	readyToCreate: boolean; // Tells if all the fields are filled
}

interface Props {
	children: ReactNode;
}

export const AddTransactionContext = createContext<AddTransactionContextType>(
	{} as AddTransactionContextType,
);

const genDefaultData = (): FormData => ({
	type: TransactionTypeEnum.OUT,
	value: 0,
	name: "",
	createdAt: new Date(),
	description: "",
	budget: new Date(`${getMonthAndYear()}-01`),
});

export const AddTransactionProvider: FC<Props> = ({ children }) => {
	const [active, setActiveRaw] = useState<boolean>(false);
	const [showAdvancedConfig, setShowAdvancedConfig] = useState<boolean>(false);
	const [readyToCreate, setReadyToCreate] = useState<boolean>(false);

	const [data, setDataRaw] = useState<FormData>(genDefaultData());

	const setData = <T extends keyof FormData>(field: T, value: FormData[T]) => {
		setDataRaw((prevState) => {
			const newVal = {
				...prevState,
				[field]: value,
			};

			if (newVal.categoryId && newVal.value > 0 && newVal.paymentMethodId) {
				setReadyToCreate(true);
			}

			return newVal;
		});
	};

	const setActive = (active: boolean) => {
		if (!active) {
			setShowAdvancedConfig(false);
			setDataRaw(genDefaultData());
			setActiveRaw(false);
		} else {
			setActiveRaw(true);
		}
	};

	return (
		<AddTransactionContext.Provider
			value={{
				active,
				setActive,
				showAdvancedConfig,
				setShowAdvancedConfig,
				readyToCreate,

				data,
				setData,
			}}
		>
			{children}
		</AddTransactionContext.Provider>
	);
};

export const useAddTransaction = () => {
	const context = useContext(AddTransactionContext);

	if (!context)
		throw new Error(
			"useAddTransaction must be used within a AddTransactionProvider",
		);

	return context;
};
