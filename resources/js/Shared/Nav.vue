<template>
    <div>
      <nav class="mt-3 list-disc">
           <li><Link href="/" class="text-blue-500 hover:underline">Home</Link></li>
           <li><Link href="/users" class="text-blue-500 hover:underline">Users</Link></li>
           <li><Link href="/logout" class="text-blue-500 hover:underline" as="button" method="post">logout</Link></li>
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
