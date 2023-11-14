"use client";

import { Icon, IconType } from "components/Icon";
import { ColorInput } from "components/Inputs/Color";
import { makeSetData } from "components/Inputs/helpers";
import { IconInput } from "components/Inputs/Icon";
import { TextInput } from "components/Inputs/Text";
import { Space } from "components/Space";
import { useState } from "react";
import { Category } from "types/category";

interface Props {
	category: Category;
}

interface FormData {
	icon: IconType;
	color: string;
	name: string;
}

export const Content = ({ category }: Props) => {
	const [state, setState] = useState<FormData>({
		icon: category.icon,
		color: category.color,
		name: category.name,
	});

	const setData = makeSetData({
		setState,
	});

	return (
		<main className="min-h-[100dvh] w-full container-padding flex flex-col items-center gap-12">
			<section className="flex flex-col justify-center items-center gap-1 w-full min-h-72">
				<div
					className="rounded-full w-24 h-24 flex justify-center items-center"
					style={{
						border: `2px solid ${state.color}`,
					}}
				>
					<Icon icon={state.icon} color={state.color} size={14} />
				</div>

				<span className="text-2xl">{state.name}</span>
			</section>

			<section className="w-full">
				<form>
					<TextInput
						label="Nome"
						value={state.name}
						onChange={(v) => setData("name", v)}
					/>

					<Space />

					<IconInput
						id="icon"
						label="Icone"
						value={state.icon}
						onChange={(v) => setData("icon", v as IconType)}
					/>

					<Space />

					<ColorInput
						id="color"
						label="Cor"
						value={state.color}
						onChange={(v) => setData("color", v)}
					/>
				</form>
			</section>

			<section className="flex flex-col w-full gap-2">
				<button className="btn btn-primary w-full">Salvar</button>
				<button className="btn btn-error w-full">
					<Icon icon="eye-slash" />
					Inativar
				</button>
			</section>
		</main>
	);
};
