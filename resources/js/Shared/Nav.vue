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

            <li>
               <Navlink href="/login">
                 Login
               </Navlink>
            </li>
            <li>
               <Navlink href="/logout" method="post">
                 Logout
               </Navlink>
            </li>
           </ul>
      </nav>
    </div>
</template>

<script>

import Navlink from './Navlink.vue'
    export default {
      components:{  Navlink }
    }
</script>

<style lang="scss" scoped>

</style>
