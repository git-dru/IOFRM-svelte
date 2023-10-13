<script>
	import Header from './Header.svelte';
	import './styles.css';

</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		box-sizing: border-box;
	}
</style>
