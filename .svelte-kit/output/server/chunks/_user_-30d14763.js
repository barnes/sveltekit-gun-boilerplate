import { c as create_ssr_component, a as add_attribute, b as each, e as escape, d as subscribe, v as validate_component } from "./app-0e07153e.js";
import { u as username } from "./user-2fb8f506.js";
import "@sveltejs/kit/ssr";
import "gun";
import "gun/sea";
import "gun/axe";
const Logout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="${"logout"}">Logout</button>`;
});
const TaskForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let task;
  return `<input type="${"text"}"${add_attribute("value", task, 0)}>
<button>Add</button>`;
});
const TaskListNew = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tasks = [];
  let editTaskContent = "";
  return `<h1>TaskList</h1>
${each(tasks, (task, i) => `${task.edit ? `<input type="${"text"}"${add_attribute("value", editTaskContent, 0)}>
        <button>X</button>
        <button>save</button>
        <br>
        <br>` : `<p style="${"cursor:pointer"}">${escape(task.id)} : ${escape(task.data)} : ${escape(task.edit)}</p>`}`)}`;
});
const U5Buseru5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $username, $$unsubscribe_username;
  $$unsubscribe_username = subscribe(username, (value) => $username = value);
  $$unsubscribe_username();
  return `${validate_component(Logout, "Logout").$$render($$result, {}, {}, {})}
<h1>${escape($username)}</h1>

${validate_component(TaskForm, "TaskForm").$$render($$result, {}, {}, {})}
${validate_component(TaskListNew, "TaskListNew").$$render($$result, {}, {}, {})}`;
});
export { U5Buseru5D as default };
