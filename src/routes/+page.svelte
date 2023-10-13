<script lang="ts">
	import type { Payload } from './+page';
	import { _submitToHasura } from './+page';

	let fullName: string | undefined;
	let email: string | undefined;
	let password: string | undefined;
	let isLogin: boolean = true;

	const handleSubmit = async (event: Event) => {
		event.preventDefault();

		const payload: Payload = {
			email: email as string,
			password: password as string,
		};

		if (!isLogin && fullName) {
			payload.fullName = fullName;
		}

		_submitToHasura(payload);
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="IOFRM App" />
</svelte:head>

<section class="flex relative w-full h-screen bg-[#23394a] text-white">
	<div class="website-logo fixed top-1/2 w-[100px] left-[220px]">
		<div class="bg-logo-dark">
			<img class="opacity-0 cursor-pointer" src="/images/logo-light.svg" alt="logo image" />
		</div>
	</div>
	<div class="bg-back-image w-[550px] bg-center bg-cover" />
	<div class="bg-custom-background max-w-[340px] mx-auto my-auto text-left form-content">
		<h3 class="text-white text-[24px] font-bold mb-4">Get more things done with Loggin platform</h3>
		<p class="text-white text-[18px] font-thin mb-8">Access to the most powerful tool in the entire design and web industry</p>
		<div class="cursor-pointer flex mt-3 mb-[34px] page-links">
			<div class="relative text-[15px] mr-[20px] bg-transparent {isLogin ? 'text-bold' : 'text-medium'}" on:click={() => {isLogin = true}}>Login</div>
			<div class="relative text-[15px] mr-[20px] bg-transparent {!isLogin ? 'text-bold' : 'text-medium'}" on:click={() => {isLogin = false}}>Register</div>
		</div>
		<form class="form-input" on:submit={handleSubmit}>
			<div class="data-input">
				{#if !isLogin}
				<input
					bind:value={fullName}
					class="border border-gray-300 rounded-md px-3 py-2 mb-4"
					placeholder="Full Name"
					required
				/>
				{/if}
				<input
					bind:value={email}
					class="border border-gray-300 rounded-md px-3 py-2 mb-4"
					placeholder="E-mail Address"
					required
				/>
				<input
					bind:value={password}
					type="password"
					class="border border-gray-300 rounded-md px-3 py-2"
					placeholder="Password"
					required
				/>
			</div>
			{#if isLogin}
			<div class="flex items-center mt-3">
				<input
					id="default-checkbox"
					type="checkbox"
					value=""
					class="w-4 h-4 text-custom-background bg-gray-100 rounded-md focus:ring-0 border border-white dark:border-gray-800 dark:bg-transparent dark:checked:bg-white"
				/>
				<label
					for="default-checkbox"
					class="ml-2 text-sm font-semibold text-white-700 dark:text-gray-300">Remember me</label
				>
			</div>
			{/if}
			<div class="form-button mt-[30px] mb-[30px]">
				{#if isLogin}
				<button
					type="submit"
					class="bg-white font-medium rounded-md text-xs w-full sm:w-auto px-6 py-2 text-center"
					>Login</button
				>
				<a class="text-white text-xs ml-3" href="/forget">Forget password?</a>
				{:else}
				<button
					type="submit"
					class="bg-white font-medium rounded-md text-xs w-full sm:w-auto px-6 py-2 text-center"
					>Register</button
				>
				{/if}
			</div>
		</form>
		<div class="other-links text-[12px] mt-3">
			{#if isLogin}
			<span>Or login with</span>
			{:else}
			<span>Or register with</span>
			{/if}
			<a class="ml-3 text-white font-medium" href="#">Facebook</a>
			<a class="ml-3 text-white font-medium" href="#">Google</a>
			<a class="ml-3 text-white font-medium" href="#">Linkedin</a>
		</div>
	</div>
</section>

<style>

	.form-content .page-links div:after {
		position: absolute;
		background-color: white;
		content: "";
		width: 100%;
		height: 2px;
		left: 0;
		bottom: -10px;
		transition: all 0.3s;
	}

	.form-content .data-input input {
		font-size: 15px;
		padding: 9px 20px;
		outline: 0;
		border: 0;
		background-color: #445867;
		width: 100%;
		height: 36px;
	}

	.form-content .data-input input:hover,
	.form-content .data-input input:focus {
		background-color: #fff;
		color: #23394a;
	}

	.form-content .form-button button {
		color: #23394a;
		font-weight: 700;
	}
</style>
