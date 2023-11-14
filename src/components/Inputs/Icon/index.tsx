import { Icon, iconsArray } from "components/Icon";
import React from "react";

interface Props {
	id: string;
	label: string;
	value: string;
	onChange: (val: string) => void;
}

export function IconInput({
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
				{iconsArray.map((i) => {
					const checked = value === i;

					return (
						<button
							key={i}
							id={id}
							name={id}
							value={value}
							onClick={(e) => {
								e.preventDefault();
								onChange(i);
							}}
							className={
								checked
									? "rounded-full p-2 text-lg bg-black text-white"
									: "rounded-full p-2 text-lg border border-solid border-black"
							}
						>
							<Icon icon={i} />
						</button>
					);
				})}
			</div>
		</div>
	);
}
