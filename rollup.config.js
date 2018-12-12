
import buble from 'rollup-plugin-buble';
import progress from 'rollup-plugin-progress';

export default {
  input: './index.js',
  output: {
    name: 'stat-methods.js',
    file: './dist/stat-methods.js',
    format: 'umd',
  },
  plugins: [
    buble({
      objectAssign: 'Object.assign',
    }),
    progress(),
  ],
};
