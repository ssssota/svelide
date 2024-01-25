import { createRoot } from 'svelte';
import App from './App.svelte';

const app = createRoot(App, {
	target: document.getElementById('app')!,
	props: {
		listView: location.hash === '#list'
	}
});

export default app;
