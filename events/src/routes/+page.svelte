<script lang="ts">
</script>

<section class="flex flex-col items-center w-1/2 mx-auto">
	<h1 class="text-3xl font-bold pt-12">Add an event here</h1>
	<h2 class="text-lg pt-6">Please enter your Event information below:</h2>

	<form method="post" class="form-control pt-12 w-1/2">
		<label for="name" class="label text-lg">Event Name</label>
		<input
			class="input input-bordered"
			id="name"
			name="name"
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

		<label for="price" class="label text-lg">Event Price</label>
		<input
			type="number"
			class="input input-bordered"
			name="price"
			id="price"
			placeholder="Enter the Event Price here"
		/>

		<label for="date" class="label text-lg">Event Date</label>
		<input type="date" class="input input-bordered" name="date" id="date" />

		<label for="coordinates" class="label text-lg">Event Coordinates</label>
		<input
			type="text"
			class="input input-bordered"
			name="latitude"
			id="coordinates"
			placeholder="Enter the Coordinates here"
		/>

		<label for="images" class="label text-lg">Event Images</label>
		<input
			type="file"
			class="file-input file-input-bordered"
			accept="image/*"
			multiple
			name="files"
			id="images"
		/>

		<div class="flex justify-center pt-6">
			<button class="btn"> Submit </button>
		</div>
	</form>
</section>
