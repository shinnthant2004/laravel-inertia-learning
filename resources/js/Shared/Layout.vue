<template>
      <section class="p-6 bg-gray-300">
          <header class="flex justify-between">
            <h1 class="text-blue-800 font-bold">My App</h1>
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
    export default {
        components:{Nav}
    }
</script>

<style lang="scss" scoped>

</style>
