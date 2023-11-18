import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/pt_BR";
import dayjs from "dayjs";
import React from "react";

interface Props {
	id: string;
	label: string;
	mode: "time" | "month";
	value: Date;
	onChange: (date?: Date) => void;
}

export function DateInput({ id, label, mode, value, onChange }: Props) {
	return (
		<div className="form-control flex">
			<label className="label p-0">
				<span className="label-text">{label}</span>
			</label>
			<DatePicker
				{...(mode === "time"
					? {
							showTime: true,
							format: "DD/MM/YYYY HH:mm",
							showNow: false,
					  }
					: {
							format: "MMM YYYY",
							picker: "month",
					  })}
				id={id}
				name={id}
				value={dayjs(value)}
				onChange={(v) => onChange(v?.toDate() || undefined)}
				locale={locale}
				allowClear={false}
				className="input input-bordered date-picker"
			/>
		</div>
	);
}
