<template>
    <div>
        <Nav></Nav>
        <h1>min ga lar par  {{ name }}</h1>
        <div>
            <ul>
                <li v-for="framework in frameworks" :key="framework">{{ framework }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Nav from "../Shared/Nav";
    export default {
    props: ["name", "frameworks"],
    components: { Nav }
}
</script>

<style lang="scss" scoped>

</style>
