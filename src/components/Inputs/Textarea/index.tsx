import React from "react";

import { makeBeforeChangeValue } from "../helpers";

interface Props {
	id?: string;
	label: string;
	placeholder?: string;
	maxLength?: number;
	value: string;
	onChange: (val: string) => void;
}

export function TextareaInput({
	id,
	label,
	placeholder,
	value,

	maxLength,

	onChange,
}: Props) {
	const beforeChangeValue = makeBeforeChangeValue({
		maxLength,
		onChange,
	});

	return (
		<div className="form-control">
			<label className="label p-0">
				<span className="label-text">{label}</span>
			</label>
			<textarea
				id={id}
				placeholder={placeholder || label}
				maxLength={300}
				className="input input-bordered mt-2 h-24 py-3 resize-none"
				value={value}
				onChange={(e) => beforeChangeValue(e.target.value)}
			/>
		</div>
	);
}
