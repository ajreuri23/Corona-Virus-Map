<template>
  <div id="coronamap"></div>
</template>

<script>
//import L from "leaflet";
import { mapCreation, putDots } from "../../scripts/mapscript.js";
 
export default {
  data() {
    return {
        countriesData: '',
        coordinates: ''
    };
  },
  async mounted() {
    mapCreation("coronamap");
    putDots();
  }
};
</script>

<style>
#coronamap {
  position: absolute;
  width: 100%;
  height: 90%;
  left: 0%;
  top: 10%;
}
</style>
