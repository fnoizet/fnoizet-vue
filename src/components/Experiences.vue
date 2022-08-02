<template>
    <div class="experiences" id="experiences">
        <div class="experienceWrapper">
            <ExperienceItem v-for="experience in this.appDatas.experiences" :key="experience" :datas="experience" class="experienceItem" />
        </div>
    </div>
</template>
<script>
import ExperienceItem from './ExperienceItem.vue';
export default {
    name: "ExperiencePage",
    inject: ["appDatas"],
    components: {ExperienceItem},
    setup() {
    },
    mounted() {
        console.log(this.appDatas);
    },
}
</script>
<style scoped>
.experiences {
    padding: 60px 0;
    display: flex;
    justify-content: center;
}

.experienceWrapper {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
}
</style>