<template>
    <div>

    </div>
</template>

<script>
export default {
    name: "ComputedTest",
    data(){
        return {
            firstName: 'Seungwon',
            lastName: 'Go'
        };
    },
    computed: {
        fullName(){
            return this.firstName + ' ' + this.lastName;
        }
    }
}
</script>

<style scoped>

</style>


<!--
computed는 vue 인스턴스 내에 정의된 데이터값 변경이 일어나는지를 감시하고, 변경될 때마다 정의된 함수가 실행된다.

watch도 computed와 비슷하지만 용도에는 차이가 있다.

computed 는 기존에 정의된 데이터 값을 기반으로 새로운 데이터 값을 활용하기 위해 사용이 된다면, watch는 watch에 정의된 데이터 값 하나만을 감시하기 위한 용도로 사용된다.

watch는 실제 데이터 변경이 일어나기 전까지는 실행되지 않는다. 따라서 기존에 변수에 값이 있더라도 초기에 할당된 값이 반드시 변경이 일어나야만 실행된다.
-->