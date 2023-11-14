import { colors as colorsData } from "assets/colors";
import React from "react";

interface Props {
	id: string;
	label: string;
	value: string;
	onChange: (val: string) => void;
}

const colors = Object.values(colorsData);

export function ColorInput({
	id,
	label,
	value,

	onChange,
}: Props) {
	return (
		<div className="form-control">
			<label className="label p-0 mb-2">
				<span className="label-text">{label}</span>
			</label>
			<div className="flex flex-wrap justify-center gap-1">
				{colors.map((c) => {
					const checked = value === c;

					return (
						<input
							key={c}
							type="radio"
							id={id}
							name={id}
							checked={checked}
							className="radio p-4"
							value={value}
							onClick={() => onChange(c)}
							style={
								checked
									? {
											backgroundColor: c,
									  }
									: {
											backgroundColor: c,
									  }
							}
						/>
					);
				})}
			</div>
		</div>
	);
}
