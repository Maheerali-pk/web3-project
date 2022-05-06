import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Governance from "../views/Governance.vue";
import Swap from "../views/Swap.vue";
import Farming from "../views/Farming.vue";

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
   {
      path: "/farming",
      name: "farming",
      component: Farming,
   },
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

export default router;
