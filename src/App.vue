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
      currentPage: 1,
      lastPage: null,
    };
  },
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    getProjects() {
      axios
        .get(this.baseUrl + this.apiUrls.projects, {
          params: {
            page: this.currentPage,
          },
        })
        .then((response) => {
          this.lastPage = response.data.data.last_page;
          this.projects = response.data.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    nextpage() {
      if (this.currentPage < this.lastPage) {
        this.currentPage++;
        this.getProjects();
      }
    },
    prevpage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.getProjects();
      }
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <AppHeader />
  <AppMain :projects="projects" @nextPage="nextpage" @prevPage="prevpage" />
</template>

<style></style>
