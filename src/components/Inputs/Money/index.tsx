import React from "react";
import { formatMoney } from "utils/format";

import { makeBeforeChangeValue } from "../helpers";

interface Props {
	label: string;
	value?: number;
	onChange: (val: number) => void;
}

export function MoneyInput({ label, value, onChange }: Props) {
	const beforeChangeValue = makeBeforeChangeValue({
		numeric: true,
		setValueAsNumber: true,
		onChange,
	});

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
				value={formatMoney(value)}
				onChange={(e) => beforeChangeValue(e.target.value)}
			/>
		</div>
	);
}
