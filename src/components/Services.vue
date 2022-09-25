<template>
  <div v-show="this.appDatas.displayServices" class="services" id="services">
    <div class="servicesHeader">
      <font-awesome-icon icon="fa-solid fa-newspaper" /> Services
    </div>
    <div class="servicesWrapper">
      <div class="serviceItem">
        <h3>Projets Web</h3>
        <p>
          Site vitrine, E-commerce, application métier, selon vos besoins sur le web
        </p>
      </div>
      <div class="serviceItem">
        <h3>Graphisme et intégration</h3>
        <p>
          Logos, carte de visite, plaquettes publicitaires, design...
        </p>
      </div>
      <div class="serviceItem">
        <h3>Application métier</h3>
        <p>
          Analyse de besoins fonctionnels et développements pour répondre à vos problématiques
        </p>
      </div>
      <div class="serviceItem">
        <h3>Maintenance et Correction</h3>
        <p>
          Maintenance corrective et évolutive de vos produits et outils web
        </p>
      </div>
      <div class="serviceItem">
        <h3>Outils d'administration</h3>
        <p>
          Des systèmes configurables pour faire évoluer vos contenus
        </p>
      </div>
      <div class="serviceItem">
        <h3>Contenus dynamiques et animés</h3>
        <p>
          Pour une expérience utilisateur complète et agréable
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "servicesContent",
  inject: ["appDatas"]
};
</script>
<style scoped>
.services{
  display: flex;
  justify-content: center;
  background-color: #FFF;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.servicesHeader {
  font-size: 40px;
  font-weight: bold;
  color: var(--primary);
  text-align: left;
  width: 1000px;
  height: 84px;
  line-height: 64px;
  padding-bottom: 20px;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.servicesWrapper {
  display: flex;
  width: 1000px;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: wrap;
  margin: 50px auto 0;
  position: relative;
  background: url("../assets/services_bg.jpg") no-repeat center;
  background-size: contain;
}

.serviceItem {
  position: relative;
  width: 450px;
  height: 70px;
  text-align: left;
  padding: 0 30px;
  border-color: var(--darkgray);
  border-style: solid;
  border-width: 0 0 0 2px;
  margin: 70px 0 0 0;
  font-size: 16px;
}

.serviceItem h3 {
  color: var(--primary);
}

.serviceItem:nth-child(2n+1) {
  text-align: right;
  border-width: 0 2px 0 0;
  margin: 0 0 70px 0;
}

.serviceItem::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--darkgray);
  border: 0px solid transparent;
  display: block;
  top: calc(50% - 10px);
  left: -62px;

  transition: all 0.5s ease-in-out;
  z-index: 1;
}

.serviceItem:nth-child(2n+1)::before {
  left: auto;
  right: -62px;
}

.serviceItem:hover::before {
  scale: 2;
  background-color: var(--lightgray);
  border: 1px solid var(--primary)
}

.serviceItem::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 2px;
  background: var(--darkgray);
  display: block;
  top: calc(50% - 1px);
  left: -62px;
  z-index: 0;
}

.serviceItem:nth-child(2n+1)::after {
  left: auto;
  right: -62px;
}

.serviceItem p {
    font-size: 14px;
}

.servicesWrapper::before {
    content: '';
    position: absolute;
    height: calc(100% - 60px);
    width: 0px;
    left: 50%;
    top: 30px;
    border-left: 2px dashed var(--primary);
}

@media screen and (max-width:800px) {
  .servicesWrapper {
    width: 100vw;
  }

  .servicesHeader{
    font-size:30px;
    width: 100%;
    padding-left:20px;
  }

  .servicesWrapper::before {
    content: none;
  }

  .serviceItem {
    margin: 0 0 20px 0 !important;
    border: none;
    height: auto;
    text-align: left !important;
  }
  
}
</style>

