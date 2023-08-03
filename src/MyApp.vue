<script setup lang="ts">
    import RequestForm from './components/RequestForm.vue'
    import ResponseWindow from './components/ResponseWindow.vue'

    function handleMsg(event){
        
    }
    
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
    #my-app{
        width: 80vw;
        min-height: 80vh;
        background-color: rgb(43, 88, 128);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .app-section{
        width: 50%;
        height: 80vh;
        background-color: azure;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: space-around; */
    }
    .app-section p{
        margin: 10% 0 10%;
        text-align: center;
        font-size: 2rem;
    }
</style>
