export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.V8DJVDXL.js","app":"_app/immutable/entry/app.D46sq6G9.js","imports":["_app/immutable/entry/start.V8DJVDXL.js","_app/immutable/chunks/entry.Dn0yn2M2.js","_app/immutable/chunks/scheduler.DD6rCPCs.js","_app/immutable/entry/app.D46sq6G9.js","_app/immutable/chunks/scheduler.DD6rCPCs.js","_app/immutable/chunks/index.CB7uf5yc.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
