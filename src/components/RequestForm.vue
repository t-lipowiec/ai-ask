<script setup lang="ts">
    //import RequestForm from
    //import ResponseWindow from
</script>

<template>
    <div class="req-form">
        <form>
            <label>Bot</label>
            <input name="bot" type="text" />
            <label>Prompt</label>
            <input name="prompt" type="text" />
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
        background-color: rgb(162, 123, 255);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        border-radius: 30px;
    }
    input{
        text-align: center;
        border-radius: 30px;
        width: 80%;
        height: 20%;
        border: none;
        background-color: white;
        font-size: 1.5rem;
    }
    input[type=submit]{
        width: 40%;
        height: 10%;
        font-size: 90%;
    }
</style>
