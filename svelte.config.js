import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

import postcssNormalize from 'postcss-normalize';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        preprocess({
            postcss: {
                plugins: [
                    postcssNormalize(),
                    postcssNested(),
                    autoprefixer()
                ]
            }
        })
    ],

    kit: {
        adapter: adapter()
    }
};;

export default config;
