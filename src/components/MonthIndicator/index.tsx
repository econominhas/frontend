"use client";

import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { getMonthNameAndYear } from "utils/date";

export const MonthIndicator = () => {
	return (
		<div className="flex flex-row justify-between bg-gray text-center items-center relative">
			<Link href="/" className="min-w-8 pl-2">
				<MdKeyboardArrowLeft />
			</Link>
			<div className="p-2">
				<h2 className="font-bold text-sm">{getMonthNameAndYear()}</h2>
			</div>
			<Link href="/" className="min-w-8 px-2">
				<MdKeyboardArrowRight />
			</Link>
		</div>
	);
};
