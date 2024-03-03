<script>
import InputTag from './components/InputTag.vue';
</script>
<template>
    <div id="app">
        <h1>Vue 3 Input Tag</h1>
        <div>
            <InputTag />
        </div>
    </div>
</template>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:  Alber Sans, sans-serif;
    }

    #app {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>