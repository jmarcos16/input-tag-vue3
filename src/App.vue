<script>
import InputTag from './components/InputTag.vue';
</script>
<template>
    <div id="app">
        <h1>Vue 3 Input Tag</h1>
        <div>
            <InputTag />
        </div>

        <div class="link_buttons">
            <a href="http//github.com/alexiscolin/vue3-input-tag" target="_blank">
                Repository
            </a>
            <a href="https://alexiscolin.github.io/vue3-input-tag/" target="_blank">Documentation</a>
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

    .link_buttons {
        display: flex;
        gap: 1rem;
    }

    .link_buttons a {
        padding: 0.5rem 1rem;
        border-radius: 0.3rem;
        background-color: #4a5568;
        color: #fff;
        text-decoration: none;
    }

    .link_buttons a:hover {
        background-color: #2d3748;
    }

    /* Custon width */
    .input_group {
        max-width: 800px;
        min-width: 800px;
    }
</style>