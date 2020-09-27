<template>
  <div id="home">
    
    <div class="locations">

      <div class="location-container">

        <h3>Locations</h3>

        <ol id="locationsList">
          <Locations
            @locationChosen="chooseLocation"
              v-for="location in locations"
              :key="location.id"
              :location="location"
            />
        </ol>
        
        <div class="location-observer" ref="locationObserver"></div>

      </div>

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
      temp: [],
      locations: [],
      observer: null,
      nextPage: 1,
      selectedLocation: null
    };
  },
  created() {
    this.observer = new IntersectionObserver(
      this.onElementObserved, 
      {
        root: null,
        rootMargins: '0px',
        threshold: 0.5
    }
    );
  },
  methods: {
    updateLocation(getLocations) {
      this.locations.push(getLocations)
    },
    async fetchLocations(pageNo) {
      this.temp = await locationsapi.getLocations(pageNo)
      this.nextPage = this.temp.info.next
      this.locations = [ ...this.locations, ...this.temp.results]
      console.log(this.temp)
    },
    chooseLocation(event) {
      const location = this.locations.find(c => c.id === event.id);
      this.selectedLocation = location;
    },
    onElementObserved(entries) {
      entries.forEach(({isIntersecting}) => {
        if (isIntersecting && this.nextPage) {
          this.fetchLocations(this.nextPage);
        } 
      });
    }
  },
  mounted() {
    this.observer.observe(this.$refs.locationObserver);
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
  display: grid;
  grid-template-columns: minmax(250px, 1fr) 3fr;
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

.location-container {
  position: fixed;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  overflow-wrap: break-word;
  width: 250px;
}

.location-observer {
  position: static;
  height: 1px;
}

</style>
