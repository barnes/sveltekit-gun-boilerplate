import{M as r,C as c}from"./vendor-c1c2ee31.js";import{r as u}from"./singletons-12a22614.js";const g=u,i=l;async function l(o,s){return g.goto(o,s,[])}const a=r("https://gun-manhattan.herokuapp.com/gun"),t=a.user().recall({sessionStorage:!0}),e=c("");t.get("alias").on(o=>e.set(o));a.on("auth",async o=>{const s=await t.get("alias");e.set(s);const n=await t.get("pub");console.log(`signed in as ${s}`),console.log(await t.get("pub")),i(`/${n}`)});export{e as a,i as g,t as u};