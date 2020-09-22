<template>
<div class="locations">
    <a @click="chooseLocation(location.id)">{{ location.name }}</a>
</div>
</template>

<script>
export default {
  props: ["location"],
  methods: {
    chooseLocation(id) {
      this.$emit("locationChosen", { id });
    }
  }
};
</script>

<style scoped>

</style>
