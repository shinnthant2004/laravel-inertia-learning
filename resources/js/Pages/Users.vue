<template>

 <Head title="Users"></Head>
 <h1>Users</h1>
 <ul>
   <li v-for="user in users" :key="user.id">{{ user.name }}</li>
 </ul>


</template>

<script setup>
import { Head } from "@inertiajs/inertia-vue3";
defineProps({
   users:Array
})
</script>

<style lang="scss" scoped>

</style>
