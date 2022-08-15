<template>
<!--    <div class="container" v-bind:class="{'active': isActive, 'text-red': hasError}">Class Binding</div>-->
    <div class="container" v-bind:class="[activeClass, errorClass]">Class Binding</div>
</template>

<script>
export default {
    name: "DataBindingClass",
    /*data(){
        return {
            isActive: true,
            hasError: false
        }
    }*/
    data(){
        return {
            activeClass: 'active',
            errorClass: 'text-red'
        }
    }
}
</script>

<style scoped>
    .container{
        width: 100%;
        height: 200px;
    }
    .active {
        background-color: yellow;
        font-weight: bold;
    }
    .text-red{
        color: red;
    }
</style>

<!--
두 번째 배열을 사용한 클래스는 특정 조건에 따른 클래스 바인딩 처리를 true, false 로 할 수 없다.
-->