"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

import { MonthIndicator } from "./MonthIndicator";

export interface HeaderProps {
	title: string;
	subtitle?: string;
	hasBackBtn?: boolean;
	hasMonthIndicator?: boolean;
}

export const Header = ({
	title,
	subtitle,
	hasBackBtn,
	hasMonthIndicator,
}: HeaderProps) => {
	const router = useRouter();

	return (
		<section>
			<div className="bg-primary container-padding text-center items-center relative">
				{hasBackBtn && (
					<button
						className="rounded-full bg-secondary text-secondary-content p-2 absolute top-1/4 left-4"
						onClick={() => router.back()}
					>
						<FaArrowLeft />
					</button>
				)}
				<div className="w-full">
					<h1 className="font-black text-xl">{title}</h1>
					{subtitle && <h2 className="font-bold text-sm">{subtitle}</h2>}
				</div>
			</div>

			{hasMonthIndicator && <MonthIndicator />}
		</section>
	);
};
