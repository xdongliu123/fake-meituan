import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/home/HomePage"),
    },
    {
      path: "/home",
      component: () => import("../pages/home/HomePage"),
    },
    {
      path: "/cart",
      component: () => import("../pages/cart/CartPage"),
    },
    {
      path: "/order",
      component: () => import("../pages/order/OrderPage"),
    },
    {
      path: "/profile",
      component: () => import("../pages/profile/ProfilePage"),
    },
    {
      path: "/store",
      component: () => import("../pages/store/StoreDetail"),
    },
  ],
});

export default router;
