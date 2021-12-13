import { c as create_ssr_component } from "./app-0e07153e.js";
import "@sveltejs/kit/ssr";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Sveltekit / GUN Boilerplate</h1>
<p>This project will scaffold a simple CRUD app with user authentication using GUN as the backend.
</p>

<a href="${"/login"}">Login</a>`;
});
export { Routes as default };
