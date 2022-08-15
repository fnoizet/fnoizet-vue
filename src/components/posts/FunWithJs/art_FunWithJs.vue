<template>
    <div>
        <canvas id="cels"></canvas>
        <div class="moveMouse">Bougez la souris</div>
    </div>
</template>
<script>
import Fun from './FunWithJs.js'

export default {
    mounted() {
        window.fun = new Fun();
    }
}
</script>
<style scoped>
    .moveMouse {
        width:150px;
        padding:20px;
        text-align:center;
        margin: auto;
        background-color: #8888;
        border: 1px solid #CCC8;
        color: #FFF;
        position: relative;
    }

    #cels {
        width: calc(100vw);
        height: calc(100vh);
        position: fixed;
        top:0;
        left:0;
    }

    .page {
        background: transparent;
        box-shadow: none;
    }
</style>