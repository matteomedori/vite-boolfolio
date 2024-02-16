<script>
import AppHeader from "./components/AppHeader.vue";
import axios from "axios";
export default {
  name: "Boolfolio",
  components: {
    AppHeader,
  },
};
</script>

<template>
  <AppHeader />
  <router-view></router-view>
</template>

<style></style>
