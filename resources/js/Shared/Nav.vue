<template>
    <div>
      <nav class="mt-3 list-disc">
           <li>
               <Navlink href="/" :active="$page.component=='Welcome'">
                  Home
               </Navlink>
            </li>
           <li>
               <Navlink href="/users" :active="$page.component=='Users'">
                 Users
               </Navlink>
            </li>

           <li><Link href="/logout" class="text-blue-500 hover:underline" as="button" method="post">logout</Link></li>
      </nav>
    </div>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue3'
import Navlink from './Navlink.vue'
    export default {
      components:{ Link, Navlink }
    }
</script>

<style lang="scss" scoped>

</style>
