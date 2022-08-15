<template>
  <div>
    <div class="postItem" v-on:click="handleClick">
      <img :src="this.picture" />
      <div class="name">{{ datas.name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostItem",
  props: { datas: {} },
  computed: {
    picture: function () {
      return require("../assets/" + this.datas.pic);
    },
  },
  methods: {
    handleClick() {
      if (this.datas.type === "website") {
        window.open(this.datas.url, this.datas.targetUrl).focus();
      } else {
        this.$emit('viewpost', this.datas.code);
      }
    },
  },
};
</script>
<style>
.postItem {
  position: relative;
  width: 250px;
  height: 250px;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
}

.postItem img {
  width: 100%;
}

.postItem .name {
  position: absolute;
  box-sizing: border-box;
  height: 37px;
  width: 100%;
  line-height: 37px;
  bottom: -37px;
  transition: all 0.2s ease-in-out;
  text-align: left;
  padding: 0 5px;
  background-color: #fff;
  font-weight: bold;
}

.postItem:hover .name {
  bottom: 0px;
}

@media screen and (max-width: 800px) {
  .postItem {
    width: 50vw;
    height: 50vw;
  }

  .postItem .name {
    top: 0px;
    width: auto;
  }
}
</style>
