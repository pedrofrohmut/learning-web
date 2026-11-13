import { svelte } from "@sveltejs/vite-plugin-svelte"
import { defineConfig } from "vite"
import { svelteDevTools } from "vite-plugin-svelte-devtools"
import { DevTools } from "@vitejs/devtools"

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [svelte()],
// })

const devtools = svelteDevTools()

export default defineConfig({
  plugins: [
    DevTools(),
    svelte({ preprocess: devtools.preprocess }),
    devtools.plugin,
  ],
})
