<template>
  <div class="aboutContent" id="about">
    <div class="aboutHeader">
      <font-awesome-icon icon="fa-solid fa-circle-question" />
      A propos
      <div v-for="index in 20" :key="index" class="bubble">
        <font-awesome-icon icon="fa-solid fa-circle-question" />
      </div>
    </div>
    <div class="aboutWrapper">
      <div class="aboutColumn">
        <AboutCell
          title='Qui suis-je'
          :description=appDatas.description
          :dots=appDatas.descriptionDots
        />
        <div class="mainTechnos"></div>
      </div>
      <div class="aboutColumn">
        <AboutCell
          title='Développeur'
          :description=appDatas.descriptionDev
          :dots=appDatas.descriptionDevDots
        />
        <div class="mainLibs"></div>
        <AboutCell
          title="Scrum Master"
          :description=appDatas.descriptionSM
          :dots=appDatas.descriptionSMDots
        />
      </div>
    </div>
  </div>
</template>
<script>
import AboutCell from "./AboutCell.vue";
export default {
  name: "AboutContent",
  components: {AboutCell},
  inject: ["appDatas"],
  methods: {
    initBubbleAnimation() {
      const header = document.querySelector(".aboutHeader");
      const bubbles = document.querySelectorAll(".aboutHeader .bubble");
      bubbles.forEach((el) => {
        el.style =
          "animation: bubbleUp " +
          (2 + 2 * Math.random()) +
          "s linear " +
          2 * Math.random() +
          "s infinite; " +
          "left : " +
          (header.offsetWidth - 15) * Math.random() +
          "px;" +
          "--finalRotation: " +
          Math.random() * 360 +
          "deg;" +
          "filter: blur(" +
          Math.random() * 5 +
          "px)";
      });
    },
  },
  mounted() {
    this.initBubbleAnimation();
  },
};
</script>
<style>
.aboutContent {
  background-color: var(--darkgray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.aboutHeader {
  font-size: 40px;
  font-weight: bold;
  color: var(--secondary);
  text-align: left;
  width: 1000px;
  height: 84px;
  line-height: 64px;
  padding-bottom: 20px;
  position: relative;
  overflow: hidden;
}

.aboutHeader ._bubble {
  position: absolute;

  display: inline-block;
  height: 0;
  width: 0;
  border-right: 8px solid transparent;
  border-bottom: 15px solid var(--secondary);
  border-left: 8px solid transparent;
  top: 84px;
  opacity: 1;
}

.aboutHeader .bubble {
  position: absolute;

  display: inline-block;
  top: 84px;
  opacity: 1;
}

@keyframes bubbleUp {
  from {
    transform: rotate(0deg);
    top: 84px;
    opacity: 1;
  }

  to {
    transform: rotate(var(--finalRotation));
    top: -5px;
    opacity: 0;
  }
}

.aboutWrapper {
  background-color: #fff;
  width: 100%;
  min-height: 50vh;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  text-align: left;
}

.aboutColumn {
  width: 460px;
  min-height: 50vh;
}

.aboutColumn > div {
  margin-bottom: 20px;
}

.aboutColumn .mainTechnos {
  width: 460px;
  height: 258px;
  background-image: url("../assets/main_technos.jpg");
}

.aboutColumn .mainLibs {
  width: 460px;
  height: 105px;
  background-image: url("../assets/main_libs.jpg");
}
</style>