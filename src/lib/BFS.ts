export const traverseBFS = (root: HTMLElement, cb: (node: HTMLElement) => void) => {
	let stack = Array.from(root.children);
	let res: HTMLElement[] = [];

	while (stack.length) {
		const current = stack.shift() as HTMLElement;
		res.push(current);

		// Add children to the stack so we can further traverse their children
		Array.from(current.children).forEach((child) => {
			stack.push(child);
		});

		// Call given callback with current counter
		cb(current);
	}
};
