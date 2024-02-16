<script>
export default {
  name: "LoadingButtons",
};
</script>
<template>
  <div class="d-flex justify-content-center gap-2">
    <button class="btn btn-info" type="button" disabled>
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span class="visually-hidden" role="status">Loading...</span>
    </button>
    <button class="btn btn-info" type="button" disabled>
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span role="status">Loading...</span>
    </button>
  </div>
</template>
