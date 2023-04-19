<script lang="ts">
</script>

<section class="flex flex-col items-center w-1/2 mx-auto">
	<h1 class="text-3xl font-bold pt-12">Welcome to the Moverly Event Manager</h1>
	<h2 class="text-lg pt-6">Please enter your event information below:</h2>

	<form method="post" class="form-control pt-12 w-1/2">
		<label for="name" class="label text-lg">Event Name</label>
		<input
			class="input input-bordered"
			id="name"
			type="text"
			placeholder="Enter the Event Name here"
		/>

		<label for="description" class="label text-lg">Event Description</label>
		<textarea
			class="textarea textarea-bordered"
			id="description"
			name="description"
			placeholder="Enter the Event Description here"
		/>

		<div class="flex justify-center pt-6">
			<button class="btn"> Submit </button>
		</div>
	</form>
</section>
