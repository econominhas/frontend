import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLocalPhone } from "react-icons/md";

const GOOGLE_LINK_AUTH = process.env["GOOGLE_LINK_AUTH"];

const Auth = () => {
	return (
		<>
			<header className="card-body flex items-center justify-center w-full mb-8">
				<h2 className="card-title text-3xl text-center">
					Entrar ou criar conta
				</h2>
			</header>
			<div className="flex items-center justify-center flex-col">
				<Link
					type="button"
					title="Logar com google"
					className="btn btn-google w-full normal-case"
					href={GOOGLE_LINK_AUTH || "#"}
				>
					<FcGoogle className="mr-2" />
					Continuar com Google
				</Link>
				<div className="divider">OU</div>
				<div className="flex flex-col gap-2 w-full">
					<Link
						type="Link"
						title="Logar com email"
						className="btn btn-primary w-full normal-case"
						href="/login/e-mail"
					>
						<MdEmail className="mr-2" />
						Continuar com E-mail
					</Link>
					<Link
						type="Link"
						title="Logar com telefone"
						className="btn btn-secondary w-full normal-case"
						href="/login/telefone"
					>
						<MdLocalPhone className="mr-2" />
						Continuar com Telefone
					</Link>
				</div>
			</div>
		</>
	);
};

export default Auth;
