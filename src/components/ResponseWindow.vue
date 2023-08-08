<script setup lang="ts">
    import {ref, onMounted} from 'vue'

    let id = 0

    let ws = null
    let msg = null

    const responses = ref([])

    function addResponse(){
        responses.value.push({id: id++, prompt: 'Hi'+id, answer: 'Hello'+id})
    }

    function addResponseMessage(prompt, answer){
        responses.value.push({id: id++, prompt: prompt+id, answer: answer})
    }

    function handleMessage(event){

        console.log(`Event data: ${event.data}`)
        let msg = JSON.parse(event.data)
        let msgPrompt = msg["prompt"]
        let msgAnswer = msg["answer"]
        addResponseMessage(msgPrompt, msgAnswer)

    }

    onMounted( () => {
        //const url = new URL('http://127.0.0.1:9999/.well-known/mercure')
        const url = new URL('http://192.168.1.104:9999/.well-known/mercure')
        url.searchParams.append('topic', '/Ai-pubs');
        ws = new EventSource(url);
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

    </div>
</template>

<style >
    .res-console{
        background-color: black;
        height: 75%;
        width: 90%;
        border-radius: 40px;
        color: white;
        overflow-y: auto;
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
