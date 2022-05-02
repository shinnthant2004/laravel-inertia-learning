<template>

 <Head title="Users"></Head>
   <div class="flex justify-between">
       <h1 class="text-3xl text-blue-500">Users</h1>
       <input type="text" placeholder="Search..." class="border px-3" v-model="search">
   </div>

   <div class="p-3">
        <div class="overflow-x-auto">
            <table class="table-auto w-full">
                <tbody class="text-sm divide-y divide-gray-100">
                    <tr class="bg-blue-300 text-white" v-for="user in users.data" :key="user.id">
                        <td class="p-2">
                            <div class="font-medium text-gray-800">{{ user.name }}</div>
                        </td>
                        <td class="p-2">
                            <Link :href="`/users/${user.id}/edit`">Edit</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
   </div>
   <Pagination :links="users.links" class="mt-6"></Pagination>
</template>

<script setup>
import Pagination from '../Shared/Pagination.vue'
import { Head } from "@inertiajs/inertia-vue3";
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
import { Inertia } from '@inertiajs/inertia';
defineProps({
   users:Object
})
let search=ref('');
watch(search,value=>{
    Inertia.get('/users',{search:value},{
        preserveState:true,
        replace:true
    })
})
</script>

<style lang="scss" scoped>

</style>
