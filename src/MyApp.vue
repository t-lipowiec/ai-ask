<script setup lang="ts">
    import RequestForm from './components/RequestForm.vue'
    import ResponseWindow from './components/ResponseWindow.vue'
</script>

<template>
    <div id="my-app">
        <div class="app-section request">
            <p>Request</p>
            <RequestForm />
        </div>
        <div class="app-section response">
            <p>Response</p>
            <ResponseWindow />
        </div>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
    #my-app{
        width: 80vw;
        min-height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Inter', sans-serif;
    }
    .app-section{
        width: 50%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3% 0 3% 0;
        /* justify-content: space-around; */
    }
    .app-section p{
        margin: 1% 0 10%;
        text-align: center;
        font-size: 3rem;
        color: white;
    }
</style>
