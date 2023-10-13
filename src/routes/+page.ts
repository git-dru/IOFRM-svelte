export interface Payload {
	email: string;
	password: string;
	fullName?: string;
}

export async function _submitToHasura(payload: Payload): Promise<any> { 
	try {
		const response: Response = await fetch('/api/endpoint', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Failed to submit:', error);
		throw error; // re-throwing error so that the Svelte component can handle it if needed
	}
}

export const prerender = true;
