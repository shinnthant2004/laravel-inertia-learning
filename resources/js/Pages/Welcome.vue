<template>
    <div>
        <h1>min ga lar par  {{ name }}</h1>
        <div>
            <ul>
                <li v-for="framework in frameworks" key="framework">{{ framework }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
      props:['name','frameworks'],
    }
</script>

<style lang="scss" scoped>

</style>
