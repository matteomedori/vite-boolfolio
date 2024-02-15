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
        <a href="#" class="btn btn-primary">Dettagli</a>
      </div>
    </div>
  </main>
</template>
