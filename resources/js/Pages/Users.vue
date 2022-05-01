<template>

        <Layout>
            <h1>Users</h1>
               <div style="margin-top:900px">
                  <p>Current Time is {{ time }}</p>
                  <Link class="text-blue-900" href="/users" preserve-scroll="">Refresh</Link>
              </div>
        </Layout>

</template>

<script setup>

import Layout from '../Shared/Layout.vue'
defineProps({
    time:String
})
</script>

<style lang="scss" scoped>

</style>
