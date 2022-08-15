<template>
  <div class="contact" id="contact">
    <div class="contactWrapper">
      <div class="contactMeans">
        <div class="contactMean">
          <a href="https://www.linkedin.com/in/fabien-noizet/">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
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
      <div class="poweredBy">
        <div class="logoVue" title="VueJs">
          <font-awesome-icon icon="fa-brands fa-vuejs" />
        </div>
        2022
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
  padding: 50px 0 !important;
  position: relative;
  min-height: 0px !important;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  background: var(--primarydark) url('../assets/footer.png');
  color: #fff;
  font-size: 20px;
}

.contactWrapper {
  display: flex;
  flex-direction: column;
  width: 1000px;
  align-items: center;
  justify-content: space-evenly;
  z-index: 2;
  row-gap: 50px;
  color: var(--primary);
}

.contactMeans {
  display: flex;
  flex-direction: row;
  z-index: 2;
  column-gap: 50px;
  margin-top: 50px;
}

.contactWrapper a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s linear;
}

.contactWrapper a:hover {
  color: var(--primarydark);
}

.poweredBy {
  font-size: 14px;
}

.logoVue {
  color: #42b883;
  font-size: 50px;
}

@media screen and (max-width: 800px) {
  .contactMeans {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
