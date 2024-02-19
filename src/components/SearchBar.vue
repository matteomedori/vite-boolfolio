<script>
import store from "../store";
export default {
  name: "SearchBar",
  data() {
    return {
      store,
    };
  },
  methods: {
    search() {
      this.store.projects.currentPage = 1;
      this.$router.push({
        name: "projects",
        query: {
          page: 1,
          key: store.projects.searchKey,
        },
      });
      this.$emit("searchProjects");
    },
  },
};
</script>
<template>
  <form action="" @submit.prevent="search">
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="search-key"
        placeholder="search in projects"
        v-model="store.projects.searchKey"
      />
      <label for="search-key">Search in projects...</label>
    </div>
    <button class="btn btn-primary mb-4">Search</button>
  </form>
</template>
