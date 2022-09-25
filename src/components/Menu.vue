<template>
    <div :class="[isVisible ? 'menu visible' : 'menu']">
      <nav>
        <a href="#home" v-on:click="hideMenu()"><font-awesome-icon icon="fa-solid fa-house" /></a>
        <a href="#about" v-on:click="hideMenu()">A propos</a>
        <a href="#services" v-on:click="hideMenu()" v-if="appDatas.displayServices">Services</a>
        <a href="#experiences" v-on:click="hideMenu()">Expériences</a>
        <a href="#posts" v-on:click="hideMenu()">Posts</a>
        <a href="#contact" v-on:click="hideMenu()">Contact</a>
        <div class="closeMenu" v-on:click="hideMenu()"><font-awesome-icon icon="fa-solid fa-xmark" /></div>
      </nav>
      <div class="openMenu" v-on:click="showMenu()"><font-awesome-icon icon="fa-solid fa-bars" /></div>
    </div>
</template>

<script>
export default {
  name: "LeftMenu",
  inject: ["appDatas"],
  data: () => {
    return {
      isVisible: false
    }
  },
  methods: {
    hideMenu() {
      this.isVisible = false;
    },
    showMenu() {
      this.isVisible = true;
    }
  },
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
}

.menu nav {
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding: 0 10px;

  border-bottom: 5px solid var(--secondary);
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

.menu nav .closeMenu {
  display: none;
}

.menu .openMenu {
  display: none;
}

@media screen and (max-width: 800px) {
  .menu {
    margin: auto;
    width: 100vh;
    line-height: 60px;
    height: auto;
  }

  .menu nav {
    transition: all 0.5s ease-in-out;
    opacity: 0;
    margin-top: -50vh;
  }

  .menu.visible nav {
    margin-top: 0;
    opacity: 1;
  }

  .menu nav {
    flex-direction: column;
    padding: 0;
    width: 100vw;
  }

  .menu nav a {
    font-size:18px;
    line-height:60px;
    width: 100%;
    padding:0 8px;
    background: var(--darkgray);
    color: var(--lightgray);
  }
/*
  .menu nav .closeMenu {
    display: block;
    position: absolute;
    color: #fff;
    font-size: 30px;
    top: 10px;
    right: 10px;
    line-height: 20px;
  }*/

  .menu nav .closeMenu,
  .menu .openMenu {
    display: block;
    position: absolute;
    color: #fff;
    font-size: 16px;
    top: 10px;
    right: 10px;
    line-height: 32px;
    border-radius: 50%;
    background: var(--darkgray);
    height: 30px;
    width: 30px;
    border: 2px solid #FFF;
    box-sizing: content-box;
  }
  .menu.visible .openMenu {
    display: none;
  }
}
</style>
