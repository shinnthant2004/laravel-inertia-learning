<template>

 <Head title="Users"></Head>
            <h1>Users</h1>
               <div style="margin-top:900px">
                  <p>Current Time is {{ time }}</p>
                  <Link class="text-blue-900" href="/users" preserve-scroll="">Refresh</Link>
              </div>


</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
defineProps({
    time:String
})
</script>

<style lang="scss" scoped>

</style>
