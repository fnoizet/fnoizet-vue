<template>
    <div class="experienceItem">
        <div class="companyLogo" :style="this.style">
            <img :src="this.picture">
        </div>
        <div class="descriptionWrapper">
            <div class="jobTitle">{{datas.job}}</div>
            <div class="company">{{datas.company}}</div>
            <div class="date">{{datas.date}}</div>
            <div class="description">{{datas.desc2}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ExperienceItem",
    props: {datas: {}},
    computed: {
        style: function () {return "--companyColor:"+this.datas.bgcolor+";";},
        picture: function() {return require('../assets/'+this.datas.companyLogoPath);}
    },
    mounted() {
        console.log(this.datas);
    }
}
</script>
<style>
.experienceItem {
    display: flex;
    flex-direction: row;
    background-color: var(--lightgray);
    box-shadow: 2px 2px 5px 1px #0003;
    width: calc(50% - 5px);
    height: 200px;
    font-size: 12px;
}


.experienceItem .companyLogo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    height: 100%;
    background-color: var(--companyColor);
}

.companyLogo img {
    width: 200px;
    height: 100px;
}

.descriptionWrapper {
    text-align: left;
    padding: 10px;
    color: var(--darkgray);
}

.descriptionWrapper .jobTitle {
    font-size: 20px;
    font-weight: bold;
}
</style>
