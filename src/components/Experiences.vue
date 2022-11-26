<template>
  <div class="experiences" id="experiences">
    <div class="experiencesBackground">
      <div class="expbg_1"></div>
      <div class="expbg_2"></div>
    </div>
    <div class="experiencesHeader">
      <font-awesome-icon icon="fa-solid fa-briefcase" />
      Expériences
      <a href="https://api.fabiennoizet.fr/datas/pdf/" target="_blank">
        <font-awesome-icon icon="fa-solid fa-file-pdf" />
      </a>
    </div>
    <div class="experienceWrapper">
      <ExperienceItem
        v-for="experience in this.appDatas.experiences"
        :key="experience"
        :datas="experience"
        class="experienceItem"
        @selectItem="handleSelect"
      />
      <ExperienceViewer :exp="selectedExp" @close="emptySelection"/>
    </div>
  </div>
</template>
<script>
import ExperienceItem from "./ExperienceItem.vue";
import ExperienceViewer from "./ExperienceViewer.vue";
export default {
  name: "ExperiencePage",
  data() {
    return {
        selectedExp : null
    }
  },
  inject: ["appDatas"],
  components: { ExperienceItem, ExperienceViewer },
  setup() {
    
  },
  methods: {
    handleSelect(datas) {
        this.selectedExp = datas;
    },
    emptySelection() {
        this.selectedExp = null
    }
  },
  mounted() {
    const node = document.querySelector(".mainPage");
    /* eslint-disable */
    node.addEventListener("scroll", (e) => {
      const pageScroll = e.target.scrollTop;
      const wrapperPosition = document.querySelector('#experiences').offsetTop;
      const wrapperHeight = document.querySelector('#experiences').offsetHeight;
      let parallaxDivider = 5;
      //(wrapperPosition + wrapperHeight) - pageScroll
      const paralaxRate =  wrapperPosition - pageScroll + wrapperHeight - pageScroll*0.8;

      document.querySelectorAll(".experiencesBackground div").forEach((el) => {
         el.style.backgroundPosition = "0px "+(paralaxRate/(parallaxDivider))+"px"
         parallaxDivider = parallaxDivider*3;
      });
    });
  },
};
</script>
<style scoped>
.experiences {
  padding: 60px 0;
  display: flex;
  justify-content: center;
  background-color: var(--lightgray);
  flex-direction: column;
    align-items: center;
    position: relative;
}

.experiencesHeader {
  font-size: 40px;
    font-weight: bold;
    color: var(--primary);
    text-align: left;
    width: 1000px;
    height: 84px;
    line-height: 64px;
    padding-bottom: 20px;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.experiencesHeader a {
  color: red;
}

.experienceWrapper {
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index:1;
}

.experiencesBackground {
  position:absolute;
  top:0;
  left:0;
  height: 100%;
  width: 100%;
  z-index: 0;
  background-color: var(--lightgray);
  overflow: hidden;
}

.expbg_1, .expbg_2 {
  position: absolute;
  mix-blend-mode: multiply;
  opacity:0.2;
  height: 100%;
  width: 100%;
  background-repeat: repeat;
}

.expbg_1 {background-image: url('../assets/expbgcomp1.jpg');}
.expbg_2 {background-image: url('../assets/expbgcomp2.jpg');}

@media screen and (max-width:800px) {
  .experienceWrapper {
    width: 100vw;
  }

  .experiencesHeader{
    font-size:30px;
    width: 100%;
    padding-left:20px;
  }
  
}
</style>