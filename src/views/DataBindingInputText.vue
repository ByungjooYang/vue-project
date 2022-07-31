<template>
    <div>
        <input type="text" v-model="valueModel"/>
    </div>
</template>

<script>
export default {
    name: "DataBindingInputText",
    data(){
        return {
            valueModel: 'South Korea'
        }
    }
}
</script>

<style scoped>

</style>

<!--
v-model : 데이터 키명을 v-model 에 넣어주면 모델인 data 와 뷰인 Input 의 value 속성이 서로 양방향으로 데이터 바인딩이 설정됨.
-->