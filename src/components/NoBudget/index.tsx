import { Header, HeaderProps } from "components/Header";

export const NoBudget = (props: HeaderProps) => {
	return (
		<>
			<Header {...props} />

			<main className="min-h-[100dvh] w-full container-padding flex flex-col items-center">
				Orcamento nao configurado
				<button className="btn btn-primary">
					Clique aqui para configurar o orcamento
				</button>
			</main>
		</>
	);
};
