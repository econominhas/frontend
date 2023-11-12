import React from "react";

interface Props {
	label: string;
	placeholder?: string;
	textarea?: boolean;
	value: string;
	onChange: (val: string) => void;
}

export function TextInput({
	label,
	placeholder,
	textarea,
	value,
	onChange,
}: Props) {
	return (
		<div className="form-control">
			<label className="label p-0">
				<span className="label-text">{label}</span>
			</label>
			{textarea ? (
				<textarea
					placeholder={placeholder || label}
					maxLength={300}
					className="input input-bordered mt-2 h-24 py-3 resize-none"
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>
			) : (
				<input
					type="text"
					placeholder={placeholder || label}
					className="input input-bordered mt-2"
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>
			)}
		</div>
	);
}
