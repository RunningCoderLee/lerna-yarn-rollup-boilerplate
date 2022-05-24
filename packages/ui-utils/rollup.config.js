import { defineConfig } from 'rollup'
import path from 'path'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import externals from 'rollup-plugin-node-externals'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import sizes from 'rollup-plugin-sizes'
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
  output: [
    {
      dir: 'es',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [...publicConfig.plugins, typescript({ tsconfig: './tsconfig.json', outDir: './es' })],
}

export default defineConfig([cjsConfig, esConfig])
