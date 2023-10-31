import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss';  

 export default defineConfig({
  plugins: [
    React(),
    WindiCSS(),
   ],
});
