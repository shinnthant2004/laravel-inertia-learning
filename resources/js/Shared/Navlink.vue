<template>
          <Link class="text-blue-500 hover:underline" :class="{'font-bold underline':active}"><slot/></Link>
</template>

<script>

    export default {
     props:{
         active:Boolean
     },
     components:{}
    }
</script>

<style lang="scss" scoped>

</style>
