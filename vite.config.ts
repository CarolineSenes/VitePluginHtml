import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(
      { jsxRuntime: "classic" }
    ),
    createHtmlPlugin({
      inject:{
        data:{
          title: `<h1>My title from vite-plugin-html</h1>`
        }
      }
    })
  ],
});
