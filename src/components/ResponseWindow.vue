<script setup lang="ts">
    import {ref, onMounted} from 'vue'

    let id = 0

    const ws = null
    const msg = null

    const responses = ref([
        { id: id++, prompt: 'HI', answer: 'HELLO'},
        { id: id++, prompt: 'HIiiii', answer: 'HELLOa'},
        { id: id++, prompt: 'HIee', answer: 'HELLOee'}
    ])

    function addResponse(){
        responses.value.push({id: id++, prompt: 'Hi'+id, answer: 'Hello'+id})
    }

    function addResponseMessage(){
        responses.value.push({id: id++, prompt: 'Hi'+id, answer: this.msg})
    }

    function handleMessage(event){
        this.msg = event.data
        addResponseMessage()
    }

    onMounted( () => {
        ws.value = new WebSocket('ws://127.0.0.1:9010')
        ws.onmessage = handleMessage
    })

</script>

<template>
    <div class="res-console">
        <table>
            <tr>
                <th>Prompt</th>
                <th>Answer</th>
            </tr>
            <tr v-for="response in responses" :key="responses.id">
                <td>{{ response.prompt }}</td> 
                <td>{{ response.answer }}</td>
            </tr>
        </table>
        <button @click="addResponse()">Add res</button>
    </div>
</template>

<style >
    .res-console{
        background-color: black;
        height: 60%;
        width: 90%;
        border-radius: 40px;
        color: white;
    }
    table{
        width: 100%;
        padding: 1% 0 1% 0;
    }
    td{
        padding: 2% 0 2% 0;
        text-align: center;
    }
</style>
