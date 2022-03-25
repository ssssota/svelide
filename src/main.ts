import App from './App.svelte';

const app = new App({
	target: document.getElementById('app'),
	props: {
		listView: location.hash === '#list'
	}
});

export default app;
