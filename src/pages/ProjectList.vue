<script>
import ProjectCard from "../components/ProjectCard.vue";
import LoadingButtons from "../components/LoadingButtons.vue";
import AppHeader from "../components/AppHeader.vue";
import axios from "axios";
import store from "../store";
export default {
  name: "ProjectList",
  data() {
    return {
      store,
      projects: [],
      currentPage: 1,
      lastPage: null,
      loading: false,
    };
  },
  components: {
    ProjectCard,
    LoadingButtons,
    AppHeader,
  },
  methods: {
    getProjects() {
      this.loading = true;
      axios
        .get(this.store.api.baseUrl + this.store.api.apiUrls.projects, {
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
        })
        .finally(() => {
          this.loading = false;
        });
    },
    nextpage() {
      if (this.currentPage < this.lastPage) {
        this.currentPage++;
        this.$router.push({
          name: "projects",
          query: { page: this.currentPage },
        });
        this.getProjects();
      }
    },
    prevpage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.$router.push({
          name: "projects",
          query: { page: this.currentPage },
        });
        this.getProjects();
      }
    },
  },
  created() {
    this.currentPage = this.$route.query?.page ?? 1;
    this.getProjects();
  },
};
</script>
<template>
  <AppHeader />
  <main>
    <div class="container py-4">
      <h1 class="text-center mb-4">Projects list</h1>

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
