<template>
  <div class="experienceViewerLayer" v-if="exp" v-show="isVisible" @click="closeViewer">
    <div class="experienceViewer" :style="this.viewerStyle">
      <div class="closeBtn" @click="closeViewer">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </div>
      <div class="companyLogo" :style="this.companyLogoStyle">
        <img :src="this.picture" />
      </div>
      <div class="experienceContent">
        <div class="expTitle">
          {{ this.exp.job }}
        </div>
        <div class="clientMainInfos">
          <span class="company">{{ this.exp.company }}</span>
          &nbsp;|&nbsp;<span class="place">{{ this.exp.place }}</span>
        </div>
        <div class="date">{{ this.exp.date }}</div>
        <div class="desc">{{ this.exp.desc2 }}</div>
        <div class="listTitle">T&acirc;ches principales :</div>
        <ul>
          <li v-for="task in this.exp.tasks" :key="task">
            {{ task }}
          </li>
        </ul>
        <div class="listTitle">Environnement technique :</div>
        <ul>
          <li v-for="techno in this.exp.techEnv" :key="techno">
            {{ techno }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ExperienceItem",
  emits: ['close'],
  props: ["exp"],
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    displayExperienceInfos() {
      this.isVisible = true;
    },
    closeViewer() {
      this.isVisible = false;
      this.$emit('close');
    },
  },
  computed: {
    companyLogoStyle: function () {
      return "--bgColor:" + this.exp.bgcolor + ";";
    },
    viewerStyle: function () {
      return "--companyColor:" + this.exp.color + ";";
    },
    picture: function () {
      return require("../assets/" + this.exp.companyLogoPath);
    },
  },
  watch: {
    exp: function () {
      this.displayExperienceInfos();
    },
  },
  mounted() {},
};
</script>
<style>
.experienceViewerLayer {
  position: fixed;
  top: 0;
  left: 0;
  background: #8888;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 6;
}

.experienceViewer {
  position: relative;
  top: 0;
  left: 0;
  min-height: 50vh;
  width: 800px;
  background: #fff;
  border: 2px solid var(--companyColor);
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.experienceViewer .closeBtn {
  background-color: var(--companyColor);
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: -15px;
  top: -15px;

  transition: all 0.5s ease-in-out;
}

.experienceViewer .closeBtn:hover {
  background-color: #333;
  color: #f33;
  transform: rotate(180deg);
}

.experienceViewer .companyLogo {
  width: 30%;
  background-color: var(--bgColor);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.experienceViewer .experienceContent {
  padding: 20px;
  width: 70%;
  text-align: left;
}

.experienceViewer .expTitle {
  font-size: 30px;
  font-weight: bold;
}

.experienceContent .clientMainInfos {
  font-size: 20px;
  color: #555;
}

.listTitle {
    font-weight: bold;
    margin: 10px 0;
}

.experienceContent ul {
  margin-left: 20px;
}
</style>
