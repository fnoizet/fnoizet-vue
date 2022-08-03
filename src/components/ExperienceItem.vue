<template>
    <div class="experienceItem" @click="$emit('selectItem', this.datas)">
        <div class="companyLogo" :style="this.style">
            <img :src="this.picture">
        </div>
    </div>
</template>
<script>
export default {
    name: "ExperienceItem",
    props: {datas: {}},
    emits: ['selectItem'],
    computed: {
        style: function () {return "--companyColor:"+this.datas.bgcolor+";";},
        picture: function() {return require('../assets/'+this.datas.companyLogoPath);}
    },
    mounted() {
    }
}
</script>
<style>
.experienceItem {
    display: flex;
    flex-direction: row;
    width: 33.3%;
    aspect-ratio: 1.5;
    font-size: 12px;
    cursor: pointer;
    filter: grayscale(100%);
    transition: filter 0.2s linear;
}

.experienceItem:hover {
    filter: grayscale(0%);
}

.experienceItem .companyLogo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    background-color: var(--companyColor);
}

.companyLogo img {
    width: 100%;
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
