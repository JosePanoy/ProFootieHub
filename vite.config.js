import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api/sportsdb': {
        target: 'https://www.thesportsdb.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/sportsdb/, ''),
      },
      '/api/football-data': {
        target: 'https://api.football-data.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/football-data/, ''),
      },
    },
  },
});
