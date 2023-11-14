"use client";

import { categories as categoriesData } from "assets/data";
import { Header } from "components/Header";
import { Icon } from "components/Icon";
import Link from "next/link";
import { getTextColor } from "utils/color";

const categories = Object.values(categoriesData);

const Categories = () => {
	return (
		<>
			<Header title="Categorias" hasBackBtn />

			<main className="min-h-[100dvh] max-w-[100dvw] w-full container-padding">
				<section className="flex flex-col gap-2">
					{categories.map((c) => (
						<Link
							key={c.categoryId}
							className="rounded flex flex-row items-center justify-between container-padding"
							style={{
								backgroundColor: c.color,
								color: getTextColor(c.color),
							}}
							href={`/editar-categoria/${c.categoryId}`}
						>
							<div className="flex flex-row items-center gap-2">
								<Icon icon={c.icon} />
								<span>{c.name}</span>
							</div>
							<Icon icon="pencil" className="mr-2" />
						</Link>
					))}
				</section>

				<div className="divider" />

				<Link href="/criar-categoria" className="btn w-full">
					<Icon icon="pluscircle" />
					<span>Criar categoria</span>
				</Link>
			</main>
		</>
	);
};

export default Categories;
