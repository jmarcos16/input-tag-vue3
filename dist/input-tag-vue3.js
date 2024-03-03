import { openBlock as p, createElementBlock as u, Fragment as _, renderList as m, createTextVNode as g, toDisplayString as v, createElementVNode as s, resolveComponent as T, createVNode as f, createApp as $ } from "vue";
const d = (n, t) => {
  const a = n.__vccOpts || n;
  for (const [o, e] of t)
    a[o] = e;
  return a;
}, y = {
  name: "InputTag",
  props: {
    modelvalue: {
      type: Array,
      required: !1,
      default: () => [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript" }
      ]
    }
  },
  setup(n, { emit: t }) {
    return {
      addTag: (e) => {
        e.key === "Enter" && (t("input", [...n.value, e.target.value]), e.target.value = "");
      },
      removeTag: (e) => {
        const c = [...n.value];
        c.splice(e, 1), t("input", c);
      }
    };
  }
}, k = { class: "input_group" }, I = ["onClick"];
function x(n, t, a, o, e, c) {
  return p(), u("ul", k, [
    (p(!0), u(_, null, m(a.modelvalue, (r, l) => (p(), u("li", { key: l }, [
      g(v(r.name) + " ", 1),
      s("button", {
        onClick: (E) => o.removeTag(l)
      }, "x", 8, I)
    ]))), 128)),
    s("li", null, [
      s("input", {
        type: "text",
        onKeyup: t[0] || (t[0] = (...r) => o.addTag && o.addTag(...r))
      }, null, 32)
    ])
  ]);
}
const h = /* @__PURE__ */ d(y, [["render", x], ["__scopeId", "data-v-e3e291bb"]]), V = {}, C = { id: "app" }, S = /* @__PURE__ */ s("h1", null, "Vue 3 Input Tag", -1);
function b(n, t, a, o, e, c) {
  const r = T("InputTag");
  return p(), u("div", C, [
    S,
    f(r)
  ]);
}
const A = /* @__PURE__ */ d(V, [["render", b]]), i = $(A);
i.component("InputTag", h);
i.mount("#app");
export {
  h as InputTag
};
