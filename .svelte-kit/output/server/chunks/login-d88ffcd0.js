import { c as create_ssr_component, a as add_attribute } from "./app-0e07153e.js";
import "./user-2fb8f506.js";
import "@sveltejs/kit/ssr";
import "gun";
import "gun/sea";
import "gun/axe";
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username;
  let password;
  return `<label for="${"username"}">Username</label>
<input name="${"username"}" minlength="${"3"}" maxlength="${"16"}"${add_attribute("value", username, 0)}>

<label for="${"password"}">Password</label>
<input name="${"password"}" type="${"password"}"${add_attribute("value", password, 0)}>

<button class="${"login"}">Login</button>
<button class="${"login"}">Sign Up</button>`;
});
export { Login as default };
