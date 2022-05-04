<template>

    <main>
     <section class="p-8 bg-white">
         <form @submit.prevent="submit" class="max-w-md mx-auto mt-8">
             <h1 class="text-blue-500 text-4xl">Login</h1>
          <div class="my-6">
           <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="email">
             Email
           </label>
           <input
           v-model="form.email"
           class="border border-gray-400 p-2 w-full"
           type="email"
           name="email"
           id="email"
           >
         <div v-if="form.errors.email" v-text="form.errors.email" class="text-red-600"></div>
        </div>

        <div class="my-6">
           <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="password">
             Password
           </label>
           <input
           v-model="form.password"
           class="border border-gray-400 p-2 w-full"
           type="password"
           name="password"
           id="password"
           >
          <div v-if="form.errors.password" v-text="form.errors.password" class="text-red-600"></div>
        </div>

        <div class="my-6">
            <button type="submit" class="bg-blue-500 text-white p-2 rounded" :disabled="form.processing">Submit</button>
        </div>
    </form>
    </section>
    </main>
</template>

<script>
import { Head } from "@inertiajs/inertia-vue3";

export default {
    layout:null
}
</script>
<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
let form=useForm({
    email:'',
    password:''
});
let submit=()=>{
    form.post('/login')
}
</script>
<style lang="scss" scoped>

</style>
