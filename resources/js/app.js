import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import LayoutVue from './Shared/Layout.vue';
createInertiaApp({
  resolve: name => {
   let page = require(`./Pages/${name}`).default;
   page.layout ??= LayoutVue
   return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component("Link",Link)
      .mount(el)
  },
})
InertiaProgress.init({
    color:'red',
    showSpinner:true
})
