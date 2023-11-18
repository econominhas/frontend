import React from "react";
import { formatBankAccountNumber } from "utils/format";

import { makeBeforeChangeValue } from "../helpers";

interface Props {
	id: string;
	label: string;
	numeric?: boolean;
	placeholder?: string;
	mask?: "99999-9";
	maxLength?: number;
	value: string;
	onChange: (val: string) => void;
}

export function TextInput({
	id,
	label,
	placeholder,
	value,
	mask,

	numeric,
	maxLength,

	onChange,
}: Props) {
	const beforeChangeValue = makeBeforeChangeValue({
		numeric,
		maxLength,
		onChange,
	});

	const formatValue = (val: string): string => {
		if (!mask) return val;

		switch (mask) {
			case "99999-9":
				return formatBankAccountNumber(val);

			default:
				return val;
		}
	};

	return (
		<div className="form-control">
			<label className="label p-0">
				<span className="label-text">{label}</span>
			</label>
			<input
				id={id}
				name={id}
				type="text"
				{...(numeric
					? {
							inputMode: "numeric",
							autoComplete: "off",
					  }
					: {})}
				placeholder={placeholder || label}
				className="input input-bordered mt-2"
				value={formatValue(value)}
				onChange={(e) => beforeChangeValue(e.target.value)}
			/>
		</div>
	);
}
