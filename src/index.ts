import { forEach } from "lodash-es";
import type { App } from "vue";
import * as components from "./components";

export const createVui = () => {
	return (app: App) => {
		forEach(components, (component, name) => {
			app.component(name, component);
		});
	};
};
