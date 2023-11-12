import React, { useState } from "react";
import { formatMoney } from "utils/money";

interface Props {
	label: string;
	value: number;
	onChange: (val: number) => void;
}

export function MoneyInput({ label, value, onChange }: Props) {
	const [state, setState] = useState<number>(value);

	const beforeChangeValue = (keyPressed: string) => {
		if (keyPressed === "Backspace") {
			setState((prevState) => {
				const valString = prevState.toString();

				const val = parseInt(
					valString.substring(0, valString.length - 1) || "0",
					10,
				);

				onChange(val);

				return val;
			});

			return;
		}

		if (!/^\d$/.test(keyPressed)) return;

		setState((prevState) => {
			const val = parseInt(`${prevState}${keyPressed}`, 10);

			onChange(val);

			return val;
		});
	};

	return (
		<div className="form-control">
			<label className="label p-0">
				<span className="label-text">{label}</span>
			</label>
			<input
				type="text"
				inputMode="numeric"
				autoComplete="off"
				placeholder={label}
				className="input input-bordered mt-2"
				value={formatMoney(state)}
				onKeyUp={(v) => beforeChangeValue(v.key)}
			/>
		</div>
	);
}
