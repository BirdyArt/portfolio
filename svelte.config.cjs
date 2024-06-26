const static = require("@sveltejs/adapter-static");
const pkg = require("./package.json");
const { resolve } = require("path");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: static(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
      resolve: {
        alias: {
          $lib: resolve(__dirname, "./src/lib"),
          $utils: resolve(__dirname, "./src/utils"),
        },
      },
    },
  },
};
