<template>
<Head title="My App"></Head>
      <section class="p-6 bg-gray-300">
          <header class="flex justify-between">
            <div class="flex">
                <h1 class="text-blue-800 font-bold mr-4">My App</h1>
                <h3>Welcome Mr,{{ username }} </h3>
            </div>
            <Nav></Nav>
          </header>
      </section>

      <section class="p-6">
          <div class="max-w-4xl mx-auto">
              <slot/>
          </div>
      </section>


</template>

<script>

import Nav from './Nav.vue'
import { Head } from '@inertiajs/inertia-vue3'
    export default {
        components:{Nav,Head},
        computed:{
            username(){
                return this.$page.props.auth.user.username
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
