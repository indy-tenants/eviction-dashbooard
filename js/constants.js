export const leaflet_config = {
  // Maps and data
  base_map: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
  base_map_attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>',
  township_geojson: './data/marion_townships.geojson',

  // Settings
  zoom_control_position: 'bottomright',
  zoom_control_max: 15,
  zoom_control_min: 8,
  zoom_initial: 11.5,
  zoom_initial_coords: [39.7803473, -86.1330879],
}
