<template>
    <div>
        <img v-bind:src="imgSrc" />
    </div>
</template>

<script>
export default {
    name: "DataBindingAttribute",
    data(){
        return {
            imgSrc: "https://kr.vuejs.org/images/logo.png"
        }
    }
}
</script>

<style scoped>

</style>