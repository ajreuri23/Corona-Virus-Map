<template>
  <div id="coronamap"></div>
</template>

<script>
//import L from "leaflet";
import { mapCreation } from "../../scripts/mapscript.js";
import {getCountries, getCoordinates} from '../../scripts/api.js';
 
export default {
  data() {
    return {
        countriesData: '',
        coordinates: ''
    };
  },
  async mounted() {
    mapCreation("coronamap");
    this.countriesData = await getCountries();
    this.coordinates = await getCoordinates();
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
