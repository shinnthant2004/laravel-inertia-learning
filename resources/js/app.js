import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import LayoutVue from './Shared/Layout.vue';
createInertiaApp({
  resolve: async name => {
   let page = (await import(`./Pages/${name}`)).default;
   if(page.layout === undefined){
    page.layout ??= LayoutVue
   }
   return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component("Link",Link)
      .mount(el)
  },
  title:title => `${title} - My App`
})
InertiaProgress.init({
    color:'red',
    showSpinner:true
})
