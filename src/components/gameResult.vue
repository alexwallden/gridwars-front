<template>
    <div class="result-info-container">
        <h3>Nr. {{props.playerPlace}}</h3>
        <h5 class="player-name">{{ props.playerName}}</h5>
        <p class="player-color">{{ props.playerColor}}</p>
    </div>

</template>

<script setup lang="ts">

const props = defineProps({
   playerName: String,
   playerColor: String,
   playerId: String,
   playerPlace: String
})

</script>

<style scoped lang="scss">
.result-info-container {
    margin-bottom: 10px;
    width: 25%;
    height: 100%;
    padding: 0.2rem;
    h3 {
        text-align: center;
    }
    h5 {
        text-align: center;
    }
}
.player-color {
    background-color: red;
    width: 100%;
    height: 10vh;
    text-align: center;
}

</style>