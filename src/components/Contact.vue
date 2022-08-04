<template>
  <div class="contact" id="contact">
    <div class="gradientBackground"></div>
    <div class="contactWrapper">
      <div class="contactMean">
        <a href="https://www.linkedin.com/in/fabien-noizet/">
            <font-awesome-icon icon="fa-brands fa-linkedin"/>
            Fabien NOIZET
        </a>
      </div>
      <div class="contactMean">
        <font-awesome-icon icon="fa-solid fa-at" /> fnoizet@gmail.com
      </div>
      <div class="contactMean">
        <font-awesome-icon icon="fa-solid fa-phone" /> 06 62 98 73 54
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactComponent",
};
</script>
<style scoped>
.contact {
  position:relative;
  min-height: 0px !important;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  background-image: url('../assets/home_bg_triangles.png');
  color: #fff;
  font-size: 20px;
}

.contact .gradientBackground{
    background: linear-gradient(#3338, #111C, #000F);
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    mix-blend-mode: overlay;
}

.contactWrapper {
  display: flex;
  flex-direction: row;
  width: 1000px;
  align-items: center;
  justify-content: space-evenly;
  z-index: 2;
}

.contactWrapper a {
  color: #fff;
  text-decoration: none;
  transition: color 0.2s linear;
}

.contactWrapper a:hover {
    color: var(--secondary);
}

@media screen and (max-width: 800px) {
  .contactWrapper {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
