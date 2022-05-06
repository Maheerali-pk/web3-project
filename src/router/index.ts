import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Governance from "../views/Governance.vue";

const routes: Array<RouteRecordRaw> = [
   {
      path: "/governance",
      name: "governance",
      component: Governance,
   },
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

export default router;
