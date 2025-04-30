import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',     // expose to the network
    port: 5144,          // custom port
    strictPort: true     // don't fallback to another port if 5144 is busy
  }
});
