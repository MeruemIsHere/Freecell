import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
    define: {
        "import.meta.vitest": "undefined"
    },
    test: {
        includeSource: ["src/**/*.{js,ts}"]
    }
}))