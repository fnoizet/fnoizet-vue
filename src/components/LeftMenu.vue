<template>
  <div class="leftColumn">
    <div class="photo"></div>
    <div class="description">{{ appDatas.description }}</div>
    <hr/>
    <ul class="generalTags">
      <li v-for="tag in appDatas.generaltags" :key="tag">{{ tag }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "LeftMenu",
  inject: ["appDatas"],
  props: {},

  setup() {
    const state = reactive({ show: true });

    function toggleShow() {
      state.show = !state.show;
    }

    // expose the state to the template
    return {
      state,
      toggleShow,
    };
  },

  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.leftColumn {
  background: var(--main-gradient);
  display: block;
  height: 100%;
  width: 300px;
  border-right: 2px solid #DDD;
  color: #FFF;
}

.photo {
  background: url('../assets/photo.jpg') no-repeat;
  background-size: contain;
  width: 80%;
  aspect-ratio: 1;
  margin: 10% auto;

  border-radius: 10px 50% 10px 50%;
  border: 2px solid #FFF;
}

ul.generalTags {
  list-style-type: none;
    padding: 0;
    margin: 0;
}

ul.generalTags li {
    text-align: left;
    margin: 0 10px;
    font-size: 25px;
    font-family: Roboto;
}

.description {
  text-align: justify;
  font-size: 14px;
  margin: 0 10px;
}

hr {
  margin: 10px;
  height: 0;
  border-width: 1px 0 0 0;
  border-color: #FFF;
  border-style: dashed;
}
</style>
