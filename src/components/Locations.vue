<template>
  <li>
      <a @click="chooseLocation(location.id)" :title=location.name>{{ location.name }}</a>
  </li>
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

li {
  margin: 10px;
}

li:hover a {
  cursor: pointer;
  text-decoration: underline;
}

</style>
