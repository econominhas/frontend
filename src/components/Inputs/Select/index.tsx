/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Listbox, Transition } from "@headlessui/react";
import { Icon } from "components/Icon";
import React from "react";
import { Fragment } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { getTextColor } from "utils/color";

interface Props<T> {
	label: string;
	toBeSelectedLabel?: string;
	data: Array<T>;
	selectedId?: string;
	fieldNames: {
		id: keyof T;
		label: keyof T;
		color: keyof T;
		icon?: keyof T;
		iconUrl?: keyof T;
	};
	onChange: (val: any) => void;
}

export function Select<T extends Record<string, any>>({
	label,
	toBeSelectedLabel,
	data,
	selectedId,
	fieldNames,
	onChange,
}: Props<T>) {
	const selected = data.find((d) => d[fieldNames.id] === selectedId);

	return (
		<Listbox value={selected} onChange={onChange}>
			{({ open }) => (
				<>
					<Listbox.Label className="block text-sm leading-6">
						{label}
					</Listbox.Label>

					<div className="relative mt-2">
						<Listbox.Button
							className={[
								"relative",
								"w-full",
								"cursor-default",
								"rounded-md",
								"px-4",
								"py-2",
								"ring-1",
								"ring-inset",
								"ring-gray-300",
								"focus:outline-none",
								"focus:ring-2",
								"focus:ring-primary",
							].join(" ")}
						>
							<div
								className="rounded px-4 py-2 mr-9"
								style={
									selected
										? {
												backgroundColor: selected[fieldNames.color],
												color: getTextColor(selected[fieldNames.color]),
										  }
										: {}
								}
							>
								{!selected && (
									<span className="flex items-center">
										<span className="block truncate">
											{toBeSelectedLabel || label}
										</span>
									</span>
								)}

								{selected && (
									<span className="flex items-center">
										{fieldNames.icon && (
											<Icon icon={selected[fieldNames.icon]} size={2} />
										)}
										{fieldNames.iconUrl && (
											<img
												src={selected[fieldNames.iconUrl]}
												alt={selected[fieldNames.label]}
												className="w-4 h-4"
											/>
										)}
										<span className="ml-3 block truncate">
											{selected[fieldNames.label]}
										</span>
									</span>
								)}

								<span className="pointer-events-none absolute inset-y-0 right-2 ml-3 flex items-center pr-2 text-primary-content">
									<BsFillCaretDownFill />
								</span>
							</div>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options
								className={[
									"absolute",
									"z-10",
									"mt-1",
									"max-h-56",
									"w-full",
									"overflow-auto",
									"rounded-md",
									"bg-white",
									"py-1",
									"text-base",
									"shadow-lg",
									"ring-1",
									"ring-black",
									"ring-opacity-5",
									"focus:outline-none",
									"sm:text-sm",
								].join(" ")}
							>
								{data.map((d) => (
									<Listbox.Option
										key={d[fieldNames.id]}
										className="relative cursor-default select-none py-1 pl-3 pr-12"
										value={d[fieldNames.id]}
									>
										<div
											className="flex items-center rounded px-4 py-2"
											style={
												d[fieldNames.id] === selectedId
													? {
															backgroundColor: d[fieldNames.color],
															color: getTextColor(d[fieldNames.color]),
													  }
													: {
															border: `1px solid ${d[fieldNames.color]}`,
															color: d[fieldNames.color],
													  }
											}
										>
											{fieldNames.icon && d[fieldNames.icon] && (
												<Icon icon={d[fieldNames?.icon]} size={2} />
											)}
											{fieldNames.iconUrl && d[fieldNames.iconUrl] && (
												<img
													src={d[fieldNames?.iconUrl]}
													alt={d[fieldNames.label]}
													className="w-4 h-4"
												/>
											)}
											<span className="ml-3 block truncate font-semibold">
												{d[fieldNames?.label]}
											</span>
										</div>
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</>
			)}
		</Listbox>
	);
}
