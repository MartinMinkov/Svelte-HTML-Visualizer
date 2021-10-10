<script>
	export let htmlToRender;
</script>

<div class="editor-container">
	<textarea bind:value={htmlToRender} class="editor" />
</div>

<style>
	.editor-container {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.editor {
		width: 50%;
		height: 400px;
	}
</style>
