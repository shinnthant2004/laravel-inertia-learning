<template>
    <div>
        <Nav></Nav>
         <h1>Users</h1>

         <div style="margin-top:900px">
             <p>Current Time is {{ time }}</p>
             <Link class="text-blue-900" href="/users" preserve-scroll="">Refresh</Link>
         </div>
    </div>
</template>

<script>
import Nav from '../Shared/Nav'
import { Link } from '@inertiajs/inertia-vue3'
    export default {
      components:{Nav,Link},
      props:['time']
    }
</script>

<style lang="scss" scoped>

</style>
