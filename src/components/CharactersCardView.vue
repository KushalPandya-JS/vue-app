<template>
  <div>
      <router-link :to="{ name: 'CharacterDetail', params: { id: character.id }}">
        <img :src="character.image" />
        <p>{{ character.name }} - {{ character.status }}</p>
      </router-link>
  </div>
</template>

<script>
export default {
  props: ["character"]
};
</script>

<style scoped>

</style>
