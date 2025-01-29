import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        target: 'esnext',
        outDir: 'dist',
        rollupOptions: {
            output: {
                manualChunks: {
                    'motion-canvas': ['@motion-canvas/core', '@motion-canvas/2d']
                }
            }
        }
    },
    optimizeDeps: {
        include: ['@motion-canvas/core', '@motion-canvas/2d']
    },
    server: {
        open: true
    }
}); 