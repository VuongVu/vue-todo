import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
    resolve: {
        alias: [{ find: '@', replacement: path.resolve('src') }],
    },
    esbuild: {
        exclude: /node_modules(?!\/vuex-composition-helpers)/,
    },
});
