import React from "react";
import { CountryEnum } from "types/enums/country";
import { formatPhone } from "utils/format";

import { makeBeforeChangeValue } from "../helpers";

interface Props {
	id?: string;
	country: CountryEnum;
	label: string;
	placeholder?: string;
	value: string;
	onChange: (val: string) => void;
}

const maxlengthByCountry = {
	[CountryEnum.BR]: 11,
};

export function PhoneInput({
	id,
	label,
	placeholder,
	value,
	country,

	onChange,
}: Props) {
	const beforeChangeValue = makeBeforeChangeValue({
		numeric: true,
		maxLength: maxlengthByCountry[country],
		onChange,
	});

	return (
		<div className="form-control">
			<label className="label p-0">
				<span className="label-text">{label}</span>
			</label>
			<input
				id={id}
				name={id}
				type="tel"
				inputMode="numeric"
				placeholder={placeholder || label}
				className="input input-bordered mt-2"
				value={formatPhone(value, country)}
				onChange={(e) => beforeChangeValue(e.target.value)}
			/>
		</div>
	);
}
