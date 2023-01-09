import { createRouter, createWebHistory } from "vue-router";

import MainPage from "../pages/MainPage.vue";
import AllFilmsPage from "../pages/AllFilmsPage.vue";
import FilmPage from "../pages/FilmPage.vue";
import NotFound from "../pages/404.vue";
import FilmsLayout from "../pages/FilmLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage,
    },
    {
      path: "/films",
      name: "filmsLayout",
      component: FilmsLayout,
      children: [
        {
          path: "",
          name: "films",
          component: AllFilmsPage,
        },
        {
          path: ":id",
          name: "filmPage",
          component: FilmPage,
          beforeEnter: (to, from, next) => {
            if (localStorage.getItem("auth")) {
              next();
            } else {
              next({ name: "films" });
            }
          },
        },
        {
          path: "*/*",
          redirect: { name: "films" },
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: NotFound,
    },
  ],
});
export default router;
