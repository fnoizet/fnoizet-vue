<template>
  <div class="appWrapper">
      <main-page />
    <!--<transition name="fadePresenting">
      <div class="welcomingWrapper" v-if="isPresenting" >
        <Welcoming @presented="hidePresenting"/>
      </div>
    </transition>
    <div class="loading" v-if="isLoading">
      <div class="loadingBar"></div>
    </div>-->
  </div>
</template>

<script>
import { appDatas } from "./assets/datas.js";
import MainPage from "./components/MainPage.vue";
// import Welcoming from "./components/Welcoming.vue";

export default {
  name: "App",
  data: () => {
    return {
      isLoading: true,
      isPresenting: false,
    };
  },
  provide() {
    return {
      appDatas,
    };
  },
  components: {
    MainPage,
    // Welcoming
  },

  methods: {
    showPresenting() {
      this.isPresenting = true;
    },
    hidePresenting() {
      this.isPresenting = false;
      window.cookieStore.set('hasVisited', 'true');
    }
  },

  mounted() {
    const hasCookie = window.cookieStore.get('hasVisited');

    hasCookie.then((cookie) => {
      this.isLoading = false;
      let hasVisited = cookie?.value === 'true';
      if(!hasVisited) {
        this.showPresenting();
      }
    }).catch((err) => {
      console.log(err);
    });
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
