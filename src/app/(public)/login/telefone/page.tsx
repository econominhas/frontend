"use client";

import { TextInput } from "components/Inputs/Text";
import { useRouter } from "next/navigation";
import { useForm, useFormState } from "react-hook-form";

interface IForm {
	phone: string;
}

const Phone = () => {
	const { handleSubmit, register, control } = useForm<IForm>({
		mode: "onChange",
		defaultValues: {
			phone: "",
		},
	});

	const { isValid, isSubmitting } = useFormState({ control });

	const router = useRouter();

	const onSubmit = (values: IForm) => {
		if (isValid) {
			router.push(`/login/telefone/success?telefone=${values.phone}`);

			return;
		}
	};

	return (
		<>
			<header className="card-body flex items-center justify-center w-full mb-8">
				<h2 className="card-title text-3xl text-center">
					Entrar ou criar conta
				</h2>
			</header>
			<form
				className="flex items-center justify-center flex-col gap-6"
				onSubmit={handleSubmit(onSubmit)}
			>
				<TextInput
					label="Telefone"
					mask="(99) 99999?-9999"
					value=""
					onChange={(val: string) => {}}
				/>
				<button
					type="submit"
					title="Enviar"
					className="btn btn-secondary w-full"
					disabled={isSubmitting}
				>
					Enviar
				</button>
			</form>
		</>
	);
};

export default Phone;
