import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import prisma from '$lib/prisma';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const name = data.get('name') as string;
		const description = data.get('description') as string;
		const price = Number(data.get('price') as string);
		let date: string | Date = data.get('date') as string;
		const coords = data.get('coordinates') as string;

		if (!name || !description || !coords || !date) {
			return fail(400, { name, description, coords, date, price, missing: true });
		}

		if (isNaN(price) || price < 0) {
			return fail(400, { price, incorrect: true });
		}

		date = new Date(date);

		if (date.getTime() <= Date.now()) {
			return fail(400, { date, incorrect: true });
		}

		await prisma.event.create({
			data: {
				name,
				description,
				price,
				date,
				coordinates: coords
			}
		});

		return { success: true };
	}
} satisfies Actions;
