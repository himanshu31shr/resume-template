let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath(path.resolve('/'))
// sass('resources/assets/sass/frontend/app.scss', 'public/css/frontend.css')
    .sass('assets/__uncompiled/style.scss', 'assets/css/frontend.css')
    .js([
        'assets/__uncompiled/script.js'
    	], 'assets/js/frontend.js');

if (mix.inProduction() || process.env.npm_lifecycle_event !== 'hot') {
    mix.version();
}