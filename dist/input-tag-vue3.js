import { ref as c, watch as _, resolveDirective as T, openBlock as d, createElementBlock as i, normalizeClass as y, withModifiers as p, Fragment as w, renderList as V, createElementVNode as a, toDisplayString as b, withDirectives as k, withKeys as g, vModelText as x, resolveComponent as h, createVNode as I, createApp as M } from "vue";
const f = (l, t) => {
  const n = l.__vccOpts || l;
  for (const [e, u] of t)
    n[e] = u;
  return n;
}, A = {
  name: "InputTag",
  emits: ["update:modelValue"],
  props: {
    modelvalue: {
      type: Array,
      required: !1,
      default: () => [
        // { id: 1, name: 'HTML' },
        // { id: 2, name: 'CSS' },
        // { id: 3, name: 'JavaScript' }
      ]
    }
  },
  directives: {
    focus: {
      updated(l, t) {
        t.value && l.focus();
      }
    }
  },
  setup(l, { emit: t }) {
    const n = c(""), e = c(l.modelvalue), u = c(!1);
    return _(e, (o) => {
      t("update:modelValue", o);
    }), {
      addTag: (o) => {
        if (o.key === "Enter" || o.key === "Tab") {
          if (n.value.trim() === "")
            return;
          const s = [
            ...e.value,
            { id: e.value.length + 1, name: n.value }
          ];
          e.value = s, n.value = "", t("update:modelValue", e.value);
        }
      },
      removeTag: (o) => {
        const s = [...e.value];
        s.splice(o, 1), e.value = s, t("update:modelValue", e.value);
      },
      tag: n,
      selectedTags: e,
      focused: u
    };
  }
}, D = ["onMousedown"];
function B(l, t, n, e, u, v) {
  const r = T("focus");
  return d(), i("ul", {
    class: y([{ focused: e.focused }, "input_group"]),
    onMousedown: t[5] || (t[5] = p((o) => e.focused = !0, ["prevent"]))
  }, [
    (d(!0), i(w, null, V(e.selectedTags, (o, s) => (d(), i("li", {
      key: s,
      class: "tag_button"
    }, [
      a("span", null, b(o.name), 1),
      a("button", {
        onMousedown: p((z) => e.removeTag(s), ["prevent"])
      }, "x", 40, D)
    ]))), 128)),
    a("li", null, [
      k(a("input", {
        type: "text",
        "onUpdate:modelValue": t[0] || (t[0] = (o) => e.tag = o),
        placeholder: "Add a tag",
        onFocus: t[1] || (t[1] = (o) => e.focused = !0),
        onBlur: t[2] || (t[2] = (o) => e.focused = !1),
        onKeypress: t[3] || (t[3] = g((...o) => e.addTag && e.addTag(...o), ["enter"])),
        onKeydown: t[4] || (t[4] = g(p((...o) => e.addTag && e.addTag(...o), ["prevent"]), ["tab"]))
      }, null, 544), [
        [x, e.tag],
        [r, e.focused]
      ])
    ])
  ], 34);
}
const E = /* @__PURE__ */ f(A, [["render", B], ["__scopeId", "data-v-6e3e7500"]]), K = {}, C = { id: "app" }, F = /* @__PURE__ */ a("h1", null, "Vue 3 Input Tag", -1), N = /* @__PURE__ */ a("div", { class: "link_buttons" }, [
  /* @__PURE__ */ a("a", {
    href: "http//github.com/alexiscolin/vue3-input-tag",
    target: "_blank"
  }, " Repository "),
  /* @__PURE__ */ a("a", {
    href: "https://alexiscolin.github.io/vue3-input-tag/",
    target: "_blank"
  }, "Documentation")
], -1);
function $(l, t, n, e, u, v) {
  const r = h("InputTag");
  return d(), i("div", C, [
    F,
    a("div", null, [
      I(r)
    ]),
    N
  ]);
}
const q = /* @__PURE__ */ f(K, [["render", $]]), m = M(q);
m.component("InputTag", E);
m.mount("#app");
export {
  E as InputTag
};
