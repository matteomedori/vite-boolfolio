<script>
export default {
  name: "AppHeader",
};
</script>
<template>
  <header class="bg-primary">
    <div class="container d-flex justify-content-between text-white p-3">
      <div>Boolfolio</div>
      <nav>
        <ul class="list-unstyled p-0 m-0 d-flex gap-4">
          <router-link :to="{ name: 'home' }" class="nav-link">
            Home
          </router-link>
          <router-link :to="{ name: 'projects' }" class="nav-link">
            Projects
          </router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style></style>
