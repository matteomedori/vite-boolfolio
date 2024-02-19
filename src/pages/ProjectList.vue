<script>
import ProjectCard from "../components/ProjectCard.vue";
import LoadingButtons from "../components/LoadingButtons.vue";
import AppHeader from "../components/AppHeader.vue";
import SearchBar from "../components/SearchBar.vue";
import axios from "axios";
import store from "../store";
export default {
  name: "ProjectList",
  data() {
    return {
      store,
      projects: [],
      lastPage: null,
      loading: false,
      errors: null,
    };
  },
  components: {
    ProjectCard,
    LoadingButtons,
    AppHeader,
    SearchBar,
  },
  methods: {
    getProjects() {
      this.loading = true;
      this.errors = null;
      axios
        .get(this.store.api.baseUrl + this.store.api.apiUrls.projects, {
          params: {
            page: this.store.projects.currentPage,
            key: this.store.projects.searchKey,
          },
        })
        .then((response) => {
          this.lastPage = response.data.data.last_page;
          this.projects = response.data.data.data;
        })
        .catch((error) => {
          this.errors = error.response.data.message;
          this.projects = [];
        })
        .finally(() => {
          this.loading = false;
        });
    },
    nextpage() {
      if (this.store.projects.currentPage < this.lastPage) {
        this.store.projects.currentPage++;
        this.$router.push({
          name: "projects",
          query: {
            page: this.store.projects.currentPage,
            key: this.store.projects.searchKey,
          },
        });
        this.getProjects();
      }
    },
    prevpage() {
      if (this.store.projects.currentPage > 1) {
        this.store.projects.currentPage--;
        this.$router.push({
          name: "projects",
          query: {
            page: this.store.projects.currentPage,
            key: this.store.projects.searchKey,
          },
        });
        this.getProjects();
      }
    },
  },
  created() {
    this.store.projects.currentPage = this.$route.query?.page ?? 1;
    this.store.projects.searchKey = this.$route.query?.key ?? null;

    this.getProjects();
  },
};
</script>
<template>
  <AppHeader />
  <main>
    <div class="container py-4">
      <h1 class="text-center mb-4">Projects list</h1>

      <SearchBar @searchProjects="getProjects" />

      <div v-if="errors">{{ errors }}</div>

      <LoadingButtons v-if="loading" />

      <div class="row gy-4" v-else>
        <div class="col col-md-3" v-for="project in projects">
          <ProjectCard :project="project" />
        </div>
        <div class="d-flex justify-content-center gap-3 mt-4">
          <button class="btn btn-danger" @click="prevpage">prev</button>
          <button class="btn btn-danger" @click="nextpage">next</button>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped></style>
