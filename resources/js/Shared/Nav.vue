<template>
    <div>
      <nav class="">
           <ul class="flex space-x-4 list-inside">
               <li>
               <Navlink href="/" :active="$page.component=='Home'">
                  Home
               </Navlink>
            </li>
           <li>
               <Navlink href="/users" :active="$page.component=='Users'">
                 Users
               </Navlink>
            </li>

            <li>
               <Navlink href="/settings" :active="$page.component=='Settings'">
                 Setting
               </Navlink>
            </li>

           <li><Link href="/logout" class="text-blue-500 hover:underline" as="button" method="post">logout</Link></li>
           </ul>
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
