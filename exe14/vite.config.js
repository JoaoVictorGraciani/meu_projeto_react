import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // ou @vitejs/plugin-react

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'meu_projeto_react',
})
