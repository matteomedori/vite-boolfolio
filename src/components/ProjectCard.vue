<script>
export default {
  name: "ProjectCard",
  props: ["project"],
};
</script>
<template>
  <main>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">
          {{ project.description.substring(0, 200) }}
        </p>
        <router-link
          :to="{ name: 'single-project', params: { slug: project.slug } }"
          class="btn btn-primary"
        >
          Dettagli
        </router-link>
      </div>
    </div>
  </main>
</template>
