<template>
        <Layout>
            <h1 class="text-blue-600 text-4xl">min ga lar par  {{ name }}</h1>
        </Layout>
</template>

<script>
import Nav from "../Shared/Nav";
import Layout from "../Shared/Layout.vue";
    export default {
    props: ["name", "frameworks"],
    components: { Nav, Layout }
}
</script>

<style lang="scss" scoped>

</style>
