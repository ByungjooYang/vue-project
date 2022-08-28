<template>
    <div>
        <h1 v-if="type==='A'">A</h1>
        <h1 v-else-if="type==='B'">B</h1>
        <h1 v-else>C</h1>
    </div>
</template>

<script>
export default {
    name: "RenderingVIf",
    data(){
        return {
            type: 'A'
        };
    }
}
</script>

<style scoped>

</style>

<!--
v-show
: v-if 와 비슷하지만, 내부적으로 랜더링 되는 방식에 큰 차이가 있음.
 v-if의 경우 조건을 만족하면 그 순간에 html 블록이 생성되고, 조건에 만족하지 않으면 html 블록은 삭제가 된다.

 v-show는 조건 만족 여부에 상관없이 무조건 html 블록이 생성되며, 조건을 만족하면 css의 display를 이용해 화면에 보이게 되고
 조건을 만족하지 않으면 화면에서 숨기도록 처리가 된다. 즉, 무조건 랜더링이 된다는 것이다.

 v-if는 toggle이 일어날 때, v-show 보다 더 많은 자원을 사용하게 된다. v-if는 실제로 해당 블록 전체를 생성했다가 삭제하기 때문이다.

 해당 html 블록이 화면 내에서 자주 toggle이 일어난다면, v-show를 사용하고, 빈도가 작다면 v-if를 사용하는 것이 좋다.
-->