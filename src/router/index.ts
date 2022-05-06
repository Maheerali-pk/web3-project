import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Governance from "../views/Governance.vue";
import Swap from "../views/Swap.vue";

const routes: Array<RouteRecordRaw> = [
   {
      path: "/governance",
      name: "governance",
      component: Governance,
   },
   {
      path: "/swap",
      name: "swap",
      component: Swap,
   },
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

export default router;
