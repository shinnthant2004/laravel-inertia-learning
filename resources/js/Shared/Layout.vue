<template>
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
               <iframe width="100%"
                frameborder="no"
                 scrolling="no"
                  seamless src="https://player.simplecast.com/fd0bd2ba-c553-466c-a060-b144797ce369?dark=false">
               </iframe>

              <slot/>
          </div>
      </section>


</template>

<script>

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
