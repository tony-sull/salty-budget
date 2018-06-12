import { init } from 'sapper/runtime.js';
import { routes } from './manifest/client.js';
import App from './App.html';
import { SaltyBudgetStore } from './store';

init({
	target: document.querySelector('#sapper'),
	routes,
	App,
	store: data => new SaltyBudgetStore(data)
});