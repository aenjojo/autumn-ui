import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import peerDepsExt from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json' assert { type: 'json' };

export default [
	{
		input: 'src/index.ts',
		output: {
			file: packageJson.main,
			format: 'esm',
			sourcemap: true,
		},
		plugins: [
			peerDepsExt(),
			resolve(),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
			}),
			postcss({
				config: {
					path: './postcss.config.js',
				},
				extensions: [
					'.css',
				],
				minimize: true,
				extract: 'main.css',
			}),
			terser(),
		],
		external: [
			'react-dom',
		],
	},
	{
		input: 'dist/types/index.d.ts',
    	output: [
			{
				file: 'dist/index.d.ts',
				format: 'esm',
			},
		],
    	plugins: [
			dts(),
		],
		external: [
			/\.css$/,
		],
	},
];