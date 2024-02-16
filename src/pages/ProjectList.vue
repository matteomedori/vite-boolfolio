<script>
import ProjectCard from "../components/ProjectCard.vue";
import axios from "axios";
export default {
  name: "ProjectList",
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
    ProjectCard,
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
  <main>
    <div class="container py-4">
      <h1 class="text-center mb-4">Projects list</h1>
      <div class="row gy-4">
        <div class="col col-md-3" v-for="project in projects">
          <ProjectCard :project="project" />
        </div>
      </div>
      <div class="d-flex justify-content-center gap-3 mt-4">
        <button class="btn btn-danger" @click="prevpage">prev</button>
        <button class="btn btn-danger" @click="nextpage">next</button>
      </div>
    </div>
  </main>
</template>
<style scoped></style>
