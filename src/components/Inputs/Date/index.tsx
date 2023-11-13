import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/pt_BR";
import dayjs from "dayjs";
import React from "react";

interface Props {
	label: string;
	mode: "time" | "month";
	value: Date;
}

export function DateInput({ label, mode, value }: Props) {
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
				value={dayjs(value)}
				locale={locale}
				allowClear={false}
				className="input input-bordered date-picker"
			/>
		</div>
	);
}
