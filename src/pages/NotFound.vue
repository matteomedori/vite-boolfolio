<script>
export default {
  name: "NotFound",
};
</script>
<template>
  <div class="text-center">
    <h1>PAGE NOT FOUND</h1>
    <img src="/assets/spiderman_not_found.png" alt="" />
    <router-link :to="{ name: 'home' }" class="btn btn-danger m-5">
      Torna alla home
    </router-link>
  </div>
</template>
<style></style>
