<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
        <button type="button" @click="one(), two()">Click</button>
        <button type="button" @click="setCount(0)">Click</button>
        <p>The counter is : {{counter}}</p>
    </div>
</template>

<script>
export default {
    name: "EventClick",
    data(){
        return {
            counter: 0
        };
    },
    methods: {
        increaseCounter(){
            this.counter = this.counter + 1;
        },
        one(){
            alert('One');
        },
        two(){
            alert('Two');
        },
        setCount(counter){
            this.counter = counter;
        }
    }
}
</script>

<style scoped>

</style>