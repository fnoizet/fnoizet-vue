<template>
  <div class="aboutCell">
    <div class="clickDots" v-on:click="revealDots">...</div>
    <div class="title">{{ title }}</div>
    <div class="text">{{ description }}</div>
    <div class="dots">
      <ul>
        <li v-for="dot in dots" :key="dot">
          {{ dot }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutCell",
  props: ["title", "description", "dots"],
  methods: {
    revealDots(e) {
      const cell = e.target.parentNode;
      if (cell.classList.contains("revealDots")) {
        cell.classList.remove("revealDots");
      } else {
        cell.classList.add("revealDots");
      }
    },
  },
};
</script>
<style scoped>
.aboutCell {
  position: relative;
}

.aboutCell .title {
  font-size: 20px;
  font-weight: bold;
  border-left: 5px solid var(--primary);
  padding-left: 5px;
  margin-bottom: 20px;
}

.aboutCell .clickDots {
  color: var(--darkgray);
  font-size: 20px;
  font-weight: bold;
  margin-bottom: -23px;
  line-height: 23px;
  text-align: right;
  cursor: pointer;
}

.aboutCell .text,
.aboutCell .dots {
  font-size: 14px;
  text-align: justify;
}

.aboutCell .dots ul {
  border: 20px solid #fff;
  position: absolute;
  top: 40px;
  height: calc(100% - 38px);
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-width: 0 20px;

  /*animation: dotsReveal 20s infinite linear;*/
}

.aboutCell .dots {
  opacity: 0;
}
.aboutCell .dots:hover,
.aboutCell.revealDots .dots {
  opacity: 1;
}

@keyframes dotsReveal {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  26% {
    opacity: 1;
  }
  74% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
