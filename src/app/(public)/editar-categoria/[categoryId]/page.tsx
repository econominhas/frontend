import { categories } from "assets/data";
import { Header } from "components/Header";

import { Content } from "./Content";

interface Props {
	params: {
		categoryId: string;
	};
}

const CategoryPage = ({ params }: Props) => {
	const category = categories[params.categoryId]!;

	return (
		<>
			<Header title="Detalhes da categoria" hasBackBtn />

			<Content category={category} />
		</>
	);
};

export function generateStaticParams() {
	return Object.values(categories);
}

export default CategoryPage;
