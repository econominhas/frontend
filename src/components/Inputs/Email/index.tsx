import React from "react";

interface Props {
	id: string;
	label: string;
	placeholder?: string;
	value: string;
	onChange: (val: string) => void;
}

export function EmailInput({ id, label, placeholder, value, onChange }: Props) {
	return (
		<div className="form-control w-full">
			<label className="label p-0">
				<span className="label-text">{label}</span>
			</label>
			<input
				id={id}
				name={id}
				type="email"
				placeholder={placeholder || label}
				className="input input-bordered mt-2"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
}
