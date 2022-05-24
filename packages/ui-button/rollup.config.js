import { defineConfig } from 'rollup'
import path from 'path'
import typescript from '@rollup/plugin-typescript'
import sizes from 'rollup-plugin-sizes'
import styles from 'rollup-plugin-styles'
import resolve from '@rollup/plugin-node-resolve'
import externals from 'rollup-plugin-node-externals'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import packageJson from './package.json'

/**
 * @type {import('rollup').RollupOptions.plugins}
 */
const publicConfig = {
  input: 'src/index.ts',
  plugins: [
    externals(),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
    }),
    styles({
      mode: 'extract',
    }),
    sizes(),
  ],
}

/**
 * @type {import('rollup').RollupOptions}
 */
const cjsConfig = {
  ...publicConfig,
  output: {
    file: packageJson.main,
    format: 'cjs',
    sourcemap: true,
    assetFileNames: '[name][extname]',
  },
  plugins: [
    ...publicConfig.plugins,
    typescript({ tsconfig: path.resolve(__dirname, './tsconfig.json') }),
  ],
}

/**
 * @type {import('rollup').RollupOptions}
 */
const esConfig = {
  ...publicConfig,
  preserveModules: true,
  output: [
    {
      dir: 'es',
      format: 'es',
      sourcemap: true,
      assetFileNames: '[name][extname]',
    },
  ],
  plugins: [...publicConfig.plugins, typescript({ tsconfig: './tsconfig.json', outDir: './es' })],
}

export default defineConfig([cjsConfig, esConfig])
