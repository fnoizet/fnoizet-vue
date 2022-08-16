<template>
  <div class="posts" id="posts">
    <div class="postsHeader">
      <font-awesome-icon icon="fa-solid fa-newspaper" /> Posts
    </div>
    <div class="postsWrapper">
      <div class="itemsWrapper">
        <PostItem
          v-for="work in this.workToShow"
          :key="work.code"
          :datas="work"
          class="post"
          @viewpost="handleClick"
        />
      </div>
      <div
        v-show="displayArticle"
        v-on:click="displayArticle = false"
        class="articleLayer"
      >
        <div class="articleContent"><component :is="currentPost" /></div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import PostItem from "./PostItem.vue";

export default {
  name: "PostPage",
  inject: ["appDatas"],
  data: function () {
    return {
      currentPostCode: null,
      displayArticle: false,
      work: {},
    };
  },

  computed: {
    workToShow: function () {
      return this.appDatas.work.filter((el) => el.display === true);
    },
    currentPost: function () {
      if (this.currentPostCode) {
        return defineAsyncComponent(() => {
          return import(
            "./posts/" +
              this.currentPostCode +
              "/art_" +
              this.currentPostCode +
              ".vue"
          );
        });
      } else {
        return null;
      }
    },
  },

  components: { PostItem },
  methods: {
    handleClick(postCode) {
      this.currentPostCode = postCode;
      this.displayArticle = true;
    },
  },
};
</script>
<style scoped>
.posts {
  background: linear-gradient(var(--primary), var(--primarydark));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.postsHeader {
  font-size: 40px;
  font-weight: bold;
  color: var(--lightgray);
  text-align: left;
  width: 1000px;
  height: 84px;
  line-height: 64px;
  padding-bottom: 20px;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.postsWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.itemsWrapper {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: left;
  width: 1000px;
}

.articleLayer {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  top: 0;
  left: 0;
  background-color: #0008;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.articleContent {
  background-color: #fff;
  text-align: left;
  width: 1000px;
  padding: 10px;
  overflow: auto;
}

@media screen and (max-width:800px) {
  .postsHeader {
    font-size: 30px;
    width: 100%;
    padding-left: 20px;
  }

  .postsWrapper {
    width: 100%;
  }

  .articleContent {
    width: 100vw;
    padding: 5px;
  }
}
</style>