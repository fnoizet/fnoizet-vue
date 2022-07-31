<template>
  <div class="menu">
    <nav>
      <a href="#home">Accueil</a>
      <a href="#about">A propos</a>
      <a href="#experiences">Expériences</a>
      <a href="#posts">Posts</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="socialLinks">
      <a href="#"></a>
      <a href="#"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftMenu",

  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
