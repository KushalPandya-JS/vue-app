<template>
  <div id="home">
    
    <div class="locations">

      <h3>Locations</h3>

      <Locations
        @locationChosen="chooseLocation"
          v-for="location in locations"
          :key="location.id"
          :location="location"
        />
    </div>

    <div v-if="selectedLocation">
      <div class="selected-location" >
          <h4>Your Selected Location</h4>
          {{ selectedLocation.name }}
      </div>
      
      <div class="characters-list">
          <CharactersCardView
            v-for="character in selectedLocation.residents.filter(character => character.status === 'Alive' || character.status === 'Dead')"
            :key="character.id"
            :character="character"
          />
      </div>
    </div>

  </div>
</template>

<script>
import CharactersCardView from "../components/CharactersCardView";
import Locations from '../components/Locations.vue'
import { locationsapi } from '../services/locations'

export default {
  name: 'Home',
  components: {
    CharactersCardView,
    Locations
  },
  data() {
    return {
      locations: [],
      selectedLocation: null
    };
  },
  methods: {
    async fetchLocations() {
      this.locations = await locationsapi.getLocations()
      console.log(this.locations);
    },
    chooseLocation(event) {
      const location = this.locations.find(c => c.id === event.id);
      this.selectedLocation = location;
    }
  },
  mounted() {
    this.fetchLocations();
  }
}
</script>

<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: left;
  text-align: left;
}

.selected-location {
  margin-bottom: 30px;
  border-radius: 10px;
  background: peachpuff;
  padding: 20px;
}

.selected-location h4 {
  margin: 0 0 10px;
}

.characters-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  align-content: center;
  min-height: 100vh;
}
</style>
