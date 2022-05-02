<template>

 <Head title="Users"></Head>
 <h1>Users</h1>

<!-- component -->

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
defineProps({
   users:Object
})
</script>

<style lang="scss" scoped>

</style>
