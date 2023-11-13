import { Dispatch, SetStateAction } from "react";

interface Configs<T> {
	numeric?: boolean;
	maxLength?: number;
	setValueAsNumber?: boolean;
	onChange: (val: T) => void;
}

// A function that returns a function to change the value
// This function has all the validations that the inputs need,
// centralized in one place, to be easy to fix bugs and not
// duplicate code
export const makeBeforeChangeValue =
	<T>({ onChange, numeric, maxLength, setValueAsNumber }: Configs<T>) =>
	(newValue: string) => {
		if (numeric) {
			newValue = newValue.replace(/\D/g, "");
		}

		if (maxLength) {
			newValue = newValue.substring(0, maxLength);
		}

		if (setValueAsNumber) {
			onChange(parseInt(newValue || "0", 10) as T);
		} else {
			onChange(newValue as T);
		}
	};

interface CreateSetDataInput<T> {
	setState: Dispatch<SetStateAction<T>>;
	execBeforeSet?: (newVal: T) => void;
}

export const makeSetData =
	<T>({ setState, execBeforeSet }: CreateSetDataInput<T>) =>
	<K extends keyof T>(field: K, value: T[K]) => {
		setState((prevState) => {
			const newVal = {
				...prevState,
				[field]: value,
			} as T;

			if (execBeforeSet) {
				execBeforeSet(newVal);
			}

			return newVal;
		});
	};
