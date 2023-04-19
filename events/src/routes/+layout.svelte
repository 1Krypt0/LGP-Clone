<script lang="ts">
	import '../app.css';
	import { fly } from 'svelte/transition';
	import { ChevronDownIcon } from 'svelte-feather-icons';
	import svelte_logo from '$lib/images/svelte-logo.svg';

	let visible = false;
	function toggleVisibility() {
		visible = !visible;
	}
</script>

<div class="flex flex-col min-h-screen h-screen">
	<header class="flex justify-between items-center bg-white z-10 px-8 py-2">
		<div class="flex items-center gap-6" />

		<section class="flex items-center gap-4">
			<!-- TODO: Complete with dynamic username -->
			<p class="text-lg font-extrabold hidden sm:block">Sample User</p>

			<!-- TODO: Complete with dynamic profile pic -->
			<img class="w-12 h-12" alt="user profile" src={svelte_logo} />

			<div class="relative inline-block text-left">
				<button class="pt-2" on:click={toggleVisibility}>
					<ChevronDownIcon />
				</button>

				{#if visible}
					<div
						class="absolute right-0 z-10 mt-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="menu-button"
						tabindex="-1"
						transition:fly
					>
						<div class="py-1" role="none">
							<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
							<a
								href="#"
								class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
								role="menuitem"
								tabindex="-1"
								id="menu-item-0">Account settings</a
							>
							<a
								href="#"
								class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
								role="menuitem"
								tabindex="-1"
								id="menu-item-1">Support</a
							>
							<a
								href="#"
								class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
								role="menuitem"
								tabindex="-1"
								id="menu-item-2">License</a
							>
							<form method="POST" action="#" role="none">
								<button
									type="submit"
									class="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
									role="menuitem"
									tabindex="-1"
									id="menu-item-3">Sign out</button
								>
							</form>
						</div>
					</div>
				{/if}
			</div>

			<!-- TODO: Change to sm:block when implemented -->
		</section>
	</header>

	<main class="flex h-full overflow-y-scroll bg-right-bottom bg-contain bg-no-repeat bg-fixed }">
		<slot />
	</main>
</div>
