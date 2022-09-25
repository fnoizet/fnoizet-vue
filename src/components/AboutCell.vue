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
  transition: opacity 0.2s cubic-bezier(1, 0.005, 0, 1), transform 0.2s linear;
}

.aboutCell .dots {
  position: absolute;
  top: 40px;
  width: 100%;
  height: calc(100% - 38px);
}

.aboutCell .dots ul {
  border: 20px solid #fff;
  height: 100%;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-width: 0 20px;
}

.aboutCell .text {
  transform: rotateY(0deg);
  opacity: 1;
  visibility: visible;
}

.aboutCell .dots {
  transform: rotateY(180deg);
  opacity: 0;
  visibility: hidden;
}

.aboutCell.revealDots .text {
  transform: rotateY(180deg);
  opacity: 0;
  visibility: hidden;
}

.aboutCell.revealDots .dots {
  transform: rotateY(0deg);
  opacity: 1;
  visibility: visible;
}
</style>
