<script setup lang="ts">
    //import RequestForm from
    //import ResponseWindow from
    import axios from 'axios'
    import {ref} from 'vue'

    const form = ref({ bot: '', prompt:''})

    function sendForm(){
      console.log(`Form submited. Data: ${form.value.bot}, ${form.value.prompt}`)
      axios.post('http://192.168.150.18:8000/Pub-pub', form.value,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      .then(response => {
        console.log(`End with response: ${response.data.toString()}`)
      })
      .catch(error => {
          console.error(error);
      })
    }
</script>

<template>
    <div class="req-form">
        <form v-on:submit.prevent="sendForm">
            <div>
              <label>Bot</label>
              <input v-model="form.bot" type="text" placeholder="bot"/>
            </div>
            <div>
              <label>Prompt</label>
              <input v-model="form.prompt" type="text" placeholder="prompt"/>
            </div>
            <input type="Submit" value="Send request" />
        </form>
    </div>
</template>

<style >
    .req-form {
        height: 75%;
        width: 90%;

    }
    form{
        background-color: #979795;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        border-radius: 30px;
    }
    form div{
      height: 30%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
    }
    label{
      font-size: 1.7rem;
    }
    input{
        text-align: center;
        border-radius: 60px;
        width: 70%;
        height: 50%;
        border: none;
        background-color: white;
        font-size: 1.5rem;
        aniamation: input-unpulse 1s;
    }
    @keyframes input-pulse {
      from{ transform: scale(1); }
      to{ transform: scale(1.05); }
    }
    @keyframes input-unpulse {
      from{ transform: scale(1.05); }
      to{ transform: scale(1); }
    }
    input:hover{
      animation: input-pulse 1s;
      animation-direction: alternate;
      animation-fill-mode: forwards;
    }
    input[type=submit]{
        width: 40%;
        height: 10%;
        font-size: 90%;
        background-color: orange
    }
    input[type=submit]:hover{
      background-color: white;
    }
</style>
