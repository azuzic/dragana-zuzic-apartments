<script setup>
import map from "@/assets/map.png";
/*
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const Premantura = { lat: 44.801221682380096, lng: 13.913602036156476 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 19,
    center: Premantura,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: Premantura,
    map: map,
  });
}

// Load Google Maps API
window.initMap = initMap;
const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCLMsaq8sP9fFRddGqc0qSVexytF65FweA&callback=initMap&libraries=&v=weekly`;
script.async = true;
script.defer = true;
document.head.appendChild(script);*/
</script>

<template>
    <DZ_Block>
        <div class="flex gap-8 justify-center">                       
            <!--div id="map" class="rounded drop-shadow w-1/2"></div-->
            <img :src="map" class="rounded drop-shadow w-full sm:w-1/2">
        </div>
    </DZ_Block>
</template>

<script>
export default {
    name: "DZ_Map",
};
</script>