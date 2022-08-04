<template>
  <div class="mainPage">
    <div class="menuWrapper hidden" id="menuWrapper">
      <Menu />
    </div>
    <Home />
    <About />
    <Experiences />
    <Posts />
    <Contact/>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Home from "./Home.vue";
import About from "./About.vue";
import Experiences from "./Experiences.vue";
import Posts from "./Posts.vue";
import Contact from "./Contact.vue";

export default {
  components: { Menu, Home, About, Experiences, Posts, Contact },
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

    if (window.location.hash) {
      node.classList.add('directScroll');
      node.scrollTo(0, document.querySelector(window.location.hash).offsetTop);
      node.classList.remove('directScroll');
    }
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

.directScroll {
  scroll-behavior: auto !important;
}

.menuWrapper {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  transition: all 0.2s ease-in-out;
}

.menuWrapper.hidden {
  top: -60px;
}

.mainPage > div:not(:first-child) {
    padding: 80px 0;
    min-height: 100vh;
}

@media screen and (max-width: 800px){
  .mainPage > div {
    width: 100vw;
  }
}
</style>

