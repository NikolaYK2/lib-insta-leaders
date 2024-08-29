import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve, join } from "path";
import { dependencies, devDependencies } from "./package.json"; //импортируем
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    target: "esnext",
    minify: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, join("src", "index.ts")), //где храниться весь код библиотеки
      name: "lib-insta-leaders", //name
      // the proper extensions will be added
      fileName: "index", //index
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      //утилита для создания кода bundl
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        ...Object.keys(devDependencies),
        ...Object.keys(dependencies),
        "react/jsx-runtime",
      ],
      //закидываем!!!
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        dir: "dist",
        entryFileNames: "[name].cjs",
        format: "es",
      },
    },
  },
});
