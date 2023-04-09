import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json' assert { type: 'json' };

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'esm',
				sourcemap: true,
			}, {
				file: 'dist/index.min.js',
				format: 'iife',
				name: 'autumn',
				plugins: [
					terser(),
				],
				sourcemap: true,
			},
		],
		plugins: [
			resolve(),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
			}),
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
	},
];