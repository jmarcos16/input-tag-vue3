import { openBlock as _, createElementBlock as a, Fragment as p, pushScopeId as l, popScopeId as d, createElementVNode as c } from "vue";
const u = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [r, s] of e)
    o[r] = s;
  return o;
}, f = {}, n = (t) => (l("data-v-7983f9eb"), t = t(), d(), t), m = /* @__PURE__ */ n(() => /* @__PURE__ */ c("h1", null, "Ola mundo", -1)), i = /* @__PURE__ */ n(() => /* @__PURE__ */ c("button", { class: "personal-button" }, " Click me ", -1));
function h(t, e) {
  return _(), a(p, null, [
    m,
    i
  ], 64);
}
const b = /* @__PURE__ */ u(f, [["render", h], ["__scopeId", "data-v-7983f9eb"]]);
export {
  b as InputTag
};
