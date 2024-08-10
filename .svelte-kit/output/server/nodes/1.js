

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CaUQScuj.js","_app/immutable/chunks/scheduler.DD6rCPCs.js","_app/immutable/chunks/index.CB7uf5yc.js","_app/immutable/chunks/entry.DI03bMCt.js"];
export const stylesheets = [];
export const fonts = [];
