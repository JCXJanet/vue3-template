# Vue 3 + TypeScript + Vite

## 初始化项目
npm init vite@latest my-project

cd vue3-template

pnpm install

npm run dev

## 本地手动修改 
文件 node_modules/vite-plugin-mock/dist/index.mjs

import { createRequire } from 'module';

const require = createRequire(import.meta.url);
