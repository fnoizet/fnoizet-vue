<template>
  <div class="homeContent" id="home">
    <div class="homeVisual">
      <div class="violetZone">
        <div v-for="index in 100" :key="index" class="bubble"></div>
      </div>
      <div class="photoZone"></div>
      <div class="name">
        <span class="firstname">Fabien</span>&nbsp;<span class="lastname"
          >Noizet</span
        >
      </div>
      <div class="title">Développeur / Scrum Master</div>
    </div>
    <a class="homeArrowDown" href="#about">
        <font-awesome-icon icon="fa-solid fa-circle-arrow-down" />
    </a>
  </div>
</template>
<script>
/**
 * :icon="['fas', 'typewriter']"
 */
export default {
  name: "HomeContent",
  methods: {
    initBubbleAnimation () {
      const header = document.querySelector('.violetZone');
      const bubbles = document.querySelectorAll('.violetZone .bubble')
      bubbles.forEach((el) => {
        el.style = "animation: bubbleUpHome "+(10+2*Math.random())+"s linear "+(10*Math.random())+"s infinite; "+
          "left : " + (header.offsetWidth * Math.random() - 75) + 'px;'+
          "--finalRotation: "+Math.random()*360+"deg;";
      });
    },
  },
  mounted() {
    this.initBubbleAnimation();
  },
};
</script>
<style>
.homeContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--darkgray);
}

.homeVisual {
  position: relative;
  height: 490px;
  width: 1000px;
  background-color: #fff;
  text-align: left;
  padding-left: 20px;
  padding-top: 166px;

  background-image: url("../assets/home_bg_triangles.png");

  animation: homeVisualAnim 0.5s forwards;
}

@keyframes homeVisualAnim {
  0% {
    opacity: 0;
    height: 0px;
  }

  100% {
    opacity: 1;
    height: 490px;
  }
}

.homeVisual .name {
  font-family: Impact;
  margin-left: -1500px;
  font-size: 101px;
  color: #767676;

  animation: homeVisualNameAnim 0.5s forwards 0.2s;
  position: absolute;
}

@keyframes homeVisualNameAnim {
  0% {
    margin-left: -1500px;
  }

  100% {
    margin-left: 0px;
  }
}

.homeVisual .name .firstname {
  color: var(--primary);
}

.homeVisual .title {
  font-family: verdana;
  font-size: 28px;
  color: var(--darkgray);
  font-weight: bold;
  margin-left: -1500px;

  animation: homeVisualNameAnim 0.5s forwards 0.4s;
  position: absolute;
  top: 60%;
}

.homeVisual .violetZone {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-image: url("../assets/home_bg_violet.png");
  overflow: hidden;
}

.violetZone .bubble{
  position: absolute;

  display : inline-block;
  height : 0;
  width : 0;
  border-right : 87px solid transparent;
  border-bottom : 150px solid var(--primary);
  border-left : 87px solid transparent;
  top: 490px;
  opacity: 1;
  mix-blend-mode: screen;
}

@keyframes bubbleUpHome{
  from {
    transform: rotate(0deg);
    top: 490px;
    opacity: 1;
  }

  to {
    transform: rotate(var(--finalRotation));
    top: -5px;
    opacity: 0;
  }
}

.homeVisual .photoZone {
  background-image: url("../assets/home_bg_photo.png");
  background-size: 80%;
  background-position: right 50px;
  position: absolute;
  height: 100%;
  bottom: 0;
  right: -50px;
  background-repeat: no-repeat;
  aspect-ratio: 1;
}

.homeArrowDown {
    color: #FFF;
    font-size: 50px;
    opacity: 0;
    margin-top: 20px;
    cursor: pointer;
    animation: arrowReveal 1s forwards 1s;
}

@keyframes arrowReveal {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>