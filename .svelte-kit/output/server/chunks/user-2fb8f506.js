import GUN from "gun";
import "gun/sea";
import "gun/axe";
import { n as noop, s as safe_not_equal } from "./app-0e07153e.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const db = GUN("https://gun-manhattan.herokuapp.com/gun");
const user = db.user().recall({ sessionStorage: true });
const username = writable("");
user.get("alias").on((v) => username.set(v));
db.on("auth", async (event) => {
  const alias = await user.get("alias");
  username.set(alias);
  const pub = await user.get("pub");
  console.log(`signed in as ${alias}`);
  console.log(await user.get("pub"));
  goto(`/${pub}`);
});
export { username as u };
