<template>
    <div>{{htmlString}}</div>
    <div v-html="htmlString"></div>
</template>

<script>
export default {
    name: "DataBindingHtml",
    data(){
        return {
            htmlString : '<p style="color:red;">This is a red String</p>'
        }
    }
}
</script>

<style scoped>

</style>