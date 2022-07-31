<template>
  <div class="mainPage">
    <div class="menuWrapper hidden" id="menuWrapper">
      <Menu />
    </div>
    <Home />
    <About />
    <Experiences />
    <Posts />
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Home from "./Home.vue";
import About from "./About.vue";
import Experiences from "./Experiences.vue";
import Posts from "./Posts.vue";

export default {
  components: { Menu, Home, About, Experiences, Posts },
  mounted: () => {
    const node = document.querySelector(".mainPage");
    node.addEventListener("scroll", () => {
      const menuWrapper = document.querySelector("#menuWrapper");
      if (node.scrollTop >= node.offsetHeight) {
        menuWrapper.classList.remove("hidden");
      } else {
        menuWrapper.classList.add("hidden");
      }
    });
  },
};
</script>

<style scoped>
.mainPage {
  height: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: scroll;
  box-sizing: unset;
  margin-right: -20px;
}

.menuWrapper {
  position: fixed;
  top: 0;
  width: 100%;

  transition: all 0.2s ease-in-out;
}

.menuWrapper.hidden {
  top: -60px;
}

.mainPage > div:not(:first-child) {
    padding: 80px 0;
    min-height: 100vh;
}
</style>

