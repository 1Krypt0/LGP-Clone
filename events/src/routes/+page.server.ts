import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const name = data.get('name') as string;
		const description = data.get('description') as string;
		const price = Number(data.get('price') as string);
		const date = new Date(data.get('date') as string);
		const coords = data.get('coordinates') as string;
		// const files = data.getAll('files') as File[];

		if (name === '') {
			return fail(400, { name, missing: true });
		}

		if (description === '') {
			return fail(400, { description, missing: true });
		}

		if (isNaN(price) || price < 0) {
			return fail(400, { price, incorrect: true });
		}

		if (date.getTime() <= Date.now()) {
			return fail(400, { date, incorrect: true });
		}

		if (coords === '') {
			return fail(400, { coords, missing: true });
		}

		// TODO: Process the files and save them somewhere
	}
} satisfies Actions;
