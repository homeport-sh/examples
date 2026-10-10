import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ url }) => ({
	bun: Bun.version,
	origin: url.origin,
	at: new Date().toISOString()
});

export const actions: Actions = {
	greet: async ({ request }) => {
		const name = String((await request.formData()).get('name') ?? '').trim();
		if (!name) return fail(400, { error: 'Say a name.' });
		return { greeting: `Hello, ${name}.` };
	}
};
