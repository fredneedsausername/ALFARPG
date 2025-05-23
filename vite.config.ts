import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    root: '.',
    base: '/alfarpg/',
    build: {
        outDir: 'dist', // Where to put the final build
        emptyOutDir: true, // Clean 'dist' before each build
    },
    server: {
        open: true // Auto-open the browser on npm run dev
    },
    preview: {
        open: true, // Auto-open browser when running npm run preview
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
})
