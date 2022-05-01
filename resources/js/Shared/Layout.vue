<template>
      <section class="p-6 bg-gray-300">
          <header class="flex justify-between">
            <div>
                <h1 class="text-blue-800 font-bold">My App</h1>
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
import { computed } from '@vue/runtime-core'

import Nav from './Nav.vue'
    export default {
        components:{Nav},
        computed:{
            username(){
                return this.$page.props.auth.user.username
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
