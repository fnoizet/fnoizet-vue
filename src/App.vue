<template>
  <div class="appWrapper">
      <main-page />
  </div>
</template>

<script>
import { appDatas } from "./assets/datas.js";
import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  provide() {
    return {
      appDatas,
    };
  },
  components: {
    MainPage,
  },

  mounted() {
    // Calculate 1vh value in pixels
    // based on window inner height
    var vh = window.innerHeight * 0.01;

    // Set the CSS variable to the root element
    // Which is equal to 1vh
    document.documentElement.style.setProperty('--vh', vh + 'px')
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
  /*--main-gradient: linear-gradient(45deg, #008, #28F 70%);*/
  --darkgray: #333333;
  --lightgray: #EEE;
  --primary: #473BF0;
  --primarydark: #090548;
  --secondary: #fd3;
  --tertiary: #598381;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  background: var(--gray-gradient);
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}

.appWrapper {
  height: 100%;
}

.firstLoadLayout {
  z-index: 99;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gray-gradient);
  opacity: 1;
  animation-name: disappear;
  animation-delay: 2s;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

@keyframes disappear {
  0% {
    opacity: 1;
  }
  100% {
    z-index:-2;
    opacity: 0;
    display: none;
  }
}

.mainLayout {
  display: flex;
  flex-direction: row;
  height: 100%;
  opacity: 1;
}

.welcomingWrapper,
.loading {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--gray-gradient);

  transition: opacity 0.5s linear;
  overflow: hidden;
}

/**************/
/* loadingBar */
/**************/
.loadingBar {
  width: 200px;
  height: 5px;
  margin: auto;
  top: 50%;
  position: relative;  
  overflow: hidden;
}

.loadingBar::before {
  position: absolute;
  content: '';
  height: 100%;
  width: 100%;
  background-color: #FFF;
  display: block;

  animation: loading 2s ease-in-out infinite;
}

@keyframes loading {
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
}

/***************/
/* Square Anim */
/***************/

.fadePresenting-enter-active, .fadePresenting-leave-active {
  transition: opacity .5s;
}

.fadePresenting-enter {
  opacity: 1;
}

.fadePresenting-leave-to {
  opacity: 0;
}


#square {
  position: relative;
  margin: auto;
  margin-top: 0px;
  top: 50%;
  width: 0px;
  height: 0px;
  transition: all 0.25s ease-in-out;
}


</style>
