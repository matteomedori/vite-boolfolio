<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  name: "AppMain",
  props: ["projects"],
  components: {
    ProjectCard,
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
    </div>
  </main>
</template>
