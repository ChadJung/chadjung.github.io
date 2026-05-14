import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// 배포 대상이 사용자 페이지 리포(ChadJung.github.io)이므로 base는 '/'.
// 프로젝트 페이지 리포로 옮길 경우 VITE_BASE 환경변수로 '/<repo>/' 지정.
const base = process.env.VITE_BASE ?? '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
