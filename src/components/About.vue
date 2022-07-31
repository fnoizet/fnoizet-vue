<template>
  <div class="aboutContent" id="about">
    <div class="aboutHeader">
      A propos
      <div v-for="index in 20" :key="index" class="bubble"></div>
    </div>
    <div class="aboutWrapper">
      <div class="aboutColumn">
        <div class="aboutCell">
          <div class="title">Qui suis-je</div>
          <div class="text">{{ appDatas.description }}</div>
          <div class="dots">
            <ul>
              <li v-for="dot in appDatas.descriptionDots" :key="dot">
                {{ dot }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mainTechnos"></div>
      </div>
      <div class="aboutColumn">
        <div class="aboutCell">
          <div class="title">Développeur</div>
          <div class="text">{{ appDatas.descriptionDev }}</div>
          <div class="dots">
            <ul>
              <li v-for="dot in appDatas.descriptionDevDots" :key="dot">
                {{ dot }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mainLibs"></div>
        <div class="aboutCell">
          <div class="title">Scrum Master</div>
          <div class="text">{{ appDatas.descriptionSM }}</div>
          <div class="dots">
            <ul>
              <li v-for="dot in appDatas.descriptionSMDots" :key="dot">
                {{ dot }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { appDatas } from "@/assets/datas";
export default {
  name: "AboutContent",
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
          header.offsetWidth * Math.random() +
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
  background: url("../assets/apropos.png") no-repeat;
  padding-left: 74px;
  padding-bottom: 20px;
  position: relative;
  overflow: hidden;
}

.aboutHeader .bubble {
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

.aboutCell {
  position: relative;
}

.aboutCell .title {
  font-size: 20px;
  font-weight: bold;
  border-left: 5px solid var(--primary);
  padding-left: 5px;
  margin-bottom: 20px;
}

.aboutCell .text,
.aboutCell .dots {
  font-size: 14px;
  text-align: justify;
}

.aboutCell .dots ul {
  border: 20px solid #fff;
  position: absolute;
  top: 38px;
  height: calc(100% - 38px);
  background-color: #fff;
  width: 100%;

  /*animation: dotsReveal 20s infinite linear;*/
}

.aboutCell .dots {
  opacity: 0;
}
.aboutCell .dots:hover {
  opacity: 1;
}

@keyframes dotsReveal {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  26% {
    opacity: 1;
  }
  74% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }


}

.aboutColumn .mainLibs {
  width: 460px;
  height: 105px;
  background-image: url("../assets/main_libs.jpg");
}
</style>