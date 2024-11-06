const mix = require('laravel-mix')
require('laravel-mix-tailwind');

mix.setPublicPath('public')
mix.js('resources/js/notify.js', 'js')
  .postCss('resources/css/notify.css', 'dist')
  .js('resources/js/app.js', 'js')
  .postCss('resources/css/app.css', 'dist')

if (mix.inProduction()) {
  mix.version()
}

mix.disableSuccessNotifications()
