<template>
    <div class="postItem" v-on:click="handleClick">
        <img :src="this.picture">
        <div class="name">{{datas.code}}</div>
    </div>
</template>
<script>
export default {
    name: "PostItem",
    props: {datas: {}},
    computed: {
        picture: function() {return require('../assets/'+this.datas.pic);}
    },
    methods: {
        handleClick() {
            if(this.work.type === "website") {
                window.open(this.datas.url, this.datas.targetUrl).focus();
            } else {
                console.log(this.datas);
            }
        },
    }
}
</script>
<style>
.postItem {
    width: 200px;
    margin: 15px;
    box-sizing: border-box;
    border: 1px solid #F0F0F0;
    background: #FFF;
    box-shadow: 2px 0 2px;
    box-sizing: border-box;
    padding: 5px;
    cursor: pointer;

    transition: all 0.3s ease-in-out;
}



.postItem:hover {
    box-shadow: 20px 20px 20px #0008;
    transform: rotate3d(2, 10, 0, 20deg);
}

.postItem img {
    width: 100%;
}

.postItem .name {
    height: 37px;
    line-height: 37px;
}
</style>
