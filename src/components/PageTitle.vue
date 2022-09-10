<template>
    <h2>{{title}}</h2>
</template>

<script>
export default {
    name: "PageTitle",
    props: {
        title: {
            type: String, //string 외 숫자, 논리, 배열 등은 v-bind 로 전달 해야함.
            default : "페이지 제목 입니다."
        }
    }
}
</script>

<style scoped>

</style>