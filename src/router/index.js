import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Form from '../views/MeetupForm';
import Details from '../views/Details'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/edit/:id/",
    name: "Edit",
    component: Form,
    props: true
  },
  {
    path: "/add/",
    name: "Add",
    component: Form
  },
  {
    path: "/details/:id/",
    name: "Details",
    component: Details
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
