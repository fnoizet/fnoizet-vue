<template>
  <div class="contact" id="contact">
    <div class="socialLinks">
      <a href="https://www.linkedin.com/in/fabien-noizet/" target="_blank">
        <font-awesome-icon icon="fa-brands fa-linkedin" />
      </a>
      <a href="https://www.instagram.com/fabien.nzt/" target="_blank">
        <font-awesome-icon icon="fa-brands fa-instagram" />
      </a>
      <a href="https://www.facebook.com/fabiennoizet" target="_blank">
        <font-awesome-icon icon="fa-brands fa-facebook" />
      </a>
    </div>
    <div class="contactWrapper">
      <div class="aboutResume">
        Développeur web Front-end et Back-end depuis 2005, j'apporte un
        véritable savoir faire, et une écoute attentive pour vous aider à mener
        à bien vos projets.
      </div>
      <div class="contactMeans">
        <span class="contactName">Fabien NOIZET</span><br/>
        179 Corniche Fleurie, 06200 Nice<br/>
        <font-awesome-icon icon="fa-solid fa-at" /> fnoizet@gmail.com<br/>
        <font-awesome-icon icon="fa-solid fa-phone" /> 06 62 98 73 54
      </div>
    </div>
    
    <div class="SIREN">SIREN : 520 524 059</div>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #111;
  color: var(--darkgray);
  border-top: 1px solid #222;
  font-size: 14px;
}

.contactWrapper {
  display: flex;
  flex-direction: row;
  width: 1000px;
  align-items: flex-start;
  justify-content: space-evenly;
  z-index: 2;
  row-gap: 50px;
  color: var(--lightgray);
}

.contactWrapper > div {
  width: 300px;
}

.contactMeans {
  text-align: right;
}

.contactMeans .contactName {
  font-size:20px;
  font-weight: bold;
}

.contactWrapper a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s linear;
}

.contactWrapper .aboutResume {
  text-align: left;
}

.socialLinks {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 0 0 40px;
}

.socialLinks a {
  color: var(--secondary);
  font-size:40px;
  transition: all 0.2s linear;
}

.socialLinks a:hover {
  margin:-5px 0 5px;
}

.SIREN {
  margin: 40px 0 0 0;
}

@media screen and (max-width: 800px) {
  .contactWrapper {
    width: 100vw;
    flex-direction: column;
    font-size: 15px;
    padding: 0 40px;
  }

  .contactWrapper > div {
    width: 100%;
  }
}
</style>
