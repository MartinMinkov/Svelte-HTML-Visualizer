<script lang="ts">
	import '../globals.scss';

	import { onMount } from 'svelte';
	import { afterUpdate } from 'svelte';

	import EXAMPLE_HTML from '$lib/ExampleHTML';
	import HTMLInput from '$lib/HTMLInput.svelte';
	import { traverseBFS } from '$lib/BFS';

	let parentNode: HTMLElement;
	let htmlToRender = EXAMPLE_HTML;

	const removeTextNodesFromChildren = (el: HTMLElement) => {
		el.childNodes.forEach((child) => {
			if (child.nodeName === '#text') {
				child.remove();
			}
		});
	};

	const getSameLevelNodes = (node: HTMLElement) => {
		return node.parentNode.children;
	};

	afterUpdate(() => {
		// Remove previous example HTML
		parentNode = document.getElementById('tree');
		if (parentNode) parentNode.remove();

		// Add example HTML to DOM
		const exampleHTML = document.createElement('div');
		exampleHTML.innerHTML = htmlToRender;
		document.body.appendChild(exampleHTML);

		parentNode = document.getElementById('tree');
		traverseBFS(parentNode, (current) => {
			const sameLevelNodes = getSameLevelNodes(current);
			const levelIndex = Array.from(sameLevelNodes).indexOf(current);

			const width = 90 / sameLevelNodes.length;
			const leftSlice = 100 / sameLevelNodes.length;
			const left = leftSlice * levelIndex;

			removeTextNodesFromChildren(current);
			current.insertAdjacentText('afterbegin', current.nodeName);

			current.style.cssText += `;
				width: ${width}%;
				left: ${left}%;
			`;
		});
	});
</script>

<h1>Type any HTML here!</h1>
<HTMLInput bind:htmlToRender />

<style>
	h1 {
		display: flex;
		justify-content: center;
	}
</style>
