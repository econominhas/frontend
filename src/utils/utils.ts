export const val = <T = unknown>(obj: Record<string, any>, path: string): T => {
	const paths = path.split(".");
	let current = obj;

	for (let i = 0; i < paths.length; ++i) {
		if (current[paths[i]] == undefined) {
			return undefined as T;
		} else {
			current = current[paths[i]];
		}
	}

	return current as T;
};
