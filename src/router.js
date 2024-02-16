import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import ProjectList from "./pages/ProjectList.vue";
import NotFound from "./pages/NotFound.vue";
import Project from "./pages/Project.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectList,
    },
    {
      path: "/projects/:slug",
      name: "single-project",
      component: Project,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});
export { router };
