<template>
  <div class="menu">
    <nav>
      <a href="#home"><font-awesome-icon icon="fa-solid fa-house" /></a>
      <a href="#about">A propos</a>
      <a href="#experiences">Expériences</a>
      <a href="#posts" v-if="appDatas.displayPostComponents">Posts</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",
  inject: ["appDatas"],
  mounted() {},
};
</script>

<style scoped>
.menu {
  margin: auto;
  width: 1000px;
  height: 60px;
  line-height: 60px;
  background: #fff;

  border-bottom: 5px solid var(--secondary);
}

.menu nav {
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding: 0 10px;
}

.menu nav a {
  line-height: 60px;
  display: inline-block;
  color: var(--darkgray);
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  padding: 0 10px;
}

.menu nav a:hover {
  color: var(--primary);
}

@media screen and (max-width: 800px) {
  .menu {
    margin: auto;
    width: 100vh;
    height: 60px;
    line-height: 60px;
  }

  .menu nav a {
    font-size:13px;
    line-height:60px;
    padding:0 8px;
  }
}
</style>
