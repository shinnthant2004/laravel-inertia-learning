<template>
    <div>
      <nav>
           <li><Link href="/">Home</Link></li>
           <li><Link href="/users">Users</Link></li>
           <li><Link href="/logout" as="button" method="post">logout</Link></li>
      </nav>
    </div>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue3'
    export default {
      components:{Link}
    }
</script>

<style lang="scss" scoped>

</style>
