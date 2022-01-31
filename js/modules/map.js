import {leaflet_config} from "../constants.js";

function setBaseMap(map, attribution) {
  L.tileLayer(leaflet_config.base_map, {attribution: attribution}).addTo(map)
}

function showTownships(map) {
  axios.get(leaflet_config.township_geojson).then(res => L.geoJSON(res.data, {}).addTo(map))
}

export function createMap() {
  const map = L.map('map', {minZoom: leaflet_config.zoom_control_min, maxZoom: leaflet_config.zoom_control_max})
  setBaseMap(map, leaflet_config.base_map_attribution)
  showTownships(map)
  map.zoomControl.setPosition(leaflet_config.zoom_control_position)
  map.setView(leaflet_config.zoom_initial_coords, leaflet_config.zoom_initial)
}