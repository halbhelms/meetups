import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Add from '../views/Add';
import Edit from '../views/Edit';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/edit/:id/",
    name: "Edit",
    component: Edit,
    props: true
  },
  {
    path: "/add/",
    name: "Add",
    component: Add
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
