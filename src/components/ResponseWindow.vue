<script setup lang="ts">
    import {ref, onMounted} from 'vue'

    let id = 0

    let ws = null
    let msg = null

    const responses = ref([
        { id: id++, prompt: 'HI', answer: 'HELLO'},
        { id: id++, prompt: 'HIiiii', answer: 'HELLOa'},
        { id: id++, prompt: 'HIee', answer: 'HELLOee'}
    ])

    function addResponse(){
        responses.value.push({id: id++, prompt: 'Hi'+id, answer: 'Hello'+id})
    }

    function addResponseMessage(prompt, answer){
        responses.value.push({id: id++, prompt: prompt+id, answer: answer})
    }

    function handleMessage(event){

        console.log(`Event data: ${event.data}`)
        let msg = JSON.parse(event.data)
        let msgContent = msg["Ai-mess"]
        addResponseMessage("Ai-mess", msgContent)

    }

    onMounted( () => {
        let url = new URL('http://192.168.150.18:9999/.well-known/mercure')

        url.searchParams.append('topic', '/Ai-pubs');
        ws = new EventSource(url);

        //const eventSource = new EventSource(url);
        //ws.value = new WebSocket('ws://127.0.0.1:9010')
        ws.onmessage = handleMessage
    })

</script>

<template>
    <div class="res-console">
    <button @click="addResponse()">Add res</button>
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

    </div>
</template>

<style >
    .res-console{
        background-color: black;
        height: 75%;
        width: 90%;
        border-radius: 40px;
        color: white;
        overflow-y: scroll;
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
