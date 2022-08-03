<template>
  <div class="experiences" id="experiences">
    <div class="experiencesHeader">
      <font-awesome-icon icon="fa-solid fa-briefcase" />
      Expériences
      <a href="/Fabien_NOIZET_CV.pdf" target="_blank">
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
}

.experiencesHeader a {
  color: red;
}

.experienceWrapper {
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
</style>