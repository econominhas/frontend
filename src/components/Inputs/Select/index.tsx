import { Listbox, Transition } from "@headlessui/react";
import { colors } from "assets/colors";
import { Icon, IconType } from "components/Icon";
import React from "react";
import { getTextColor } from "utils/color";
import { val } from "utils/utils";

interface Props<T> {
	id: string;
	label: string;
	toBeSelectedLabel?: string;
	data: Array<T>;
	disabled?: boolean;
	value?: string;
	fieldNames: {
		id: Leaves<T>;
		label: Leaves<T>;
		color?: Leaves<T>;
		icon?: Leaves<T>;
		iconUrl?: Leaves<T>;
		groupLabel?: Leaves<T>;
	};
	onChange: (val: any) => void;
}

export function SelectInput<T extends Record<string, any>>({
	id,
	label,
	toBeSelectedLabel,
	data,
	value,
	fieldNames,
	disabled,
	onChange,
}: Props<T>) {
	const selected = data.find((d) => val<string>(d, fieldNames.id) === value);

	const groups: Array<[string, Array<T>]> = fieldNames.groupLabel
		? Object.entries(
				data.reduce(
					(acc, cur) => {
						const key = val<string>(cur, fieldNames.groupLabel!);

						if (!acc[key]) {
							acc[key] = [];
						}

						acc[key].push(cur);

						return acc;
					},
					{} as Record<string, Array<T>>,
				),
		  )
		: [["", data]];

	return (
		<Listbox name={id} disabled={disabled} value={selected} onChange={onChange}>
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
								disabled ? "bg-disabled" : "",
							].join(" ")}
						>
							<div
								className="rounded px-4 py-2 mr-9"
								style={
									selected
										? {
												backgroundColor: fieldNames.color
													? val<string>(selected, fieldNames.color)
													: colors.primary,
												color: getTextColor(
													fieldNames.color
														? val<string>(selected, fieldNames.color)
														: colors.primary,
												),
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
											<Icon
												icon={val<IconType>(selected, fieldNames.icon)}
												size={2}
											/>
										)}
										{fieldNames.iconUrl && (
											<img
												src={val<string>(selected, fieldNames.iconUrl)}
												alt={val<string>(selected, fieldNames.label)}
												className="max-w-4 max-h-4"
											/>
										)}
										<span className="ml-3 block truncate">
											{val<string>(selected, fieldNames.label)}
										</span>
									</span>
								)}

								<span className="pointer-events-none absolute inset-y-0 right-2 ml-3 flex items-center pr-2 text-primary-content">
									<Icon icon="triangle-down" />
								</span>
							</div>
						</Listbox.Button>

						<Transition
							show={open}
							as={React.Fragment}
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
								{groups.map(([groupLabel, items]) => (
									<>
										{groupLabel && (
											<div className="px-3 py-1 bg-gray font-bold">
												{groupLabel}
											</div>
										)}

										{items.map((d) => (
											<Listbox.Option
												key={val<string>(d, fieldNames.id)}
												className="relative cursor-default select-none py-1 pl-3 pr-12"
												value={d[fieldNames.id]}
											>
												<div
													className="flex items-center rounded px-4 py-2"
													style={
														val<string>(d, fieldNames.id) === value
															? {
																	backgroundColor: fieldNames.color
																		? val<string>(d, fieldNames.color)
																		: colors.primary,
																	color: getTextColor(
																		fieldNames.color
																			? val<string>(d, fieldNames.color)
																			: colors.primary,
																	),
															  }
															: {
																	border: `1px solid ${
																		fieldNames.color
																			? val<string>(d, fieldNames.color)
																			: colors.primary
																	}`,
																	color: fieldNames.color
																		? val<string>(d, fieldNames.color)
																		: colors.primary,
															  }
													}
												>
													{fieldNames.icon &&
														val<IconType>(d, fieldNames.icon) && (
															<Icon
																icon={val<IconType>(d, fieldNames.icon)}
																size={2}
															/>
														)}
													{fieldNames.iconUrl &&
														val<string>(d, fieldNames.iconUrl) && (
															<img
																src={val<string>(d, fieldNames.iconUrl)}
																alt={val<string>(d, fieldNames.label)}
																className="max-w-4 max-h-4"
															/>
														)}
													<span className="ml-3 block truncate font-semibold">
														{val<string>(d, fieldNames.label)}
													</span>
												</div>
											</Listbox.Option>
										))}
									</>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</>
			)}
		</Listbox>
	);
}
