// // vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     globals: true,                       // استفاده از توابع describe, test بدون import
//     environment: 'jsdom',                // شبیه‌سازی DOM مرورگر
//     setupFiles: './src/setupTests.js',   // فایل تنظیمات اولیه
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // تعریف base اگر در sub-path دیپلوی می‌شود (معمولاً نیازی نیست)
})
