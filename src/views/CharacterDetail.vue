<template>
  <div class="character-details" v-if="character">
    <img :src=character.image :alt=character.image>
    <dl>
      <dt>Name</dt>
      <dd>{{ character.name }}</dd>

      <dt>Status</dt>
      <dd>{{ character.status }}</dd>

      <dt>Species</dt>
      <dd>{{ character.species }}</dd>

      <dt>Type</dt>
      <dd>{{ character.type }}</dd>

      <dt>Gender</dt>
      <dd>{{ character.gender }}</dd>

      <dt>Origin</dt>
      <dd>{{ character.origin.name }}</dd>

      <dt>Location</dt>
      <dd>{{ character.location.name }}</dd>

    </dl>
  </div>
</template>

<script>
import { characterapi } from '../services/character'

export default {
  name: 'CharacterDetail',
  data() {
    return {
      character: {
        origin: {
        },
        location: {
        }
      }
    };
  },
  methods: {
    async fetchCharacter(characterID) {
      this.character = await characterapi.getCharacter(characterID)
    }
  },
  mounted() {
    this.fetchCharacter(this.$route.params.id);
  }
}
</script>

<style>
.character-details {
  text-align: left;
} 

dl {
  display: grid;
  grid-template-columns: max-content auto;
}

dt {
  font-weight: bold;
  grid-column-start: 1;
}

dd {
  grid-column-start: 2;
}
</style>
