import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_attribute_value, i as escape_object, e as escape, j as compute_slots, k as createEventDispatcher, v as validate_component, m as missing_component, l as add_attribute, o as null_to_empty, p as each } from "../../chunks/ssr.js";
const propToClass = {
  size: (pf, val) => `${pf}-${val}`,
  block: (pf, _val) => `${pf}-block`,
  type: (pf, val) => `${pf}-${val}`,
  outline: (pf, val) => `${pf}-${val}-outline`,
  col: (pf, val) => `${pf}-${val}`,
  sm: (_pf, val) => `sm-${val}`,
  md: (_pf, val) => `md-${val}`,
  lg: (_pf, val) => `lg-${val}`
};
function omit(obj, properties) {
  return Object.fromEntries(Object.entries(obj).filter(([key, _val]) => !properties.includes(key)));
}
function computeClasses(elPrefix, props) {
  return Object.entries(props).filter(([_prop, val]) => val).map(([prop, val]) => propToClass[prop](elPrefix, val)).join(" ");
}
function getDomAttributes({ props, classes, toOmit = [] }) {
  return {
    ...omit(props, toOmit),
    class: classes
  };
}
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "type",
    "size",
    "block",
    "disabled",
    "outline",
    "nativeType",
    "isLink",
    "href",
    "external"
  ]);
  var _a;
  let { type = null } = $$props;
  let { size = "default" } = $$props;
  let { block = false } = $$props;
  let { disabled = false } = $$props;
  let { outline = null } = $$props;
  let { nativeType = null } = $$props;
  let { isLink = false } = $$props;
  let { href = null } = $$props;
  let { external = false } = $$props;
  let attr;
  let classes;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0) $$bindings.block(block);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0) $$bindings.outline(outline);
  if ($$props.nativeType === void 0 && $$bindings.nativeType && nativeType !== void 0) $$bindings.nativeType(nativeType);
  if ($$props.isLink === void 0 && $$bindings.isLink && isLink !== void 0) $$bindings.isLink(isLink);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.external === void 0 && $$bindings.external && external !== void 0) $$bindings.external(external);
  classes = `paper-btn ${(_a = $$restProps.class) !== null && _a !== void 0 ? _a : ""} ${computeClasses("btn", { size, block, type, outline })}`;
  {
    {
      attr = getDomAttributes({ props: $$restProps, classes });
    }
  }
  return `${isLink || href ? `<a${spread(
    [
      { role: "button" },
      {
        href: escape_attribute_value(href ?? "javascript:void(0);")
      },
      {
        target: escape_attribute_value(external ? "_blank" : null)
      },
      escape_object(attr)
    ],
    { classes: disabled ? "disabled" : "" }
  )}>${slots.default ? slots.default({}) : ``}</a>` : `<button${spread(
    [
      escape_object(attr),
      { type: escape_attribute_value(nativeType) },
      { disabled: disabled || null }
    ],
    { classes: disabled ? "disabled" : "" }
  )}>${slots.default ? slots.default({}) : ``}</button>`}`;
});
const css$6 = {
  code: "button.svelte-9vtsch{float:right;border:0;padding:0;background:none;box-shadow:none;transform:none}button.svelte-9vtsch:hover,button.svelte-9vtsch:focus{transform:none;box-shadow:none;border:0}",
  map: `{"version":3,"file":"CloseButton.svelte","sources":["CloseButton.svelte"],"sourcesContent":["<button {...$$restProps}\\n        class=\\"{$$restProps.class ?? ''} btn-close\\"\\n        aria-label={ariaLabel}\\n        on:click>\\n  X\\n</button>\\n\\n<script >export let ariaLabel = 'close';\\n<\/script>\\n\\n<style >button {\\n  float: right;\\n  border: 0;\\n  padding: 0;\\n  background: none;\\n  box-shadow: none;\\n  transform: none;\\n}\\nbutton:hover, button:focus {\\n  transform: none;\\n  box-shadow: none;\\n  border: 0;\\n}</style>\\n"],"names":[],"mappings":"AAUQ,oBAAO,CACb,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IACb,CACA,oBAAM,MAAM,CAAE,oBAAM,MAAO,CACzB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,CACV"}`
};
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ariaLabel"]);
  let { ariaLabel = "close" } = $$props;
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  $$result.css.add(css$6);
  return `<button${spread(
    [
      escape_object($$restProps),
      {
        class: escape($$restProps.class ?? "", true) + " btn-close"
      },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      }
    ],
    { classes: "svelte-9vtsch" }
  )}>X
</button>`;
});
const css$5 = {
  code: ".collapsible.svelte-12pm6a>button.svelte-12pm6a{border:2px solid var(--primary)}.collapsible-body.open.svelte-12pm6a.svelte-12pm6a{margin:0;max-height:960px;opacity:1;padding:0}.paper-navbar li a.paper-btn{display:initial}",
  map: '{"version":3,"file":"Navbar.svelte","sources":["Navbar.svelte"],"sourcesContent":["<nav {...$$restProps}\\n     class={`${$$restProps.class ?? \'\'} paper-navbar`}\\n     class:border class:fixed\\n     class:split-nav={split}>\\n  {#if $$slots.brand}\\n    <div class=\\"nav-brand\\">\\n      <slot name=\\"brand\\" />\\n    </div>\\n  {/if}\\n  <div class=\\"collapsible\\">\\n    <button on:click={collapse}>☰</button>\\n    <div class=\\"collapsible-body\\" class:open>\\n      <slot />\\n    </div>\\n  </div>\\n</nav>\\n\\n<script >export let border = true;\\nexport let fixed = false;\\nexport let split = true;\\nlet open = false;\\nfunction collapse() {\\n    open = !open;\\n}\\n<\/script>\\n\\n<style >/* Papercss removes border of buttons in .collapsible */\\n.collapsible > button {\\n  border: 2px solid var(--primary);\\n}\\n.collapsible-body.open {\\n  margin: 0;\\n  max-height: 960px;\\n  opacity: 1;\\n  padding: 0;\\n}\\n\\n:global(.paper-navbar li a.paper-btn) {\\n  display: initial;\\n}</style>\\n"],"names":[],"mappings":"AA2BA,0BAAY,CAAG,oBAAO,CACpB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,SAAS,CACjC,CACA,iBAAiB,iCAAM,CACrB,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,CACX,CAEQ,4BAA8B,CACpC,OAAO,CAAE,OACX"}'
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["border", "fixed", "split"]);
  let $$slots = compute_slots(slots);
  let { border = true } = $$props;
  let { fixed = false } = $$props;
  let { split = true } = $$props;
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0) $$bindings.fixed(fixed);
  if ($$props.split === void 0 && $$bindings.split && split !== void 0) $$bindings.split(split);
  $$result.css.add(css$5);
  return `<nav${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(`${$$restProps.class ?? ""} paper-navbar`)
      }
    ],
    {
      classes: (border ? "border" : "") + " " + (fixed ? "fixed" : "") + " " + (split ? "split-nav" : "") + " svelte-12pm6a"
    }
  )}>${$$slots.brand ? `<div class="nav-brand">${slots.brand ? slots.brand({}) : ``}</div>` : ``} <div class="collapsible svelte-12pm6a"><button class="svelte-12pm6a" data-svelte-h="svelte-an0mwf">☰</button> <div class="${["collapsible-body svelte-12pm6a", ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div></div> </nav>`;
});
const css$4 = {
  code: ".modal.active.svelte-1fqj53.svelte-1fqj53{opacity:1;visibility:visible}.modal.active.svelte-1fqj53 .modal-body.svelte-1fqj53{top:50%}",
  map: `{"version":3,"file":"Modal.svelte","sources":["Modal.svelte"],"sourcesContent":["<svelte:window on:keydown={handleKeydown} />\\n\\n<div class=\\"modal\\"\\n     class:active>\\n  <div {...$$restProps}\\n       class=\\"{$$restProps.class ?? ''} modal-body\\">\\n    <CloseButton on:click={close} />\\n    {#if title}\\n      <h4 class=\\"modal-title\\">{title}</h4>\\n    {/if}\\n    {#if subTitle}\\n      <h5 class=\\"modal-subtitle\\">{subTitle}</h5>\\n    {/if}\\n    <p class=\\"modal-text\\">\\n      {#if content}\\n        {content}\\n      {:else if component}\\n        <svelte:component this={component} />\\n      {:else}\\n        <slot />\\n      {/if}\\n    </p>\\n    <footer>\\n      {#if $$slots.footer}\\n        <slot name=\\"footer\\" />\\n      {/if}\\n      <Button on:click={close}>\\n        {closeBtnText}\\n      </Button>\\n    </footer>\\n  </div>\\n</div>\\n\\n<script >import { createEventDispatcher, SvelteComponent } from 'svelte';\\nimport Button from '../Button.svelte';\\nimport CloseButton from '../CloseButton.svelte';\\nexport let active = false;\\nexport let title = '';\\nexport let subTitle = '';\\nexport let content = '';\\nexport let component = null;\\nexport let closeBtnText = 'Close';\\nconst dispatch = createEventDispatcher();\\nfunction close() {\\n    active = false;\\n}\\nfunction handleKeydown({ key }) {\\n    if (key === 'Escape')\\n        close();\\n}\\n$: if (!active) {\\n    dispatch('close');\\n}\\n<\/script>\\n\\n<style >.modal.active {\\n  opacity: 1;\\n  visibility: visible;\\n}\\n.modal.active .modal-body {\\n  top: 50%;\\n}</style>\\n"],"names":[],"mappings":"AAuDQ,MAAM,mCAAQ,CACpB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OACd,CACA,MAAM,qBAAO,CAAC,yBAAY,CACxB,GAAG,CAAE,GACP"}`
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["active", "title", "subTitle", "content", "component", "closeBtnText"]);
  let $$slots = compute_slots(slots);
  let { active = false } = $$props;
  let { title = "" } = $$props;
  let { subTitle = "" } = $$props;
  let { content = "" } = $$props;
  let { component = null } = $$props;
  let { closeBtnText = "Close" } = $$props;
  const dispatch = createEventDispatcher();
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0) $$bindings.subTitle(subTitle);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0) $$bindings.content(content);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0) $$bindings.component(component);
  if ($$props.closeBtnText === void 0 && $$bindings.closeBtnText && closeBtnText !== void 0) $$bindings.closeBtnText(closeBtnText);
  $$result.css.add(css$4);
  {
    if (!active) {
      dispatch("close");
    }
  }
  return ` <div class="${["modal svelte-1fqj53", active ? "active" : ""].join(" ").trim()}"><div${spread(
    [
      escape_object($$restProps),
      {
        class: escape($$restProps.class ?? "", true) + " modal-body"
      }
    ],
    { classes: "svelte-1fqj53" }
  )}>${validate_component(CloseButton, "CloseButton").$$render($$result, {}, {}, {})} ${title ? `<h4 class="modal-title">${escape(title)}</h4>` : ``} ${subTitle ? `<h5 class="modal-subtitle">${escape(subTitle)}</h5>` : ``} <p class="modal-text">${content ? `${escape(content)}` : `${component ? `${validate_component(component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${slots.default ? slots.default({}) : ``}`}`}</p> <footer>${$$slots.footer ? `${slots.footer ? slots.footer({}) : ``}` : ``} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(closeBtnText)}`;
    }
  })}</footer></div> </div>`;
});
const TRANSITION_TIME = 235;
function open$1(props) {
  const modal = new Modal({
    target: document.body,
    props
  });
  setTimeout(modal.$set.bind(modal, { active: true }), 1);
  modal.close = () => {
    modal.$set({ active: false });
    setTimeout(modal.$destroy, TRANSITION_TIME);
  };
  return modal;
}
Modal.open = open$1;
const css$3 = {
  code: "label.svelte-1g63nco{width:100%}",
  map: `{"version":3,"file":"Input.svelte","sources":["Input.svelte"],"sourcesContent":["{#if type === 'textarea'}\\n  <textarea {...attr}\\n            bind:value\\n            class:no-resize={noResize}\\n            on:input={onInput}\\n            on:focus\\n            on:blur\\n            on:change></textarea>\\n{:else if label}\\n  <label>\\n    {label}\\n    <input {...attr}\\n           bind:value\\n           class:border-danger={!isValid && value}\\n           class:border-success={isValid && value && valid}\\n           on:input={onInput}\\n           on:focus\\n           on:blur\\n           on:change />\\n  </label>\\n{:else}\\n  <input {...attr}\\n         bind:value\\n         class:border-danger={!isValid && value}\\n         class:border-success={isValid && value && valid}\\n         on:input={onInput}\\n         on:focus\\n         on:blur\\n         on:change />\\n{/if}\\n\\n<script >var _a;\\nimport { createEventDispatcher } from 'svelte';\\nimport { computeClasses, getDomAttributes } from '../../utils';\\n;\\n;\\nexport let label = '';\\nexport let value = '';\\nexport let block = false;\\nexport let type = 'text';\\nexport let valid = null;\\nexport let noResize = false;\\nconst dispatch = createEventDispatcher();\\nfunction onInput({ target }) {\\n    dispatch('input', target.value);\\n}\\nlet isValid = true;\\n$: if (valid) {\\n    isValid = valid(value);\\n}\\nlet attr;\\n$: {\\n    attr = getDomAttributes({\\n        props: $$props,\\n        classes,\\n        toOmit: ['block', 'value', 'valid', 'noResize']\\n    });\\n}\\nlet classes;\\n$: classes = \`\${(_a = $$restProps.class) !== null && _a !== void 0 ? _a : ''} \${computeClasses('input', { block })}\`;\\n<\/script>\\n\\n<style>\\nlabel {\\n  width: 100%;\\n}\\n</style>\\n"],"names":[],"mappings":"AA+DA,oBAAM,CACJ,KAAK,CAAE,IACT"}`
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["label", "value", "block", "type", "valid", "noResize"]);
  var _a;
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let { block = false } = $$props;
  let { type = "text" } = $$props;
  let { valid = null } = $$props;
  let { noResize = false } = $$props;
  createEventDispatcher();
  let isValid = true;
  let attr;
  let classes;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0) $$bindings.block(block);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0) $$bindings.valid(valid);
  if ($$props.noResize === void 0 && $$bindings.noResize && noResize !== void 0) $$bindings.noResize(noResize);
  $$result.css.add(css$3);
  {
    if (valid) {
      isValid = valid(value);
    }
  }
  classes = `${(_a = $$restProps.class) !== null && _a !== void 0 ? _a : ""} ${computeClasses("input", { block })}`;
  {
    {
      attr = getDomAttributes({
        props: $$props,
        classes,
        toOmit: ["block", "value", "valid", "noResize"]
      });
    }
  }
  return `${type === "textarea" ? `<textarea${spread([escape_object(attr)], { classes: noResize ? "no-resize" : "" })}>${escape(value || "")}</textarea>` : `${label ? `<label class="svelte-1g63nco">${escape(label)} <input${spread([escape_object(attr)], {
    classes: (!isValid && value ? "border-danger" : "") + " " + (isValid && value && valid ? "border-success" : "")
  })}${add_attribute("value", value, 0)}></label>` : `<input${spread([escape_object(attr)], {
    classes: (!isValid && value ? "border-danger" : "") + " " + (isValid && value && valid ? "border-success" : "")
  })}${add_attribute("value", value, 0)}>`}`}`;
});
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["label", "value"]);
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let selectElement;
  createEventDispatcher();
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  return `${label ? `<label>${escape(label)} <select${spread([escape_object($$restProps)], {})}${add_attribute("this", selectElement, 0)}>${slots.default ? slots.default({}) : ``}</select></label>` : `<select${spread([escape_object($$restProps)], {})}${add_attribute("this", selectElement, 0)}>${slots.default ? slots.default({}) : ``}</select>`}`;
});
const css$2 = {
  code: "form.svelte-1omlscs label{margin-block-end:0}form.svelte-1omlscs input{margin-block-start:0.5rem}",
  map: `{"version":3,"file":"Form.svelte","sources":["Form.svelte"],"sourcesContent":["<form {...$$restProps}\\n      class=\\"{$$restProps.class ?? ''} form-group\\"\\n      on:submit|preventDefault\\n      on:click\\n      on:keydown\\n      on:mouseover\\n      on:mouseenter\\n      on:mouseleave\\n      on:focus>\\n  <slot />\\n</form>\\n\\n<style >form {\\n  /* NOTE: set back PaperCSS margins for our structure\\n    <label> being parent of <input> instead of a sibling */\\n}\\nform :global(label) {\\n  margin-block-end: 0;\\n}\\nform :global(input) {\\n  margin-block-start: 0.5rem;\\n}</style>\\n"],"names":[],"mappings":"AAgBA,mBAAI,CAAS,KAAO,CAClB,gBAAgB,CAAE,CACpB,CACA,mBAAI,CAAS,KAAO,CAClB,kBAAkB,CAAE,MACtB"}`
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  $$result.css.add(css$2);
  return `<form${spread(
    [
      escape_object($$restProps),
      {
        class: escape($$restProps.class ?? "", true) + " form-group"
      }
    ],
    { classes: "svelte-1omlscs" }
  )}>${slots.default ? slots.default({}) : ``} </form>`;
});
const css$1 = {
  code: ".number-input-wrapper{display:flex;gap:0.25rem}.number-input-wrapper .paper-btn{align-self:flex-end;padding:0.5rem}",
  map: `{"version":3,"file":"NumberInput.svelte","sources":["NumberInput.svelte"],"sourcesContent":["{#if label}\\n  <div class=\\"number-input-wrapper\\">\\n    {#if controls}\\n      <DecrementButton\\n        clickHandler={() => value -= step}\\n        type={controlsType}\\n        disabled={!canDecrement}\\n      />\\n    {/if}\\n    <label>\\n      {label}\\n      <input {...attr}\\n             inputmode=\\"numeric\\"\\n             bind:value={formattedValue}\\n             class:border-danger={!isValid && value}\\n             class:border-success={isValid && value && valid}\\n             aria-valuemin={min}\\n             aria-valuemax={max}\\n             aria-valuenow={value}\\n             on:input={onInput}\\n             on:focus\\n             on:blur\\n             on:change />\\n    </label>\\n    {#if controls}\\n      <IncrementButton\\n        clickHandler={() => value += step}\\n        type={controlsType}\\n        disabled={!canIncrement}\\n      />\\n    {/if}\\n  </div>\\n{:else}\\n  <div class=\\"number-input-wrapper\\">\\n    {#if controls}\\n      <DecrementButton\\n        clickHandler={() => value -= step}\\n        type={controlsType}\\n        disabled={!canDecrement}\\n      />\\n    {/if}\\n    <input {...attr}\\n           inputmode=\\"numeric\\"\\n           bind:value={formattedValue}\\n           class:border-danger={!isValid && value}\\n           class:border-success={isValid && value && valid}\\n           aria-valuemin={min}\\n           aria-valuemax={max}\\n           aria-valuenow={value}\\n           on:input={onInput}\\n           on:focus\\n           on:blur\\n           on:change />\\n    {#if controls}\\n      <IncrementButton\\n        clickHandler={() => value += step}\\n        type={controlsType}\\n        disabled={!canIncrement}\\n      />\\n    {/if}\\n  </div>\\n{/if}\\n\\n<script >var _a;\\nimport { createEventDispatcher } from 'svelte';\\nimport { DecrementButton, IncrementButton } from './';\\nimport { computeClasses, getDomAttributes } from '../../../utils';\\n;\\nexport let label = '';\\nexport let value = null;\\nexport let step = 1;\\nexport let min = null;\\nexport let max = null;\\nexport let disabled = false;\\nexport let controls = true;\\nexport let controlsType = 'secondary';\\nexport let block = false;\\nexport let valid = null;\\nexport let prefix = '';\\nexport let suffix = '';\\nexport let format = null;\\nexport let formatOptions = undefined;\\nconst dispatch = createEventDispatcher();\\nfunction onInput({ target }) {\\n    dispatch('input', target.value);\\n}\\nlet isValid = true;\\n$: if (valid) {\\n    isValid = valid(value);\\n}\\nlet attr;\\n$: {\\n    attr = getDomAttributes({\\n        props: $$props,\\n        classes,\\n        toOmit: ['block', 'value', 'valid', 'noResize', 'min', 'max']\\n    });\\n}\\nlet classes;\\n$: classes = \`\${(_a = $$restProps.class) !== null && _a !== void 0 ? _a : ''} \${computeClasses('input', { block })}\`;\\n$: canDecrement = !disabled && (min !== null ? value - step >= min : true);\\n$: canIncrement = !disabled && (max !== null ? value + step <= max : true);\\nlet formattedValue = '';\\n$: if (value !== null) {\\n    formattedValue = String(value);\\n    if (format) {\\n        if (typeof format === 'string') {\\n            formattedValue = new Intl.NumberFormat(format === 'locale' ? undefined : format, formatOptions).format(value);\\n        }\\n        else {\\n            formattedValue = format(value);\\n        }\\n    }\\n    formattedValue = [\\n        prefix,\\n        formattedValue,\\n        suffix,\\n    ].join(' ').trim();\\n}\\n<\/script>\\n\\n<style >:global(.number-input-wrapper) {\\n  display: flex;\\n  gap: 0.25rem;\\n}\\n:global(.number-input-wrapper) :global(.paper-btn) {\\n  align-self: flex-end;\\n  padding: 0.5rem;\\n}</style>\\n"],"names":[],"mappings":"AAyHgB,qBAAuB,CACrC,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,OACP,CACQ,qBAAsB,CAAS,UAAY,CACjD,UAAU,CAAE,QAAQ,CACpB,OAAO,CAAE,MACX"}`
};
const NumberInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canDecrement;
  let canIncrement;
  let $$restProps = compute_rest_props($$props, [
    "label",
    "value",
    "step",
    "min",
    "max",
    "disabled",
    "controls",
    "controlsType",
    "block",
    "valid",
    "prefix",
    "suffix",
    "format",
    "formatOptions"
  ]);
  var _a;
  let { label = "" } = $$props;
  let { value = null } = $$props;
  let { step = 1 } = $$props;
  let { min = null } = $$props;
  let { max = null } = $$props;
  let { disabled = false } = $$props;
  let { controls = true } = $$props;
  let { controlsType = "secondary" } = $$props;
  let { block = false } = $$props;
  let { valid = null } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { format = null } = $$props;
  let { formatOptions = void 0 } = $$props;
  createEventDispatcher();
  let isValid = true;
  let attr;
  let classes;
  let formattedValue = "";
  if ($$props.label === void 0 && $$bindings.label && label !== void 0) $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0) $$bindings.step(step);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0) $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0) $$bindings.max(max);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0) $$bindings.controls(controls);
  if ($$props.controlsType === void 0 && $$bindings.controlsType && controlsType !== void 0) $$bindings.controlsType(controlsType);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0) $$bindings.block(block);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0) $$bindings.valid(valid);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0) $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0) $$bindings.suffix(suffix);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0) $$bindings.format(format);
  if ($$props.formatOptions === void 0 && $$bindings.formatOptions && formatOptions !== void 0) $$bindings.formatOptions(formatOptions);
  $$result.css.add(css$1);
  {
    if (valid) {
      isValid = valid(value);
    }
  }
  classes = `${(_a = $$restProps.class) !== null && _a !== void 0 ? _a : ""} ${computeClasses("input", { block })}`;
  {
    {
      attr = getDomAttributes({
        props: $$props,
        classes,
        toOmit: ["block", "value", "valid", "noResize", "min", "max"]
      });
    }
  }
  canDecrement = !disabled && (min !== null ? value - step >= min : true);
  canIncrement = !disabled && (max !== null ? value + step <= max : true);
  {
    if (value !== null) {
      formattedValue = String(value);
      if (format) {
        if (typeof format === "string") {
          formattedValue = new Intl.NumberFormat(format === "locale" ? void 0 : format, formatOptions).format(value);
        } else {
          formattedValue = format(value);
        }
      }
      formattedValue = [prefix, formattedValue, suffix].join(" ").trim();
    }
  }
  return `${label ? `<div class="number-input-wrapper">${controls ? `${validate_component(DecrementButton, "DecrementButton").$$render(
    $$result,
    {
      clickHandler: () => value -= step,
      type: controlsType,
      disabled: !canDecrement
    },
    {},
    {}
  )}` : ``} <label>${escape(label)} <input${spread(
    [
      escape_object(attr),
      { inputmode: "numeric" },
      {
        "aria-valuemin": escape_attribute_value(min)
      },
      {
        "aria-valuemax": escape_attribute_value(max)
      },
      {
        "aria-valuenow": escape_attribute_value(value)
      }
    ],
    {
      classes: (!isValid && value ? "border-danger" : "") + " " + (isValid && value && valid ? "border-success" : "")
    }
  )}${add_attribute("value", formattedValue, 0)}></label> ${controls ? `${validate_component(IncrementButton, "IncrementButton").$$render(
    $$result,
    {
      clickHandler: () => value += step,
      type: controlsType,
      disabled: !canIncrement
    },
    {},
    {}
  )}` : ``}</div>` : `<div class="number-input-wrapper">${controls ? `${validate_component(DecrementButton, "DecrementButton").$$render(
    $$result,
    {
      clickHandler: () => value -= step,
      type: controlsType,
      disabled: !canDecrement
    },
    {},
    {}
  )}` : ``} <input${spread(
    [
      escape_object(attr),
      { inputmode: "numeric" },
      {
        "aria-valuemin": escape_attribute_value(min)
      },
      {
        "aria-valuemax": escape_attribute_value(max)
      },
      {
        "aria-valuenow": escape_attribute_value(value)
      }
    ],
    {
      classes: (!isValid && value ? "border-danger" : "") + " " + (isValid && value && valid ? "border-success" : "")
    }
  )}${add_attribute("value", formattedValue, 0)}> ${controls ? `${validate_component(IncrementButton, "IncrementButton").$$render(
    $$result,
    {
      clickHandler: () => value += step,
      type: controlsType,
      disabled: !canIncrement
    },
    {},
    {}
  )}` : ``}</div>`}`;
});
const DecrementButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["clickHandler", "type"]);
  let { clickHandler } = $$props;
  let { type } = $$props;
  if ($$props.clickHandler === void 0 && $$bindings.clickHandler && clickHandler !== void 0) $$bindings.clickHandler(clickHandler);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  return `${validate_component(Button, "Button").$$render($$result, Object.assign({}, $$restProps, { type }), {}, {
    default: () => {
      return `-`;
    }
  })}`;
});
const IncrementButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["clickHandler", "type"]);
  let { clickHandler } = $$props;
  let { type } = $$props;
  if ($$props.clickHandler === void 0 && $$bindings.clickHandler && clickHandler !== void 0) $$bindings.clickHandler(clickHandler);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  return `${validate_component(Button, "Button").$$render($$result, Object.assign({}, $$restProps, { type }), {}, {
    default: () => {
      return `+`;
    }
  })}`;
});
const css = {
  code: "div.svelte-18aojlw{width:250px}",
  map: `{"version":3,"file":"Toast.svelte","sources":["Toast.svelte"],"sourcesContent":["{#if active}\\n  <div class={classes}\\n       bind:this={toastElement}\\n       on:mouseenter={pause}\\n       on:mouseleave={dismiss}\\n       in:fly={{ y: position.includes('top') ? -100 : 100 }}\\n       out:fade={{ duration: TRANSITION_OUT_DURATION }}\\n       role=\\"alert\\">\\n    {@html message}\\n    {#if dismissible||indefinite}\\n      <CloseButton ariaLabel={closeAriaLabel}\\n                   on:click={close} />\\n    {/if}\\n  </div>\\n{/if}\\n\\n<script >import { onMount } from 'svelte';\\nimport { fly, fade } from 'svelte/transition';\\n;\\n;\\nimport { computeClasses } from '../../utils';\\nimport ToastContainer, { containerClass } from './ToastContainer.svelte';\\nimport CloseButton from '../CloseButton.svelte';\\nexport let message;\\nexport let type = 'primary';\\nexport let duration = 2000;\\nexport let position = 'top-right';\\nexport let pauseOnHover = false;\\nexport let dismissible = false;\\nexport let indefinite = false;\\nexport let closeAriaLabel = 'close';\\nexport let onClose = null;\\nconst TRANSITION_OUT_DURATION = 300;\\nlet active = true;\\nlet toastElement;\\nlet timeoutId;\\n$: containerSelector = \`.\${containerClass}.\${position}\`;\\n$: classes = \`alert margin-small shadow \${computeClasses('alert', { type })}\`;\\nonMount(() => {\\n    insert();\\n    if (!indefinite) {\\n        timeoutId = window.setTimeout(close, duration);\\n    }\\n    if (timeoutId) {\\n        return () => clearTimeout(timeoutId);\\n    }\\n});\\nfunction pause() {\\n    if (!pauseOnHover || indefinite)\\n        return;\\n    clearTimeout(timeoutId);\\n}\\nfunction dismiss() {\\n    if (!pauseOnHover || indefinite)\\n        return;\\n    close();\\n}\\nfunction close() {\\n    active = false;\\n    removeContainer();\\n    onClose === null || onClose === void 0 ? void 0 : onClose();\\n}\\nfunction getContainer() {\\n    return document.querySelector(containerSelector);\\n}\\nfunction setupContainer() {\\n    new ToastContainer({\\n        target: document.body,\\n        props: { position },\\n    });\\n    return getContainer();\\n}\\nfunction insert() {\\n    const container = getContainer() || setupContainer();\\n    container.insertAdjacentElement('afterbegin', toastElement);\\n}\\nfunction removeContainer() {\\n    const container = getContainer();\\n    setTimeout(() => {\\n        if (container.children.length === 1) {\\n            container.remove();\\n        }\\n    }, TRANSITION_OUT_DURATION);\\n}\\n<\/script>\\n\\n<style>\\ndiv {\\n  width: 250px;\\n}\\n</style>\\n"],"names":[],"mappings":"AAuFA,kBAAI,CACF,KAAK,CAAE,KACT"}`
};
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let { message } = $$props;
  let { type = "primary" } = $$props;
  let { duration = 2e3 } = $$props;
  let { position = "top-right" } = $$props;
  let { pauseOnHover = false } = $$props;
  let { dismissible = false } = $$props;
  let { indefinite = false } = $$props;
  let { closeAriaLabel = "close" } = $$props;
  let { onClose = null } = $$props;
  let toastElement;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0) $$bindings.message(message);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0) $$bindings.position(position);
  if ($$props.pauseOnHover === void 0 && $$bindings.pauseOnHover && pauseOnHover !== void 0) $$bindings.pauseOnHover(pauseOnHover);
  if ($$props.dismissible === void 0 && $$bindings.dismissible && dismissible !== void 0) $$bindings.dismissible(dismissible);
  if ($$props.indefinite === void 0 && $$bindings.indefinite && indefinite !== void 0) $$bindings.indefinite(indefinite);
  if ($$props.closeAriaLabel === void 0 && $$bindings.closeAriaLabel && closeAriaLabel !== void 0) $$bindings.closeAriaLabel(closeAriaLabel);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0) $$bindings.onClose(onClose);
  $$result.css.add(css);
  classes = `alert margin-small shadow ${computeClasses("alert", { type })}`;
  return `${`<div class="${escape(null_to_empty(classes), true) + " svelte-18aojlw"}" role="alert"${add_attribute("this", toastElement, 0)}><!-- HTML_TAG_START -->${message}<!-- HTML_TAG_END --> ${dismissible || indefinite ? `${validate_component(CloseButton, "CloseButton").$$render($$result, { ariaLabel: closeAriaLabel }, {}, {})}` : ``}</div>`}`;
});
function open(props) {
  if (typeof props === "string")
    props = { message: props };
  new Toast({
    target: document.body,
    props,
    intro: true
  });
}
function openType(type) {
  return (options) => {
    const props = {
      type,
      message: ""
    };
    if (typeof options === "string")
      props.message = options;
    else
      Object.assign(props, options);
    new Toast({
      target: document.body,
      props,
      intro: true
    });
  };
}
const info = openType("secondary");
const success = openType("success");
const warning = openType("warning");
const warn = warning;
const danger = openType("danger");
const error = danger;
Object.assign(Toast, {
  open,
  info,
  success,
  warning,
  warn,
  error,
  danger
});
const CURRENCIES = [
  "AFN",
  "AED",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTN",
  "BWP",
  "BYN",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "FOK",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "IMP",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KID",
  "KMF",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRU",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLL",
  "SOS",
  "SRD",
  "SSP",
  "STN",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TVD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "UYU",
  "UZS",
  "VES",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XCD",
  "XDR",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMW"
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let masterControlValue = "1";
  let masterControlCurrency = "USD";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<body class="px-8 py-2">${validate_component(Navbar, "Navbar").$$render($$result, { class: "mb-8" }, {}, {
      brand: () => {
        return `<h3 slot="brand" data-svelte-h="svelte-17tr0tl"><a href="/">Currency Converter</a></h3>`;
      },
      default: () => {
        return `<ul class="inline"><li>${validate_component(Button, "Button").$$render(
          $$result,
          {
            href: "https://github.com/BBaskett/currency-converter",
            target: "_blank"
          },
          {},
          {
            default: () => {
              return `Github`;
            }
          }
        )}</li></ul>`;
      }
    })} <main class="flex flex-wrap flex-col">${validate_component(Form, "Form").$$render(
      $$result,
      {
        class: "flex justify-center items-center mb-10"
      },
      {},
      {
        default: () => {
          return `${validate_component(Select, "Select").$$render(
            $$result,
            {
              class: "mr-4",
              value: masterControlCurrency
            },
            {
              value: ($$value) => {
                masterControlCurrency = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${each(CURRENCIES, (CURRENCY_MASTER) => {
                  return `<option${add_attribute("value", CURRENCY_MASTER, 0)}>${escape(CURRENCY_MASTER)}</option>`;
                })}`;
              }
            }
          )} ${validate_component(Input, "Input").$$render(
            $$result,
            { value: masterControlValue },
            {
              value: ($$value) => {
                masterControlValue = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )} <section class="flex flex-wrap justify-center">${each(CURRENCIES, (CURRENCY_OUTPUT) => {
      let _conversion = data.conversion_rates[CURRENCY_OUTPUT], _value = Number((Number(masterControlValue) * _conversion).toFixed(2));
      return `  ${validate_component(Form, "Form").$$render($$result, { class: "currencyWrapper" }, {}, {
        default: () => {
          return `${validate_component(NumberInput, "NumberInput").$$render(
            $$result,
            {
              class: "m-2",
              label: CURRENCY_OUTPUT,
              controls: false,
              value: _value,
              format: "locale"
            },
            {},
            {}
          )} `;
        }
      })}`;
    })}</section></main> <footer></footer></body>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
