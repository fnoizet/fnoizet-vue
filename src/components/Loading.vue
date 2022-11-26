<template>
    <div class="loadingPage">
        <div class="loader"></div>
        
    </div>
</template>
<script>
export default {
  name: "LoadingPage",
};
</script>
<style scoped>
.loadingPage{
    background-color: var(--darkgray);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
}

.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
} 
</style>
