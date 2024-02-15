<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
export default {
  name: "Boolfolio",
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
      apiUrls: {
        projects: "/api/projects",
      },
      projects: [],
    };
  },
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    getProjects() {
      axios
        .get(this.baseUrl + this.apiUrls.projects)
        .then((response) => {
          console.log(response.data.data);
          this.projects = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <AppHeader />
  <AppMain :projects="projects" />
</template>

<style></style>
