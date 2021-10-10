export const traverseBFS = (root: HTMLElement, cb: (node: HTMLElement) => void) => {
	let queue = Array.from(root.children);
	let res: HTMLElement[] = [];

	while (queue.length) {
		const current = queue.shift() as HTMLElement;
		res.push(current);

		// Add children to the stack so we can further traverse their children
		Array.from(current.children).forEach((child) => {
			queue.push(child);
		});
		cb(current);
	}
};
