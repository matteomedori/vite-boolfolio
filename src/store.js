import { reactive } from "vue";

const store = reactive({
  api: {
    baseUrl: "http://127.0.0.1:8000",
    apiUrls: {
      projects: "/api/projects",
    },
  },
});

export default store;
